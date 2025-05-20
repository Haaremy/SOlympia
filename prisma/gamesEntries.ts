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
            station: 'Ausgang der Mensa',
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
      tagged: ":unit:treffer:unit:",
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
            story: 'Lineup by Tom Grothum',
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
      tagged: ":treffer:",
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
      tagged: ":unit:schlucke:unit:",
      languages: {
        create: [
          {
            language: 'de',
            title: 'Flunkyball',
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
            descriptionGame: 'Unsere Chill-Lounge und Bar für den Techno Abend.',
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
      tagged: "",
      languages: {
        create: [
          {
            language: 'de',
            title: 'Placeholder',
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

}
