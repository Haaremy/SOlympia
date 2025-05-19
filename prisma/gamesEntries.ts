import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export async function gameEntries() {
  const game1 = await prisma.game.create({
    data: {
      url: 'https://www.youtube.com/embed/709ZC7t-8RU',
      tagged: "hidden,overridePlayers",
      languages: {
        create: [
          {
            language: 'de',   // Deutsche Version
            title: 'Flaschenkind ',
            story: 'Im Olymp wird oft gefeiert. Hierfür lassen wir die Korken knallen und fliegen. *peng* und offen.',
            station: 'Obergeschoss 1 - Foyer',
            capacity: '1 Spieler',
            descriptionGame: 'Nimm dir eine Flasche mit Kronkorken und einen Öffner deiner Wahl (zB Zollstock). Ziel ist es vom Startpunkt den Korken so weit wie möglich zu schießen.',
            descriptionPoints: 'Trag im entsprechenden #Feld die Distanz in Zentimeter ein.'
          },
          {
            language: 'en',   // Englische Version
            title: 'Bottlechild',
            story: 'It\'s the first day of December and the house doesn\'t smell of cookies, fruitcake and spices yet? Well, how could it be? Nobody labelled the spice containers and now it\'s a guessing game! We remember which ones we bought, but not which ones we still have.',
            station: 'First Floor – Foyer',
            capacity: 'Multiple Teams',
            descriptionGame: 'There are 4 spices on the table (#1 - #4), and 20 possible labels for the containers. Discuss as a team which label (1 - 20) goes with which container.',
            descriptionPoints: 'Enter the number of the label in the corresponding #field.'
          }
        ]
      }
    }
  });


const game2 = await prisma.game.create({
  data: {
    url: 'https://www.youtube.com/embed/t5hXlxVnxfo',
    tagged: "hidden,overridePlayers",
    languages: {
      create: [
        {
          language: 'de',
          title: 'Floppy-Diskus',
          story: 'Die Wunschliste wurde vor ein paar Jahren digitalisiert. Alle Briefe an den Nordpol werden gescannt und mit der Datenbank von Gut und Böse abgeglichen. Daraufhin wird der Wunsch auf die Liste gepackt. Beim Abrufen der diesjährigen Liste kann sich der Weihnachtsmann nicht mehr an sein Passwort erinnern, aber hat sich eine Erinnerung geschrieben.',
          station: 'Obergeschoss 1 - Foyer',
          capacity: 'Multiple Teams',
          descriptionGame: 'Vor euch liegen Buchstaben und ihr müsst damit die 4 Wort-Kästchen (gedanklich) ausfüllen. Hierfür habt ihr wie bei einem Kreuzworträtsel Hinweise neben den Kästchen. Besprecht euch im Team.',
          descriptionPoints: 'Die Buchstaben haben Zahlwerte. Tragt den Zahlenwert in das entsprechende #Feld ein, auf dem der Buchstabe liegt.'
        },
        {
          language: 'en',
          title: 'Floppy-Diskus',
          story: 'Santa’s wishlist was digitized a few years ago. All letters to the North Pole are scanned and cross-referenced with the Naughty and Nice database. The wish is then added to the list. When retrieving this year´s list, Santa can no longer remember his password! Luckily, he has left himself a clue.',
          station: 'First Floor – Foyer',
          capacity: 'Multiple teams',
          descriptionGame: 'There are letters in front of you and you have to fill in the 4 word-boxes (in your head). There are clues next to the boxes, just like in a crossword puzzle. Discuss as a team.',
          descriptionPoints: 'The letters have numerical values. Enter the numerical value in the corresponding #field of the letter.'
        }
      ]
    }
  }
});


const game3 = await prisma.game.create({
  data: {
    url: 'https://www.youtube.com/embed/sKCM5yMr4Js',
    tagged:"noGame",
    languages: {
      create: [
        {
          language: 'de',
          title: 'Grill',
          story: 'Kokosmakronen sind die Besten! - Nein, Vanille-Kipferl! : Die Elfen haben sich in 2 Parteien gespalten, was die besten Kekse sind und bekriegen sich nun mit Schneebällen (hoffentlich ohne Steine).',
          station: 'Erdgeschoss - Foyer',
          capacity: '1 Team',
          descriptionGame: 'Jeder Spieler hat 5 Würfe. Ihr werft auf die Wichtel/Elfen auf dem Tisch. Nach der Runde wird für den nächsten Spieler aufgebaut.',
          descriptionPoints: 'Tragt die Anzahl der umgeworfenen Wichtel euer entsprechendes #Feld.'
        },
        {
          language: 'en',
          title: 'BBQ',
          story: 'Coconut macaroons are the best! – No, vanilla crescents! The elves have split into two parties over which are the best cookies and are now fighting each other with snowballs (hopefully without stones).',
          station: 'Ground Floor - Foyer',
          capacity: '1 Team',
          descriptionGame: 'Each player has 5 throws. You throw at the cans on the table (elves). After the round, the game is set up for the next player.',
          descriptionPoints: 'Enter the number of cans that have fallen off the table in the corresponding #field.'
        }
      ]
    }
  }
});


const game4 = await prisma.game.create({
  data: {
    url: '',
    tagged: "overridePlayers,hidden",
    languages: {
      create: [
        {
          language: 'de',
          title: 'Falten und Fliegen',
          story: "'Junior Geschenke Spezialist' benötigt ein Studium und 10 Jahre Berufserfsahrung. Im X-ErasMAS+ Program werden Schüler von den verschiedenen Ausbildungsstätten kulturell geschult. Für einige ist das eine große Umstellung, insbesondere für die Osterhasen. Die Geschenke werden gar nicht versteckt?",
          station: 'Fachbereich INS',
          capacity: 'Multiple Teams',
          descriptionGame: 'Folge den Hinweisen: <br />Rätsel <br /><br />#1: Sucht den Ort, wo der Duft von Speisen durch die Luft zieht und Gemeinschaft am Tisch entsteht.<br /><br />#2: Geht dorthin, wo jeder seinen Weg durch das Geäude beginnt.<br /><br />#3: Sucht dort, wo flackernde Bilder ein warmes Feuer vorgaukeln  <br /><br />#4: Sucht den Raum, wo die Realität vor einer grünen Wand verschwindet und kreative Welten entstehen.',
          descriptionPoints: 'Tragt im entsprechenden #Feld die Lösungszahl der Beschriftung ein.'
        },
        {
          language: 'en',
          title: 'Fold and Fly',
          story: "Junior Gift Specialist requires a degree and 10 years of professional experience. In the X-ErasMAS+ Program, students from various educational institutions receive cultural training. For some, this is a big change, especially for the Easter bunnies. What do you mean, the presents are not hidden at all?",
          station: 'INS Department',
          capacity: 'Multiple teams',
          descriptionGame: 'Follow the hints: <br />Riddle <br /><br />#1: Look for the place where the aroma of food fills the air and fellowship is built around the table.<br /><br />#2: Go to where everyone starts their journey through the building.<br /><br />#3: Look for places where flickering images create the illusion of a warm fire.<br /><br />#4: Seek out the space where reality disappears in front of a green screen and creative worlds emerge.',
          descriptionPoints: 'Each item has a #number and an answer number. Enter the numbers in the #field as soon as you have them all.'
        }
      ]
    }
  }
});


const game5 = await prisma.game.create({
  data: {
    url: 'https://www.youtube.com/embed/8Gcw61fFrD4',
    
    languages: {
      create: [
        {
          language: 'de',
          title: 'Kühles Helles',
          story: 'Der Geschenke Bondage-Kurs ist ein Modul an der Santa-Universität. Prüfungsleistung ist es, alle Geschenke in der Zeit mit einer Schleife zu versehen.',
          station: 'Obergeschoss 1 - Raum 110',
          capacity: '1 Team',
          descriptionGame: 'Jedes Mitglied sucht sich 1 Gegenstand aus. Ihr stoppt die Zeit für 30 Sekunden. Anschließend wird die Schleife wieder entfernt.',
          descriptionPoints: 'Jeder Spieler mit einer Schleife (die hält), trägt in sein #Feld eine 1 ein.'
        },
        {
          language: 'en',
          title: 'Cool Blond',
          story: 'The Gift Wrapping Bondage Course is a module at Santa University. The final exam is to tie a bow around each gift within the time limit.',
          station: 'First Floor – Room 110',
          capacity: '1 Team',
          descriptionGame: 'Each team member selects one item. Time is stopped for 30 seconds while they tie a bow. Then, the bows are removed again.',
          descriptionPoints: 'Each player with a bow that holds enters a 1 in their #field.'
        }
      ]
    }
  }
});


const game6 = await prisma.game.create({
  data: {
    url: 'https://www.youtube.com/embed/sKCM5yMr4Js',
    tagged:"noGame",
    languages: {
      create: [
        {
          language: 'de',
          title: 'Getränke',
          story: 'Kokosmakronen sind die Besten! - Nein, Vanille-Kipferl! : Die Elfen haben sich in 2 Parteien gespalten, was die besten Kekse sind und bekriegen sich nun mit Schneebällen (hoffentlich ohne Steine).',
          station: 'Erdgeschoss - Foyer',
          capacity: '1 Team',
          descriptionGame: 'Jeder Spieler hat 5 Würfe. Ihr werft auf die Wichtel/Elfen auf dem Tisch. Nach der Runde wird für den nächsten Spieler aufgebaut.',
          descriptionPoints: 'Tragt die Anzahl der umgeworfenen Wichtel euer entsprechendes #Feld.'
        },
        {
          language: 'en',
          title: 'Drinks',
          story: 'Coconut macaroons are the best! – No, vanilla crescents! The elves have split into two parties over which are the best cookies and are now fighting each other with snowballs (hopefully without stones).',
          station: 'Ground Floor - Foyer',
          capacity: '1 Team',
          descriptionGame: 'Each player has 5 throws. You throw at the cans on the table (elves). After the round, the game is set up for the next player.',
          descriptionPoints: 'Enter the number of cans that have fallen off the table in the corresponding #field.'
        }
      ]
    }
  }
});


const game7 = await prisma.game.create({
  data: {
    url: '',
    tagged:":unit:sec:unit:",
    languages: {
      create: [
        {
          language: 'de',
          title: 'Eierlauf',
          story: 'Am Nordpol schon mal Hühner gesehen? Nein? Liegt vielleicht daran, dass es keine gibt. Entsprechend gibt es auch kein Frühstücksei und noch weniger Eier für Spiele. Die Elfen haben beim Austauschprogramm zur Osterhasen-Schule Eierlauf kennengelernt und jetzt für sich entdeckt.',
          station: 'Obergeschoss 1 - Flur Westflügel',
          capacity: '1 bis 2 Teams',
          descriptionGame: 'Jeder Spieler hat einen Versuch. Währenddessen stoppt einer die Zeit. Folgt dem Parkour entlang der Pfeile.',
          descriptionPoints: 'Trag den Zeitwert des Spielers in Sekunden in das entsprechende #Feld.'
        },
        {
          language: 'en',
          title: 'Eggrun',
          story: 'Ever seen chickens at the North Pole? No? Maybe it\'s because there aren\'t any. So no eggs for breakfast, and even fewer eggs for games. The elves discovered the egg-and-spoon race during the exchange program at the Easter Bunny School and have now taken a liking to it.',
          station: 'First Floor – West wing corridor',
          capacity: '1 to 2 teams',
          descriptionGame: 'Each player has one attempt. Meanwhile, someone stops the time.',
          descriptionPoints: 'Enter the player\'s time value in seconds in the corresponding #field.'
        }
      ]
    }
  }
});


const game8 = await prisma.game.create({
  data: {
    url: 'https://www.youtube.com/embed/ucl7HeabPO0',
    tagged: "hidden,overridePlayers",
    languages: {
      create: [
        {
          language: 'de',
          title: 'Kegeln',
          story: 'Die Gewerkschaft der Elfen hat feste Regelungen, unter anderem zu den Pausenzeiten und den Vergütungen. Jedem Elf stehen bei einem 24 Stunden Arbeitstag 24 Pausen zu. In jeder Pause müssen sie Zugang zu Snacks haben. Da der Weihnachtsmann gar nicht mehr weiß, wie viele über sind, müsst ihr schätzen.',
          station: 'Obergeschoss 1 - Foyer',
          capacity: 'Multiple Teams',
          descriptionGame: 'Schätzt die Anzahl der Süßigkeiten.',
          descriptionPoints: 'Tragt in das jeweilige #Feld die Schätzung ein.'
        },
        {
          language: 'en',
          title: 'Strike',
          story: 'The Elf Union has established strict regulations, including rules for break times and compensation. Every elf is entitled to 24 breaks in a 24-hour working day. During every break, they must have access to snacks. Since Santa doesn\'t even know how many are left, you\'ll have to guess.',
          station: 'First Floor – Foyer',
          capacity: 'Multiple teams',
          descriptionGame: 'Estimate the number of sweets.',
          descriptionPoints: 'Enter the estimate in the respective #field.'
        }
      ]
    }
  }
});

const game9 = await prisma.game.create({
  data: {
    url: 'https://www.youtube.com/embed/sKCM5yMr4Js',
    tagged:"noGame",
    languages: {
      create: [
        {
          language: 'de',
          title: 'Kreidewand',
          story: 'Kokosmakronen sind die Besten! - Nein, Vanille-Kipferl! : Die Elfen haben sich in 2 Parteien gespalten, was die besten Kekse sind und bekriegen sich nun mit Schneebällen (hoffentlich ohne Steine).',
          station: 'Erdgeschoss - Foyer',
          capacity: '1 Team',
          descriptionGame: 'Jeder Spieler hat 5 Würfe. Ihr werft auf die Wichtel/Elfen auf dem Tisch. Nach der Runde wird für den nächsten Spieler aufgebaut.',
          descriptionPoints: 'Tragt die Anzahl der umgeworfenen Wichtel euer entsprechendes #Feld.'
        },
        {
          language: 'en',
          title: 'Chalkwall',
          story: 'Coconut macaroons are the best! – No, vanilla crescents! The elves have split into two parties over which are the best cookies and are now fighting each other with snowballs (hopefully without stones).',
          station: 'Ground Floor - Foyer',
          capacity: '1 Team',
          descriptionGame: 'Each player has 5 throws. You throw at the cans on the table (elves). After the round, the game is set up for the next player.',
          descriptionPoints: 'Enter the number of cans that have fallen off the table in the corresponding #field.'
        }
      ]
    }
  }
});


const game11 = await prisma.game.create({
  data: {
    url: 'https://www.youtube.com/embed/YyZ09UlBV94',
    tagged:":unit:Treffer:unit:",
    languages: {
      create: [
        {
          language: 'de',
          title: 'Bierpong',
          story: 'Die Elfen des Weihnachtsmannes haben deinen Wunsch gelesen und der Gewerkschaft gemeldet. 5 Curlingsteine?! Der Sack des Weihnachtsmannes ist zwar magisch, aber die armen Elfen müssen auf ihre Gesundheit achten. Sie schenken dir gütiger Weise eines ihrer Curling-Sets. Das ist zwar nicht ganz so groß, wie ein normales, aber macht dennoch großen Spaß. Einen Besen brauchst du dafür auch nicht.',
          station: 'Erdgeschoss - Flur Westflügel',
          capacity: 'Solo Team',
          descriptionGame: 'Jeder Spieler hat 5 Schuss und es wird nacheinander gespielt. Der Spieler stellt oder hockt sich vor die Markierung und versucht, den Kreis zu treffen, indem er den Puck über den Boden schiebt.',
          descriptionPoints: 'Jeder Treffer im äußeren Kreis sind 1 Punkt, der innere Kreis gibt 2 Punkte. Rechnet eure Punkte zusammen und tragt Sie in euer #Feld ein.'
        },
        {
          language: 'en',
          title: 'Beerpong',
          story: 'Santa\'s elves have read your wishlist and passed it on to the Union. 5 curling stones?! Santa\'s sack may be magical, but the poor elves have to watch out for their health. They kindly give you one of their curling sets. It\'s not quite as big as a normal one, but it\'s still great fun. You don\'t need a broom for this either.',
          station: 'Ground Floor – West wing corridor',
          capacity: 'Solo Team',
          descriptionGame: 'Each player has 5 shots and the game is played in succession. The player kneels or crouches in front of the mark and tries to hit the circle by sliding the puck along the floor.',
          descriptionPoints: 'Each hit in the outer circle is worth 1 point, the inner circle is worth 2 points. Add up your points and enter them in your #field.'
        }
      ]
    }
  }
});


const game12 = await prisma.game.create({
  data: {
    url: 'https://www.youtube.com/embed/sKCM5yMr4Js',
    tagged:":unit:Treffer:unit:",
    languages: {
      create: [
        {
          language: 'de',
          title: 'Flunkyball',
          story: 'Kokosmakronen sind die Besten! - Nein, Vanille-Kipferl! : Die Elfen haben sich in 2 Parteien gespalten, was die besten Kekse sind und bekriegen sich nun mit Schneebällen (hoffentlich ohne Steine).',
          station: 'Erdgeschoss - Foyer',
          capacity: '1 Team',
          descriptionGame: 'Jeder Spieler hat 5 Würfe. Ihr werft auf die Wichtel/Elfen auf dem Tisch. Nach der Runde wird für den nächsten Spieler aufgebaut.',
          descriptionPoints: 'Tragt die Anzahl der umgeworfenen Wichtel euer entsprechendes #Feld.'
        },
        {
          language: 'en',
          title: 'Flunkyball',
          story: 'Coconut macaroons are the best! – No, vanilla crescents! The elves have split into two parties over which are the best cookies and are now fighting each other with snowballs (hopefully without stones).',
          station: 'Ground Floor - Foyer',
          capacity: '1 Team',
          descriptionGame: 'Each player has 5 throws. You throw at the cans on the table (elves). After the round, the game is set up for the next player.',
          descriptionPoints: 'Enter the number of cans that have fallen off the table in the corresponding #field.'
        }
      ]
    }
  }
});


const game10 = await prisma.game.create({
  data: {
    url: '',
    tagged: "hidden,overridePlayers",
    languages: {
      create: [
        {
          language: 'de',
          title: 'Dosenschießen ',
          story: 'Die Schallplatten des Elfenchors wurden zerkratzt! Die ganzen Aufnahmen des Hit-Albums \'Elf on its self\' sind ruiniert und keiner weiß mehr welches Lied nun welches ist! Helft den Elfen sich uz erinnern.',
          station: 'Erdgeschoss - Raum 106',
          capacity: '1 Team',
          descriptionGame: 'Es gibt einen Stationsleiter! Ihr erhaltet Tipps zum Lied ',
          descriptionPoints: 'Ihr erhaltet 10 Punkte pro #Feld. Jeder Tipp gibt -2 Punkte.'
        },
        {
          language: 'en',
          title: 'Canned Shooter',
          story: 'The records of the Elf Choir have been scratched! All the recordings of the hit album \'Elf on itself\' are ruined and nobody knows which song is which anymore! Help the elves to remember.',
          station: 'Ground Floor – Room 106',
          capacity: '1 Team',
          descriptionGame: 'Listen to the station coordinator! You will receive tips on the song. ',
          descriptionPoints: 'You will receive 10 points per #field. Each tip is worth -2 points.'
        }
      ]
    }
  }
});

}
