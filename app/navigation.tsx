"use client"; // Mark this file as a Client Component
import { useState, useEffect, useCallback } from "react";
import Language from "./language"; // Import der LanguageLogin Komponente
import Login from "./login"; // Import der LanguageLogin Komponente
import { useSession } from "next-auth/react"; // Import der useSession Hook
import { Session } from "next-auth";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { usePathname } from 'next/navigation';
import '../lib/i18n'



export default function Navigation() {
  const [showLanguage, setShowLanguage] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();  // Hook innerhalb der Komponente verwenden

  const { data: session, status } = useSession();
  const team = session?.user as Session["user"];

  const currentPath = usePathname(); // Hol dir den aktuellen Pfad


  // Schließen des Login-Modals
  const handleLoginClose = () => setShowLogin(false);

  // Öffnen des Login-Modals
  const handleLoginOpen = useCallback(() => {
    if (!session) {
      setShowLogin(true);
    }
  }, [session]); // Nur wenn `session` sich ändert, wird die Funktion neu erstellt
  

  // Schließen des Sprachwahl-Modals
  const handleLanguageClose = () => {
    setShowLanguage(false);

    if (localStorage.getItem("language") && !session) {
      setShowLogin(true); // Login anzeigen, wenn kein Session vorhanden
    }
  };


  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10); // Toggle `isScrolled` based on scroll position
      };
  
      window.addEventListener("scroll", handleScroll); // Attach scroll event listener
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []); // Run once when component mounts
  

  useEffect(() => {
    if (typeof window !== "undefined") {
        const lang = localStorage.getItem("language");
        i18n.changeLanguage(lang || "de"); // Change language if authenticated
        if (!lang) {
            setShowLanguage(true); // Shows language selection if no language set
        } else if (status === "authenticated") {
            handleLoginOpen(); // Open login modal if authenticated
        }
    }
}, [status, team?.credentials, i18n, handleLoginOpen]); // Füge handleLoginOpen hinzu

  


  return (
    <main className="bg-gray-100 dark:bg-gray-900 z-50 mb-10">
      <header
        className={`fixed top-0 left-0 w-full bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 shadow-md z-50 transition-transform duration-300`}
      >
        <div className="container mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-3 gap-4">
          {/* Headline */}
          <div
            className={`${
              isScrolled ? "hidden sm:inline-flex" : "inline-flex"
            } text-white rounded-lg items-center justify-center`}
          >
            <Link
              href={"/"}
              className={`px-4 py-2 text-white rounded-lg inline-flex items-center justify-center sm:justify-start`}
            >
              <p className={`text-lg font-semibold text-gray-800 dark:text-gray-200`}>
                FSR INS&nbsp;
                <code className="font-mono font-bold text-pink-500 dark:text-pink-400">
                  {t('calender')}
                </code>
              </p>
            </Link>
          </div>

          {/* Button-Gruppe */}
          <div className="flex flex-wrap gap-2 justify-center sm:justify-end">

          {currentPath !== "/adminpage" && currentPath !== "/teampage" ? (
              team ? (
                team.role === "ADMIN" ? (
                  <Link
                    href="/adminpage"
                    className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                  >
                    <p className="text-lg font-semibold">Admin</p>
                  </Link>
                ) : (
                  <Link
                    href="/teampage"
                    className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                  >
                    <p className="text-lg font-semibold">Team</p>
                  </Link>
                )
              ) : (
                <button
                  onClick={handleLoginOpen}
                  className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                >
                  <p className="text-lg font-semibold">Login</p>
                </button>
              )
            ) : (
              <Link
                href={"/"}
                className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
              >
                <p className="text-lg font-semibold"> {t('games')}</p>
              </Link>
            )}
            {currentPath !== "/scoreboard" ?
            <Link
              href={"/scoreboard"}
              className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
            >
              <p className="text-lg font-semibold">Scoreboard</p>
            </Link>
            :
            <Link
              href={"/"}
              className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
            >
              <p className="text-lg font-semibold">{t('games')}</p>
            </Link>
            }

          {currentPath !== "/map" ?
            <Link
              href={"/map"}
              className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
            >
              <p className="text-lg font-semibold">{t('map')}</p>
            </Link>
            :
            <Link
              href={"/"}
              className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
            >
              <p className="text-lg font-semibold">{t('games')}</p>
            </Link>
            }

            

            
          </div>
          {/* Modals */}
          {showLanguage && <Language onClose={handleLanguageClose} />}
          {showLogin && <Login onClose={handleLoginClose} />}
        </div>
      </header>
    </main>
  );
}
