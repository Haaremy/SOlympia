import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export async function gameEntries() {
  const game1 = await prisma.game.create({
    data: {
      url: '',
      tagged: "noGame",
      languages: {
        create: [
          {
            language: 'de',
            title: 'Grill & Chill',
            story: 'Unser Grillmeister Guilhereme heizt wieder ein und haut die besten Speisen raus.',
            station: 'Parkplatz zwischen den Bäumen',
            capacity: '30 Personen',
            descriptionGame: '17:00 - 20:00 Uhr',
            descriptionPoints: 'Würstchen, Käse, Toast und Salat.'
          },
          {
            language: 'en',
            title: '',
            story: '',
            station: '',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          }
        ]
      }
    }
  });

  const game2 = await prisma.game.create({
    data: {
      url: '',
      tagged: ":unit:m:unit:",
      languages: {
        create: [
          {
            language: 'de',
            title: 'Flaschenkind',
            story: '',
            station: '',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          },
          {
            language: 'en',
            title: '',
            story: '',
            station: '',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          }
        ]
      }
    }
  });

  const game3 = await prisma.game.create({
    data: {
      url: '',
      tagged: ":unit:treffer:unit:",
      languages: {
        create: [
          {
            language: 'de',
            title: 'Floppy-Diskus',
            story: '',
            station: '',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          },
          {
            language: 'en',
            title: '',
            story: '',
            station: '',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          }
        ]
      }
    }
  });

  const game4 = await prisma.game.create({
    data: {
      url: '',
      tagged: "noGame",
      languages: {
        create: [
          {
            language: 'de',
            title: 'Kreidewand',
            story: 'Kunst braucht eine Leinwand.. oder reicht auch eine aus Ziegelstein?',
            station: 'Lagerhalle am Westhof',
            capacity: 'So lange Kreide verfügbar ist.',
            descriptionGame: 'Die Mal-AG hat heute Outdoor Kurs und ihr könnte mitgestalten.',
            descriptionPoints: 'Nehmt euch Kreide und malt eure (positiven) Gedanken auf.'
          },
          {
            language: 'en',
            title: '',
            story: '',
            station: '',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          }
        ]
      }
    }
  });

  const game5 = await prisma.game.create({
    data: {
      url: '',
      tagged: ":unit:dosen:unit:",
      languages: {
        create: [
          {
            language: 'de',
            title: 'Dosenschießen',
            story: '',
            station: '',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          },
          {
            language: 'en',
            title: '',
            story: '',
            station: '',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          }
        ]
      }
    }
  });

  const game6 = await prisma.game.create({
    data: {
      url: '',
      tagged: ":unit:m:unit:",
      languages: {
        create: [
          {
            language: 'de',
            title: 'Falten und Fliegen',
            story: '',
            station: '',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          },
          {
            language: 'en',
            title: '',
            story: '',
            station: '',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          }
        ]
      }
    }
  });

  const game7 = await prisma.game.create({
    data: {
      url: '',
      tagged: "noGame",
      languages: {
        create: [
          {
            language: 'de',
            title: 'Getränke Spot',
            story: '',
            station: 'Hinterausgang der Mensa',
            capacity: 'So lange Getränke vorhanden sind.',
            descriptionGame: '',
            descriptionPoints: "Softdrinks, Bier, Spezi, Redbull"
          },
          {
            language: 'en',
            title: '',
            story: '',
            station: '',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          }
        ]
      }
    }
  });

  const game8 = await prisma.game.create({
    data: {
      url: '',
      tagged: ":unit:sec:unit:",
      languages: {
        create: [
          {
            language: 'de',
            title: 'Kühles Helles',
            story: '',
            station: '',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          },
          {
            language: 'en',
            title: '',
            story: '',
            station: '',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          }
        ]
      }
    }
  });

  const game9 = await prisma.game.create({
    data: {
      url: '',
      tagged: ":unit:treffer:unit:,noScoreboard",
      languages: {
        create: [
          {
            language: 'de',
            title: 'Bierpong',
            story: '',
            station: '',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          },
          {
            language: 'en',
            title: '',
            story: '',
            station: '',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          }
        ]
      }
    }
  });

  const game10 = await prisma.game.create({
    data: {
      url: '',
      tagged: ":unit:sec:unit:",
      languages: {
        create: [
          {
            language: 'de',
            title: 'Bombenlauf',
            story: '',
            station: '',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          },
          {
            language: 'en',
            title: '',
            story: '',
            station: '',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          }
        ]
      }
    }
  });

  const game11 = await prisma.game.create({
    data: {
      url: '',
      tagged: "noGame",
      languages: {
        create: [
          {
            language: 'de',
            title: 'Techno Floor',
            story: 'Lineup & DJ Tom Grothum',
            station: 'Erdgeschoss - Ostflur',
            capacity: 'Jeder der Party will!',
            descriptionGame: '19:30 - 01:00 Uhr',
            descriptionPoints: ''
          },
          {
            language: 'en',
            title: '',
            story: '',
            station: '',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          }
        ]
      }
    }
  });

  const game12 = await prisma.game.create({
    data: {
      url: '',
      tagged: "noScoreboard",
      languages: {
        create: [
          {
            language: 'de',
            title: 'Kegeln',
            story: '',
            station: '',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          },
          {
            language: 'en',
            title: '',
            story: '',
            station: '',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          }
        ]
      }
    }
  });

  const game13 = await prisma.game.create({
    data: {
      url: '',
      tagged: "noScoreboard",
      languages: {
        create: [
          {
            language: 'de',
            title: 'Flunkyball',
            story: 'In eier Reihe aufstellen, anvisieren und ... schießen!',
            station: 'Wiese hinterm Fachbereich',
            capacity: '2 bis 20 Spieler auf 2 Teams',
            descriptionGame: 'Ihr braucht eine gleiche Anzahl pro Spieler in beiden Teams, jeder Spieler braucht ein Getränk seiner Wahl in der Falsche. Die Teams stehen sich in Reihe gegenüber, vor jedem Spieler auf dem Boden sein Getränk. In der Mitte des Spielfeldes steht eine mit Wasser halb gefüllte Plastikflasche. Macht euch aus wer starten darf. Das startende Team versucht mit dem Ball die Flasche umzuwerfen. Wurde getroffen, muss das Gegnerteam die Flasche wieder aufstellen und muss den Ball holen. In der Zwischenzeit muss das Starterteam sein Getränk so schnell wie möglich austrinken. Wenn das Gegnerteam mit Ball die Linie überquert und die Falsche steht, wird das Trinken gestopppt werden. Das Gegnerteam ist am Wurf. Es wird der Reihe nach geworfen. Wurde ein Getränk geleert, muss es durch umdrehen nachgewiesen werden. Tropft es innerhalb von 3 Sekunden, muss ein neues Getränk genommen werden. Schäumt ein Getränk über, muss der nächste Treffer ausgesetzt werden. Kippt eine Falsche um, muss eine Strafflasche zusätzlich getrunken werden.',
            descriptionPoints: ''
          },
          {
            language: 'en',
            title: '',
            story: '',
            station: '',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          }
        ]
      }
    }
  });

  const game14 = await prisma.game.create({
    data: {
      url: '',
      tagged: "noGame",
      languages: {
        create: [
          {
            language: 'de',
            title: 'StudiLink',
            story: '',
            station: 'Erdgeschoss - Raum 110',
            capacity: '30 Personen',
            descriptionGame: 'Unsere Chill-Lounge und Bar des Techno Abend.',
            descriptionPoints: ''
          },
          {
            language: 'en',
            title: '',
            story: '',
            station: '',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          }
        ]
      }
    }
  });

  const game15 = await prisma.game.create({
    data: {
      url: '',
      tagged: "noGame",
      languages: {
        create: [
          {
            language: 'de',
            title: 'Splash Zone',
            story: '',
            station: 'Wiese hinterm Fachbereich',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          },
          {
            language: 'en',
            title: '',
            story: '',
            station: '',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          }
        ]
      }
    }
  });

}
