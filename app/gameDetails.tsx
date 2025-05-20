'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Infobox from './infoBox'; 
import { gamesEG } from "./common/mapPos";
import MapSection from './common/map';
import { useTranslation } from 'next-i18next';
import '../lib/i18n';
import { useSession } from "next-auth/react"; 
import { useUI } from './context/UIContext';
import Login from "./login";
import Link from 'next/link';


interface ModalProps {
    message: {
        id: number;
        title: string;
        capacity: string;
        story: string;
        content: string;
        points: string;
        station: string;
        url: string;
        tagged: string;
        timeLeft: number;
        started: boolean;
        languages: { language: string; title: string; story: string }[];
    };
    onClose: () => void;
    onSave: () => void;
}

type PointEntry = {
  id: number;
  gameId: number;
  teamId: number;
  player: string;
  value: number;
  slot: number;
  lastUpdated: Date;
};



const Modal: React.FC<ModalProps> = ({ message, onClose, onSave }) => {
    const { setIsModalOpen } = useUI();
    const [showSaved, setShowSaved] = useState(false); 
    const [showNotSaved, setShowNotSaved] = useState(false); 
    const [errorMessage, setErrorMessage] = useState("");
    const [showMap, setShowMap] = useState(false);
    const [points, setPoints] = useState<PointEntry[]>([]);
    const globalPointsRef = useRef<PointEntry[]>([]);

    const { t } = useTranslation(); 

    const handleShowMap = () => setShowMap(prev => !prev); 

    const handleSavedClose = () => setShowSaved(false);
    const handleNotSavedClose = () => setShowNotSaved(false);
    const [updateSite, setUpdateSite] = useState(true);
      const [updateData, setUpdateData] = useState(false);
  const [teamData, setTeamData] = useState<{
  id?: number;
  credentials?: string;
  name?: string;
  players?: string[];
}>({
  id: 0,
  credentials: "",
  name: "",
  players: ["","","",""]
});



    const { data: session } = useSession();

    const [playerInputs, setPlayerInputs] = useState({
        user1: "",
        user2: "",
        user3: "",
        user4: ""
    });

    const modalRef = useRef<HTMLDivElement>(null);
    

    useEffect(() => {
        const modal = modalRef.current;
        setIsModalOpen(true);

        // Fokus auf das Modal setzen
        if (modal) {
            modal.focus();
        }

        // Scrollen im Hintergrund deaktivieren
        document.body.style.overflow = 'hidden';

        // Escape-Taste zum Schließen des Modals
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        // Cleanup: Entfernen des Event Listeners und Aktivieren des Scrollens
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            setIsModalOpen(false);

            // Scrollen wieder aktivieren, wenn das Modal geschlossen wird
            document.body.style.overflow = 'auto';
        };
    }, [onClose, setIsModalOpen]);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPlayerInputs(prev => ({ ...prev, [name]: value }));
    };

  const handleSave = async () => {
  try {
    const players: { [key: string]: number } = {
      user1: Number(playerInputs.user1) || -1,
      user2: Number(playerInputs.user2) || -1,
      user3: Number(playerInputs.user3) || -1,
      user4: Number(playerInputs.user4) || -1,
    };

    // Grundregel: user1 & user2 müssen immer gesetzt sein
    if (players.user1 === -1 || players.user2 === -1) {
      setErrorMessage("Felder wurden fehlerhaft ausgefüllt. (1 o 2)");
      throw new Error("Ungültige Eingaben");
    }

    if (!message.tagged.includes("overridePlayer") && !!teamData?.players?.[2] && players.user3 === -1) {
      setErrorMessage("Felder wurden fehlerhaft ausgefüllt.");
      throw new Error("Ungültige Eingaben");
    }

    if (!message.tagged.includes("overridePlayer") && !!teamData?.players?.[3] && players.user4 === -1) {
      setErrorMessage("Felder wurden fehlerhaft ausgefüllt.");
      throw new Error("Ungültige Eingaben");
    }

    // Wenn overridePlayer-Tag gesetzt ist, dann auch user3/4 validieren
    if (message.tagged.includes("overridePlayer")) {
      if (players.user3 === -1 || players.user4 === -1) {
        setErrorMessage("Alle vier Spieler müssen ausgefüllt sein.");
        throw new Error("Ungültige Eingaben");
      }
    }

    // Senden
    const response = await fetch("/api/points/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ game: message.id, ...players }),
    });

    if (!response.ok) throw new Error("Fehler beim Speichern");

    setShowSaved(true);
    setUpdateSite(true);

    const playedGames = localStorage.getItem("playedGames") || "";
    const formattedId = message.id < 10 ? `0${message.id}` : message.id;
    localStorage.setItem("playedGames", `${playedGames}+${formattedId}+`);

    setTimeout(() => setShowSaved(false), 3000);
    onSave();

  } catch (error) {
    console.log("Speichern fehlgeschlagen:", error);
    setShowNotSaved(true);
    setTimeout(() => setShowNotSaved(false), 3000);
  }
};


   const fetchData = useCallback(async () => {
  try {
    const res = await fetch(`/api/points/get?gameId=${message.id}`);
    if (!res.ok) throw new Error('Fehler beim Laden der Punkte');

    const data = await res.json();
    globalPointsRef.current = data.points || []; // Speichern des Werts in useRef

    // Punkte direkt nach Reihenfolge auf user1..user4 mappen
    const inputUpdates: Partial<typeof playerInputs> = {};

    globalPointsRef.current.forEach((point) => {
  const slot = point.slot; // oder point.field, je nach DB
  if (!slot || slot < 1 || slot > 4) return; // Sicherheit

  const key = `user${slot}` as keyof typeof playerInputs;
  inputUpdates[key] = String(point.value);
});

    setPoints(globalPointsRef.current);
    setPlayerInputs(prev => ({ ...prev, ...inputUpdates }));
  } catch (err) {
    // Typisiere den Fehler als Instanz von Error
    if (err instanceof Error) {
      console.error('Fehler beim Laden der Punkte:', err.message);
    } else {
      // Wenn der Fehler kein Error ist (z. B. bei unerwarteten Fehlern)
      console.error('Unbekannter Fehler:', err);
    }
  }
},[message.id]); 

useEffect(() => {
  if (updateSite) {
    fetchData();
    setUpdateSite(false);
  }
}, [updateSite, fetchData]);

  useEffect(() => {
  if (!session?.user?.credentials) return;

  const fetchTeam = async () => {
    try {
      const res = await fetch(`/api/team/search?query=${session.user.credentials}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Fehler beim Laden des Teams");

      const data = await res.json();
      setTeamData(data.team); // Nur das team-Objekt setzen
    } catch (error) {
      console.error("Team-Fehler:", error);
    } finally {
      setUpdateData(false); // Immer nach dem Versuch zurücksetzen
    }
  };

  fetchTeam();
}, [session, updateData]);


const [showLogin, setShowLogin] = useState(false);
const handleLoginClose = () => setShowLogin(false);
const handleShowLogin = () => setShowLogin(true);
const offsetMinutes = new Date().getTimezoneOffset()* 60 * 1000;
const [timeLeft, setTimeLeft] = useState(message.timeLeft + offsetMinutes);

useEffect(() => {
  
  const interval = setInterval(() => {
    setTimeLeft((prevTime) => {
      if (prevTime <= 1000) {
        clearInterval(interval);
        return 0;
      }
      return prevTime - 1000;
    });
  }, 1000);

  return () => clearInterval(interval);
});





const formatTime = (ms: number) => {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const hoursStr = hours > 0 ? `${hours}h ` : '';
  const minutesStr = minutes > 0 || hours > 0 ? `${minutes}m ` : '';
  const secondsStr = `${seconds}s`;


  return `${hoursStr}${minutesStr}${secondsStr}`;
};
   

    return (
        
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50">
            <div className='hidden'>{playerInputs.user1}</div>
            <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-8 rounded-lg shadow-lg w-full max-w-3xl max-h-[80vh] overflow-hidden flex flex-col">
                {/* Modal Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-pink-600 dark:text-pink-400">{message.title}</h2>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
                    >
                        X
                    </button>
                </div>

                {/* Modal Content */}
                <div className="overflow-y-auto max-h-[70vh]">
                    <p className="text-sm mb-4">{message.story}</p>
                    
                    {/* Map Toggle Button */}
                    <button
                        onClick={handleShowMap}
                        className="w-full p-1 bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 text-l font-bold text-pink-600 dark:text-pink-400"
                        >
                        &#x1F449; {message.station}
                    </button>

                    {showMap && (
                        <MapSection
                            title=""
                            games={gamesEG}
                            searchQuery={`${message.id < 10 ? "0" : ""}${message.id}`}
                        />
                    )}

                    {/* Capacity */}
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 mt-4">{t("capacity")}<br />{message.capacity}</p>

                    {/* Instructions */}
                    <p className="text-sm mb-4">
                        {t("howTo")}
                        <br />
                        <span  />{ message.content}
                    </p>

                    {/* Points Description */}
                    <p className="text-sm mb-4">
                    {t("descriptionPoints")} 
                    {teamData.players?.[0] || message.tagged.includes("noGame")  ? (
                    <>
                        <br />
                        <span>{message.points }</span>
                        <br />
                    </>
                    ) : session  ? (
                        <Link
                            href="/teampage"
                            className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                        >
                            {t("Edit Team")}
                        </Link> 
                    ) : (
                        <button className="px-4 py-1 bg-pink-500 text-white rounded-lg hover:bg-pink-600 ml-2" onClick={handleShowLogin}>
                            {t("Login now")}
                        </button>
                        
                    )}
                    
                    </p>

                

                    {/* Player Inputs */}
                   <div className={`space-y-4 ${teamData.players?.[0] ? "" : "hidden"}`}>
  <div className="grid grid-cols-2 gap-4">
    {/* Player 1 */}
    { !message.tagged.includes("noGame") &&
    <input
      type={`${message.tagged.includes("hidden")? !!points[0]?.value? "password" : "number" : "number"}`}
      placeholder={`Player 1`}
      value={points[0]?.value && message.tagged.includes("hidden") ? "00000" : points[0]?.value !== undefined && points[0]?.value !== null ? points[0].value : (playerInputs.user1 ?? "")}
      name="user1"
      onChange={handleInputChange}
      disabled={!!points[0]?.value || points[0]?.value === 0}
      className="w-full px-4 py-2 border-2 border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 transition dark:text-white"
    />
}
    {/* Player 2 */}
    <input
      type={`${message.tagged.includes("hidden")? !!points[0]?.value? "password" : "number" : "number"}`}
      placeholder={`Player 2`}
      name="user2"
      onChange={handleInputChange}
      value={points[0]?.value && message.tagged.includes("hidden") ? "00000" : points[1]?.value !== undefined && points[1]?.value !== null ? points[1].value : (playerInputs.user2 ?? "")}
      disabled={!!points[1]?.value || points[1]?.value === 0}
      className="w-full px-4 py-2 border-2 border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 transition dark:text-white"
    />

    {/* Player 3 */}
    {teamData.players?.[2] || message.tagged.includes("overridePlayer") ? (
      <input
        type={`${message.tagged.includes("hidden")? !!points[0]?.value? "password" : "number" : "number"}`}
        placeholder={`Player 3`}
        name="user3"
        onChange={handleInputChange}
        value={points[0]?.value && message.tagged.includes("hidden") ? "00000" : points[2]?.value !== undefined && points[2]?.value !== null ? points[2].value : (playerInputs.user3 ?? "")}
        disabled={!!points[2]?.value || points[2]?.value === 0}
        className="w-full px-4 py-2 border-2 border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 transition dark:text-white"
      />
    ) : (
      // Wenn Player 3 nicht existiert, leeres div für Layout
      <div></div>
    )}

    {/* Player 4 */}
    {teamData.players?.[3] || message.tagged.includes("overridePlayer") ? (
      <input
        type={`${message.tagged.includes("hidden")? !!points[0]?.value? "password" : "number" : "number"}`}
        placeholder={`Player 4`}
        name="user4"
        onChange={handleInputChange}
        value={points[0]?.value && message.tagged.includes("hidden") ? "00000" : points[3]?.value !== undefined && points[3]?.value !== null ? points[3].value : (playerInputs.user4 ?? "")}
        disabled={!!points[3]?.value || points[3]?.value === 0}
        className="w-full px-4 py-2 border-2 border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 transition dark:text-white"
      />
    ) : (
      // Leer lassen, damit Player 3 nicht breiter wird
      <div></div>
    )}
  </div>

  {!points[0]?.value && timeLeft>0 && message.started && (
    <div className="text-right">
      <button
        className="ml-auto inline-flex px-2 py-1 bg-pink-500 text-white text-xl rounded-lg shadow-lg hover:bg-pink-600 transition duration-300"
        onClick={handleSave}
        aria-label="Save"
      >
        &#x1F4BE;<br/>
        
        <div className="text-xl">{t("save")}</div>
      </button>
      <br/>
      <label>
        ({formatTime(timeLeft)})

      </label>
    </div>
  )}
</div>

                    

                    {/* Tutorial-Link */}
                    {message.url && (
                        <p className="text-sm text-blue-500 hover:underline mt-4">
                            <a
                                href={message.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                            </a>
                        </p>
                    )}

                    {/* Responsive Video (optional) */}
                    {message.url && (
                        <div className="aspect-w-16 aspect-h-9 mb-4">
                            <iframe
                                className="w-full h-full rounded-lg shadow-lg"
                                src={message.url}
                                title="Tutorial"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    )}
                </div>
            </div>
                    
            

            {/* Speicherbestätigung Popup */}
            {showLogin && (
                <Login onClose={handleLoginClose} />
            )}
            {showSaved && (
                <Infobox onClose={handleSavedClose} message="Speichern erfolgreich!" title='Gespeichert' color="pink" />
            )}

            {/* Speicherfehler Popup */}
            {showNotSaved && (
                <Infobox onClose={handleNotSavedClose} message={errorMessage} title='Fehler' color="red" />
            )}
        </div>
    );
};

export default Modal;


