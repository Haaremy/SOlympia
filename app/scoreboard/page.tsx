'use client';

import React, { useEffect, useState } from "react";

// Interfaces
interface User {
  id: number;
  name: string;
  uname: string;
  pointsTotal: number;
  points: {
    id: number;
    value: number;
    player: string;
    lastUpdated: Date;
    game: {
      id: number;
      languages: string[];
      hidden: boolean;
      tagged: string;
    };
  }[];
}

interface GameRecord {
  gameId: number;
  gameName: string;
  languages: { title: string }[]
  hidden: boolean;
  tagged: string | "";
  topPlayer: string;
  topPoints: number;
  topEntries: number;
  user: User;
}

// Hauptkomponente
export default function ScoreboardTabs() {
  const [activeTab, setActiveTab] = useState<"scoreboard" | "records">("scoreboard");
  const [user, setUser] = useState<User[]>([]);
  const [records, setRecords] = useState<GameRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScoreboardAndRecords = async () => {
      try {
        const [scoreboardRes, recordsRes] = await Promise.all([
          fetch("/api/scoreboard"),
          fetch("/api/records"),
        ]);

        const scoreboardData = await scoreboardRes.json();
        const recordsData = await recordsRes.json();

        setUser([...scoreboardData]);
        setRecords([...recordsData]);
      } catch (error) {
        console.error("Fehler beim Laden der Daten:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchScoreboardAndRecords();
    const interval = setInterval(() => {
      fetchScoreboardAndRecords();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(date).toLocaleDateString(undefined, options);
  };


  return (
    <main className="min-h-screen pt-20 bg-pink-50 dark:bg-gray-900 transition-all duration-300 p-4 sm:p-8">
      {/* Tabs */}
      <div className="flex justify-center mb-8 mt-4">
        <div className="inline-flex bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <button
            onClick={() => setActiveTab("scoreboard")}
            className={`px-6 py-2 text-sm font-medium transition ${
              activeTab === "scoreboard"
                ? "bg-pink-500 text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-gray-700"
            }`}
          >
            Scoreboard
          </button>
          <button
            onClick={() => setActiveTab("records")}
            className={`px-6 py-2 text-sm font-medium transition ${
              activeTab === "records"
                ? "bg-pink-500 text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-gray-700"
            }`}
          >
            Weltrekorde
          </button>
        </div>
      </div>

      {/* Inhalt */}
      {loading ? (
        <p className="text-center text-gray-600 dark:text-gray-300">Lädt...</p>
      ) : activeTab === "scoreboard" ? (
        <div className="overflow-x-auto w-full rounded-xl shadow-md bg-white dark:bg-gray-800">
          <table className="min-w-full text-left text-sm text-gray-700 dark:text-gray-200">
            <thead className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-4">Spieler</th>
                <th className="px-6 py-4">Punkte</th>
                <th className="px-6 py-4">Letztes Update</th>
              </tr>
            </thead>
            <tbody>
              {(() => {
                const gameMap: Record<
                  number,
                  {
                    game: User["points"][0]["game"];
                    players: {
                      name: string;
                      value: number;
                      lastUpdated: Date;
                    }[];
                  }
                > = {};

                user.forEach((u) => {
                  u.points.forEach((entry) => {
                    const gameId = entry.game.id;
                    if (!gameMap[gameId]) {
                      gameMap[gameId] = {
                        game: entry.game,
                        players: [],
                      };
                    }

                    gameMap[gameId].players.push({
                      name: u.name,
                      value: entry.value,
                      lastUpdated: new Date(entry.lastUpdated),
                    });
                  });
                });

                return Object.entries(gameMap)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([gameId, { game, players }]) => {
                    const sortedPlayers = players.sort((a, b) => b.value - a.value);
                    return (
                      <React.Fragment key={gameId}>
                        <tr className="bg-pink-100 dark:bg-gray-700">
                          <td colSpan={3} className="px-6 py-4 font-semibold text-pink-700 dark:text-pink-300">
                            
                            {(game.languages[0])}
                          </td>
                        </tr>
                        {sortedPlayers.map((player, idx) => (
                          <tr key={idx} className="border-t border-gray-200 dark:border-gray-600">
                            <td className="px-6 py-4">{player.name}</td>
                            <td className="px-6 py-4">{player.value}</td>
                            <td className="px-6 py-4">{formatDate(player.lastUpdated)}</td>
                          </tr>
                        ))}
                      </React.Fragment>
                    );
                  });
              })()}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {records.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-300">Keine Weltrekorde gefunden.</p>
          ) : (
            records.map(
              (record) =>
                record.topPlayer &&
                !record.tagged.includes("hidden") && (
                  <div
                    key={record.gameId}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 transition duration-300 hover:shadow-xl hover:scale-105"
                  >
                    <h3 className="text-lg font-semibold text-pink-500 dark:text-pink-500 mb-2">
                      {record.gameName}
                    </h3>
                    <p className="text-grey-900 dark:text-grey-900 mt-2 font-medium">
                      👑 {record.user.name}{" "}
                    </p>
                    <p className="text-grey-900 dark:text-grey-900 mt-2 font-medium">
                      Rekord: {record.topPoints} {record.tagged?.split(":unit:")[1] || ""} <br />
                    </p>
                  </div>
                )
            )
          )}
        </div>
      )}
    </main>
  );
}
