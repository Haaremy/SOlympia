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
            title: 'Grill & Chill',
            story: 'Our grill master Guilherme is heating things up again and serving up the best dishes.',
            station: 'Parking space between the trees',
            capacity: '30 people',
            descriptionGame: '5:00 PM - 8:00 PM',
            descriptionPoints: 'Sausages, cheese, toast and salad.'
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
            story: 'Im wilden Westen schossen heiße Eisen die Kugeln durch die Luft. Da das jedoch eine Gefahr für Leib und Seele darstellt, haben wir uns für etwas ungefährlicheres entschieden.',
            station: 'Getränke Spot',
            capacity: '1 - 2 Spieler',
            descriptionGame: '1. Nimm dir ein Getränk mit Kronkorken deiner Wahl. </br>2. Nimm ein Werkzeug, wie einen Zollstock dazu. </br>3. Ansetzen und den Korken in die Distanz befördern.',
            descriptionPoints: 'Trage die Distanz in dein Punktefeld ein.'
          },
          {
            language: 'en',
            title: 'Bottled',
            story: 'In the Wild West, hot irons shot bullets through the air. However, since that poses a threat to life and soul, we opted for something less dangerous.',
            station: 'Drinks Spot',
            capacity: '1 - 2 Player',
            descriptionGame: '1. Take a bottle capped beverage of your choice. </br>2. Take a tool, such as a ruler. </br>3. Position the cork and push it away.',
            descriptionPoints: 'Enter the distance in your score field.'
          }
        ]
      }
    }
  });

  const game3 = await prisma.game.create({
    data: {
      url: '',
      tagged: ":unit:trefferstreak:unit:",
      languages: {
        create: [
          {
            language: 'de',
            title: 'Floppy-Diskus',
            story: 'Zurück in die 80er – aber sportlich! Beim Floppy-Diskus wirfst du keine schweren Scheiben, sondern mit Floppy Disks. Wer gerade nur Bahnhof versteht, keine Sorge gemeinsam holen wir ein Stück Geschichte zurück, dass ihr bisher nicht vermisst habt. Ziel ist es, möglichst weit, gezielt oder einfach mit richtig viel Style zu werfen – Retrospaß garantiert!',
            station: 'Innenhof Ost',
            capacity: '1 - 4 Spieler',
            descriptionGame: '1. Fordere dich selbst heraus oder spiele gegen andere. <br/>2. Nimm dir die Floppy Disks. <br/>3. Stell dich an die Wurflinie. <br/>4. Wirf und triff den Eimer!',
            descriptionPoints: 'Trage die Anzahl der erfolgreichen Treffer hintereinander ein.'
          },
          {
            language: 'en',
            title: 'Floppy-Diskus',
            story: 'Back to the 80s – but sporty! With floppy discus, you dont throw heavy discs, but floppy discs. If youre confused, dont worry, together well bring back a piece of history you havent missed. The goal is to throw as far as possible, with precision, or simply with a lot of style – retro fun guaranteed!',
            station: 'East Courtyard',
            capacity: '1 - 4 Player',
            descriptionGame: '1. Challenge yourself or play against others. <br/>2. Grab the floppy disks. <br/>3. Stand at the throwing line. <br/>4. Throw and hit the bucket!',
            descriptionPoints: 'Enter the number of successful hits in a row.'
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
            title: 'Chalk wall',
            story: 'Art needs a canvas... or is a brick one enough?',
            station: 'Warehouse at Westhof',
            capacity: 'As long as chalk is available.',
            descriptionGame: 'The painting group has an outdoor class today and you could help.',
            descriptionPoints: 'Take some chalk and draw your (positive) thoughts.'
          }
        ]
      }
    }
  });

  const game5 = await prisma.game.create({
    data: {
      url: '',
      tagged: ":unit:Dosen:unit:",
      languages: {
        create: [
          {
            language: 'de',
            title: 'Dosenschießen',
            story: 'Mit gezückter Wasserpistole geht’s ins Gefecht! Beim Dosen-Schießen zählt jeder Treffer – ziele, und bring die Dosen zum Fallen. Ob alleine oder im Team: Hier wird jede Wasserpistole zum Heldenwerkzeug. Wer trifft am meisten und wird Sommerfest-Scharfschütze?',
            station: 'Rechter Baum vom Mensaausgang.',
            capacity: '1 Spieler',
            descriptionGame: '1. Nimm eine Wasserpistole vom Tisch. </br>2. Starte einen 1 Minuten Timer. </br>3. Schieße in der Minute so viele Dosen vom Tisch wie möglich.',
            descriptionPoints: 'Trag die Menge der auf dem Boden liegenden Dosen in dein Punktefeld ein.'
          },
          {
            language: 'en',
            title: 'Can shooting',
            story: 'Water pistols at the ready, its time to enter the fray! In can shooting, every hit counts – take aim and make the cans fall. Whether alone or in a team, every water pistol becomes a heros tool. Who can hit the most and become the summer festival sniper?',
            station: 'Right tree from the cafeteria exit.',
            capacity: '1 Player',
            descriptionGame: '1. Take a water gun from the table. </br>2. Start a 1-minute timer. </br>3. Shoot as many cans off the table as possible in that minute.',
            descriptionPoints: 'Enter the number of cans lying on the floor into your score field.'
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
            story: 'Werde zum Flugzeugingenieur! Falte deinen eigenen Papierflieger und lass ihn durch die Lüfte segeln. Egal ob superschnell, besonders elegant oder kreativ gefaltet – hier zählt: Bauen, Werfen, Staunen!',
            station: 'Hinterausgang West',
            capacity: '5 Spieler',
            descriptionGame: '1. Schnapp dir ein Blatt Papier. </br>2. Wähle ein Faltmodell – oder erfinde dein eigenes! </br>3. Baue deinen Flieger mit Geschick (und Stil). </br>4. Katapultiere deinen Flieger in die Luft.',
            descriptionPoints: 'Tragt die Distanz des Fluges in das Punktefeld ein.'
          },
          {
            language: 'en',
            title: 'Fold and Fly',
            story: 'Become an aircraft engineer! Fold your own paper airplane and let it soar through the skies. Whether super-fast, particularly elegant, or creatively folded – the key here is to build, throw, and marvel!',
            station: 'Rear Exit West',
            capacity: '1 - 5 Player',
            descriptionGame: '1. Grab a piece of paper. </br>2. Choose a folding model—or invent your own! </br>3. Build your plane with skill (and style). </br>4. Catapult your plane into the air.',
            descriptionPoints: 'Enter the distance of the flight in the points field.'
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
            title: 'Drinks Spot',
            story: '',
            station: 'Back exit of the cafeteria',
            capacity: 'As long as there are drinks available.',
            descriptionGame: '',
            descriptionPoints: 'Soft drinks, beer, Spezi, Red Bull'
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
            story: 'Bist du bereit, deine wahre Stärke zu beweisen? Bei Kühles Helles ist eine gute Armmuskulatur von Vorteil. Halte einen vollen Bierkrug (natürlich nur mit Wasser gefüllt) fest in deiner Hand, schließe die Augen und zeige Durchhaltevermögen. ',
            station: 'Hinterausgang Ost',
            capacity: '1 - 3 Spieler',
            descriptionGame: '1. Schnapp dir einen mit Wasser befüllten Bierkrug. </br>2.Starte eine Stoppuhr </br>3. Strecke deinen Arm gerade nach vorne und halte das Gewicht so lange, wie du kannst.',
            descriptionPoints: 'Tragt die Sekunden in das Wertungsfeld ein.'
          },
          {
            language: 'en',
            title: 'Cool Pint.',
            story: 'Are you ready to prove your true strength? Strong arm muscles are a plus when it comes to drinking a Kühles Helles beer. Hold a full beer mug (filled with water, of course) firmly in your hand, close your eyes, and show your stamina.',
            station: 'Rear Exit East',
            capacity: '1 - 3 Player',
            descriptionGame: '1. Grab a beer mug filled with water. </br>2. Start a stopwatch. </br>3. Extend your arm straight forward and hold the weight for as long as you can.',
            descriptionPoints: 'Enter the seconds in the scoring field.'
          }
        ]
      }
    }
  });

  const game9 = await prisma.game.create({
    data: {
      url: '',
      tagged: "noScoreboard",
      languages: {
        create: [
          {
            language: 'de',
            title: 'Bierpong',
            story: 'Klassiker unter den Sommerfestspielen! Beim Bierpong ist Zielgenauigkeit gefragt – und eine ruhige Hand. Zwei Teams treten gegeneinander an und versuchen, einen Tischtennisball in die Becher des gegnerischen Teams zu werfen. Aber keine Sorge: Bei uns ist das Spiel ganz festivalfreundlich – die Becher sind mit Wasser gefüllt und der Spaß steht im Vordergrund!',
            station: 'Hinterausgang Ost',
            capacity: '2 x 2 Teams',
            descriptionGame: '1. Jedes Team stellt die Becher in Dreiecksform auf seiner Tischseite auf. </br>2. Gespielt wird im Wechsel – jedes Team hat pro Runde zwei Würfe. </br>3. Trifft ein Ball in einen gegnerischen Becher, wird dieser entfernt. </br>4. Das Team, das zuerst alle gegnerischen Becher trifft, gewinnt! </br>5. Fairplay-Extra: Trickwürfe sind erlaubt – aber keine Ellbogen über dem Tischrand!',
            descriptionPoints: ''
          },
          {
            language: 'en',
            title: 'A summer festival classic! Beer pong requires precision aim – and a steady hand. Two teams compete, trying to throw a ping-pong ball into the opposing teams cups. But dont worry: Were making the game festival-friendly – ​​the cups are filled with water, and the emphasis is on fun!',
            story: 'Beer Pong',
            station: 'Rear Exit East',
            capacity: '2 x 2 Teams',
            descriptionGame: '1. Each team sets up the cups in a triangle on their side of the table. </br>2. Players alternate – each team has two throws per round. </br>3. If a ball hits an opponents cup, it is removed. </br>4. The team that hits all of the opponents cups first wins! </br>5. Fair play bonus: Trick shots are allowed – but no elbows over the edge of the table!',
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
            story: 'Willkommen beim Bombenlauf – dem wackeligsten Wasserspaß des Sommerfests! Balanciere eine Wasserbombe auf einem Löffel, den du im Mund hältst. Nur wer ruhig bleibt, kommt trocken ins Ziel. Oder vielleicht auch nicht... ',
            station: 'Innenhof West',
            capacity: '1 - 4 Spieler',
            descriptionGame: '1. Nimm dir eine der Silikonwasserbomben. </br>2. Platziere dpe Wasserbombe vorsichtig auf einem Löffel. </br>3. Starte eine Stoppuhr und laufe die markierte Strecke, ohne die Bombe fallen zu lassen. </br>4. Fällt die Bombe runter, so hebe sie auf und starte von vorne.',
            descriptionPoints: 'Trage deine gelaufene Zeit in Sekunden in das Punktefeld ein.'
          },
          {
            language: 'en',
            title: 'Bomb run',
            story: 'Welcome to the Bomb Run – the wobbliest water fun of the summer festival! Balance a water balloon on a spoon held in your mouth. Only those who stay calm will reach the finish line dry. Or maybe not...',
            station: 'West Courtyard',
            capacity: '1 - 4 Player',
            descriptionGame: '1. Take one of the silicone water balloons. </br>2. Carefully place the water balloon on a spoon. </br>3. Start a stopwatch and run the marked distance without dropping the balloon. </br>4. If the balloon falls, pick it up and start again.',
            descriptionPoints: 'Enter your running time in seconds in the points field.'
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
            story: 'Lineup & DJ Rekingdrms',
            station: 'Erdgeschoss - Ostflur',
            capacity: 'Jeder der Party will!',
            descriptionGame: '19:30 - 01:00 Uhr',
            descriptionPoints: ''
          },
          {
            language: 'en',
            title: 'Techno Floor',
            story: 'Lineup & DJ Rekingdrms',
            station: 'Ground floor - East corridor',
            capacity: 'Anyone who wants to party!',
            descriptionGame: '7:30 pm - 1:00 am',
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
            story: 'Zeus ließ einst Titanen antreten, um Wolkentürme mit rollenden Blitzen zu zerstören. Wir nennen es heute einfach: Kegeln.',
            station: 'Rechter Rand der Wiese',
            capacity: '1 - 5 Spieler',
            descriptionGame: 'Es gibt eine Kugel, mit der ihr die Kegel von der Startlinie aus umwerfen müsst. Es ist ein Freispiel, ohne Vorgaben zur Spielweise.',
            descriptionPoints: ''
          },
          {
            language: 'en',
            title: 'Bowling',
            story: 'Zeus once pitted the Titans against each other to destroy cloud towers with rolling lightning bolts. Today we simply call it bowling.',
            station: 'Right edge of the meadow',
            capacity: '1 - 5 players',
            descriptionGame: 'Theres a ball with which you have to knock down the pins from the starting line. Its a free game, with no rules given on how to play.',
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
            title: 'Flunkyball',
            story: 'Line up in a row, aim and... shoot!',
            station: 'Meadow behind the department',
            capacity: '2 to 20 players on 2 teams',
            descriptionGame: 'You need an equal number per player on both teams, and each player needs a drink of their choice in the bottle. The teams line up opposite each other, with their drink on the ground in front of each player. In the middle of the playing field there is a plastic bottle half-filled with water. Decide who goes first. The starting team tries to knock the bottle over with the ball. If the bottle is hit, the opposing team has to put the bottle back up and get the ball. Meanwhile, the starting team has to drink their drink as quickly as possible. If the opposing team crosses the line with the ball and the bottle is still there, the drinking stops. It is the opposing teams turn to throw. They throw in turn. If a drink is emptied, it must be turned over to show that it has been emptied. If it drips within 3 seconds, a new drink must be taken. If a drink foams over, the next hit must be skipped. If a bottle is knocked over, an additional penalty bottle must be drunk.',
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
            title: 'StudiLink',
            story: '',
            station: 'Ground floor - Room 110',
            capacity: '30 people',
            descriptionGame: 'Our chill lounge and bar for techno evenings.',
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
            title: 'Splash Zone',
            story: '',
            station: 'Meadow behind the department',
            capacity: '',
            descriptionGame: '',
            descriptionPoints: ''
          }
        ]
      }
    }
  });

}
