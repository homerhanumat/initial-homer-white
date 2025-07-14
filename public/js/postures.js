const postures = [
    {
      "sanskrit": "samasthitiḥ",
      "english": "Even Standing",
      "audio": "/audio/samasthiti.m4a",
      "image": "/images/primary/sama.jpeg",
      "details": "/articles/primary/index.html#sūryanamaskāra-a-sequence"
    },
    {
        "sanskrit": "uttānasana A",
        "english": "Stretching Out A",
        "audio": "/audio/uttana-a.m4a",
        "image": "/images/primary/uttana-a.jpeg",
        "details": "/articles/primary/index.html#sūryanamaskāra-a-sequence"
    },
    {
        "sanskrit": "uttānasana B",
        "english": "Stretching Out B",
        "audio": "/audio/uttana-b.m4a",
        "image": "/images/primary/uttana-b.jpeg",
        "details": "/articles/primary/index.html#sūryanamaskāra-a-sequence"
    },
    {
        "sanskrit": "caturaṅgadaṇḍāsana",
        "english": "Four-Limbed Stick Posture",
        "audio": "/audio/catur.m4a",
        "image": "/images/primary/catur.jpeg",
        "details": "/articles/primary/index.html#sūryanamaskāra-a-sequence"
    },
    {
        "sanskrit": "ūrdhvamukhaśvānāsana",
        "english": "Upward-Face Dog Posture",
        "audio": "/audio/updog.m4a",
        "image": "/images/primary/updog.jpeg",
        "details": "/articles/primary/index.html#sūryanamaskāra-a-sequence"
    },
    {
        "sanskrit": "adhomukhaśvānāsana",
        "english": "Downward-Face Dog Posture",
        "audio": "/audio/adhomukha.m4a",
        "image": "/images/primary/downdog.jpeg",
        "details": "/articles/primary/index.html#sūryanamaskāra-a-sequence"
    },
    {
        "sanskrit": "pādāṅguṣṭhāsana",
        "english": "Thumb to Foot Posture (or Big Toe of the Foot Posture)",
        "audio": "/audio/padangusta.m4a",
        "image": "/images/primary/padangusta.jpeg",
        "details": "/articles/primary/index.html#pādāṅguṣṭhāsana"
    },
    {
        "sanskrit": "pādahastāsana",
        "english": "Hand under Foot Posture",
        "audio": "/audio/padahastasana.m4a",
        "image": "/images/primary/padahasta.jpeg",
        "details": "/articles/primary/index.html#pādāhastāsana"
    },
    {
        "sanskrit": "trikoṇāsana",
        "english": "Triangle Posture",
        "audio": "/audio/trikonasana.m4a",
        "image": "/images/primary/trikona.jpeg",
        "details": "/articles/primary/index.html#trikoṇāsana"
    },
    {
        "sanskrit": "parivṛttatrikoṇāsana",
        "english": "Revolved Triangle Posture",
        "audio": "/audio/parivrttatrikonasana.m4a",
        "image": "/images/primary/parivrttatrikona.jpeg",
        "details": "/articles/primary/index.html#parivṛttatrikoṇāsana"
    },
    {
        "sanskrit": "parśvakoṇāsana",
        "english": "Side Angle Posture",
        "audio": "/audio/parshvakona.m4a",
        "image": "/images/primary/parsvakona.jpeg",
        "details": "/articles/primary/index.html#parśvakoṇāsana"
    },
    {
        "sanskrit": "parivṛttaparśvakoṇāsana",
        "english": "Revolved Side Angle Posture",
        "audio": "/audio/parivrttaparshva.m4a",
        "image": "/images/primary/parivrttaparsvakona.jpeg",
        "details": "/articles/primary/index.html#parivṛttaparśvakoṇāsana"
    },
    {
        "sanskrit": "prasāritapādottānāsana A",
        "english": "Stretching Out to Spread Feet Posture A",
        "audio": "/audio/prasarita.m4a",
        "image": "/images/primary/prasarita-a.jpeg",
        "details": "/articles/primary/index.html#prasāritapādottānāsana"
    },
    {
        "sanskrit": "prasāritapādottānāsana B",
        "english": "Stretching Out to Spread Feet Posture B",
        "audio": "/audio/prasarita.m4a",
        "image": "/images/primary/prasarita-b.jpeg",
        "details": "/articles/primary/index.html#prasāritapādottānāsana"
    },
    {
        "sanskrit": "prasāritapādottānāsana C",
        "english": "Stretching Out to Spread Feet Posture C",
        "audio": "/audio/prasarita.m4a",
        "image": "/images/primary/prasarita-c.jpeg",
        "details": "/articles/primary/index.html#prasāritapādottānāsana"
    },
    {
        "sanskrit": "prasāritapādottānāsana D",
        "english": "Stretching Out to Spread Feet Posture D",
        "audio": "/audio/prasarita.m4a",
        "image": "/images/primary/prasarita-d.jpeg",
        "details": "/articles/primary/index.html#prasāritapādottānāsana"
    },
    {
        "sanskrit": "parśvottānāsana",
        "english": "Stretching Out to the Side Posture",
        "audio": "/audio/parshvottana.m4a",
        "image": "/images/primary/parsva.jpeg",
        "details": "/articles/primary/index.html#parśvottānāsana"
    },
    {
        "sanskrit": "utthitahastapādāṅguṣṭhāsana A",
        "english": "Standing Hand-to-Big-Toe-of-the-Foot Posture A",
        "audio": "/audio/utthitahasta.m4a",
        "image": "/images/primary/utthitahasta-a.jpeg",
        "details": "/articles/primary/index.html#utthitahastapādāṅguṣṭhāsana"
    },
    {
        "sanskrit": "utthitahastapādāṅguṣṭhāsana B",
        "english": "Standing Hand-to-Big-Toe-of-the-Foot Posture B",
        "audio": "/audio/utthitahasta.m4a",
        "image": "/images/primary/utthitahasta-b.jpeg",
        "details": "/articles/primary/index.html#utthitahastapādāṅguṣṭhāsana"
    },
    {
        "sanskrit": "utthitahastapādāṅguṣṭhāsana C",
        "english": "Standing Hand-to-Big-Toe-of-the-Foot Posture C",
        "audio": "/audio/utthitahasta.m4a",
        "image": "/images/primary/utthitahasta-c.jpeg",
        "details": "/articles/primary/index.html#utthitahastapādāṅguṣṭhāsana"
    },
    {
        "sanskrit": "utthitahastapādāṅguṣṭhāsana D",
        "english": "Standing Hand-to-Big-Toe-of-the-Foot Posture D",
        "audio": "/audio/utthitahasta.m4a",
        "image": "/images/primary/utthitahasta-d.jpeg",
        "details": "/articles/primary/index.html#utthitahastapādāṅguṣṭhāsana"
    },
    {
        "sanskrit": "ardhabaddhapadmottānāsana",
        "english": "Stretching out in Half Bound Lotus Posture",
        "audio": "/audio/ardhabaddhapadmottana.m4a",
        "image": "/images/primary/ardhabaddhapadmottana.jpeg",
        "details": "/articles/primary/index.html#ardhabaddhapadmottānāsana"
    },
    {
        "sanskrit": "utkaṭāsana",
        "english": "Fierce Posture (often called Chair Posture)",
        "audio": "/audio/utkata.m4a",
        "image": "/images/primary/utkata.jpeg",
        "details": "/articles/primary/index.html#utkaṭāsana"
    },
    {
        "sanskrit": "vīrabhadrāsana A",
        "english": "Auspicious Hero Posture A (also called Warrior Posture)",
        "audio": "/audio/virabhadra.m4a",
        "image": "/images/primary/vira-1.jpeg",
        "details": "/articles/primary/index.html#vīrabhadrāsana"
    },
    {
        "sanskrit": "vīrabhadrāsana B",
        "english": "Auspicious Hero Posture B (also called Warrior Posture)",
        "audio": "/audio/virabhadra.m4a",
        "image": "/images/primary/vira-2.jpeg",
        "details": "/articles/primary/index.html#vīrabhadrāsana"
    },
    {
        "sanskrit": "daṇḍāsana",
        "english": "Stick Posture",
        "audio": "/audio/danda.m4a",
        "image": "/images/primary/dandasana.jpeg",
        "details": "/articles/primary/index.html#daṇḍāsana"
    },
    {
        "sanskrit": "paścimottānāsana A",
        "english": "West Stretching Out Posture A",
        "audio": "/audio/paschimottana.m4a",
        "image": "/images/primary/paschi-a.jpeg",
        "details": "/articles/primary/index.html#paścimottānāsana-a"
    },
    {
        "sanskrit": "paścimottānāsana B",
        "english": "West Stretching Out Posture B",
        "audio": "/audio/paschimottana.m4a",
        "image": "/images/primary/paschi-b.jpeg",
        "details": "/articles/primary/index.html#paścimottānāsana-b"
    },
    {
        "sanskrit": "paścimottānāsana C",
        "english": "West Stretching Out Posture C",
        "audio": "/audio/paschimottana.m4a",
        "image": "/images/primary/paschi-c.jpeg",
        "details": "/articles/primary/index.html#paścimottānāsana-c"
    },
    {
        "sanskrit": "pūrvottānāsana",
        "english": "East Stretching out Posture",
        "audio": "/audio/purvottana.m4a",
        "image": "/images/primary/purvo.jpeg",
        "details": "/articles/primary/index.html#pūrvottānāsana"
    },
    {
        "sanskrit": "ardhabaddhapadmapaścimottānāsana",
        "english": "Half Bound Lotus West Stretching out Posture",
        "audio": "/audio/ardhabaddhapadmapaschima.m4a",
        "image": "/images/primary/abpp.jpeg",
        "details": "/articles/primary/index.html#ardhabaddhapadmapaścimottānāsana"
    },
    {
        "sanskrit": "tryaṅgamukhaikapādapaścimottānāsana",
        "english": "Three-Limbed Face to One Leg West Stretching out Posture",
        "audio": "/audio/tryanga.m4a",
        "image": "/images/primary/trianga.jpeg",
        "details": "/articles/primary/index.html#tryaṅgamukhaikapādapaścimottānāsana"
    },
    {
        "sanskrit": "jānuśīrṣāsana A",
        "english": "Head to Knee Posture A",
        "audio": "/audio/janushirsha.m4a",
        "image": "/images/primary/janu-a.jpeg",
        "details": "/articles/primary/index.html#jānuśīrṣāsana-a"
    },
    {
        "sanskrit": "jānuśīrṣāsana B",
        "english": "Head to Knee Posture B",
        "audio": "/audio/janushirsha.m4a",
        "image": "/images/primary/janu-b.jpeg",
        "details": "/articles/primary/index.html#jānuśīrṣāsana-b"
    },
    {
        "sanskrit": "jānuśīrṣāsana C",
        "english": "Head to Knee Posture C",
        "audio": "/audio/janushirsha.m4a",
        "image": "/images/primary/janu-c.jpeg",
        "details": "/articles/primary/index.html#jānuśīrṣāsana-c"
    },
    {
        "sanskrit": "marīcyāsana A",
        "english": "Marīci Posture A",
        "audio": "/audio/marici.m4a",
        "image": "/images/primary/mari-a.jpeg",
        "details": "/articles/primary/index.html#marīcyāsana-a"
    },
    {
        "sanskrit": "marīcyāsana B",
        "english": "Marīci Posture B",
        "audio": "/audio/marici.m4a",
        "image": "/images/primary/mari-b.jpeg",
        "details": "/articles/primary/index.html#marīcyāsana-a"
    },
    {
        "sanskrit": "marīcyāsana C",
        "english": "Marīci Posture C",
        "audio": "/audio/marici.m4a",
        "image": "/images/primary/mari-c.jpeg",
        "details": "/articles/primary/index.html#marīcyāsana-a"
    },
    {
        "sanskrit": "marīcyāsana D",
        "english": "Marīci Posture D",
        "audio": "/audio/marici.m4a",
        "image": "/images/primary/mari-d.jpeg",
        "details": "/articles/primary/index.html#marīcyāsana-a"
    },
    {
        "sanskrit": "nāvāsana",
        "english": "Boat Posture",
        "audio": "/audio/nava.m4a",
        "image": "/images/primary/nava.jpeg",
        "details": "/articles/primary/index.html#nāvāsana"
    },
    {
        "sanskrit": "bhujapīḍāsana A",
        "english": "Pressure on the Shoulders Posture A",
        "audio": "/audio/bhuja.m4a",
        "image": "/images/primary/bhuja-a.jpeg",
        "details": "/articles/primary/index.html#bhujapīḍāsana"
    },
    {
        "sanskrit": "bhujapīḍāsana B",
        "english": "Pressure on the Shoulders Posture B",
        "audio": "/audio/bhuja.m4a",
        "image": "/images/primary/bhuja-b.jpeg",
        "details": "/articles/primary/index.html#bhujapīḍāsana"
    },
    {
        "sanskrit": "kūrmāsana",
        "english": "Tortoise Posture",
        "audio": "/audio/kurma.m4a",
        "image": "/images/primary/kurma.jpeg",
        "details": "/articles/primary/index.html#kūrmāsana"
    },
    {
        "sanskrit": "suptakūrmāsana",
        "english": "Sleeping Tortoise Posture",
        "audio": "/audio/suptakurma.m4a",
        "image": "/images/primary/suptak.jpeg",
        "details": "/articles/primary/index.html#suptakūrmāsana"
    },
    {
        "sanskrit": "garbhapiṇḍāsana",
        "english": "Embryo in the Womb Posture",
        "audio": "/audio/garbha.m4a",
        "image": "/images/primary/garbha.jpeg",
        "details": "/articles/primary/index.html#garbhapiṇḍāsana"
    },
    {
        "sanskrit": "kukkuṭāsana",
        "english": "Rooster Posture",
        "audio": "/audio/kukkuta.m4a",
        "image": "/images/primary/kukku.jpeg",
        "details": "/articles/primary/index.html#kukkuṭāsana"
    },
    {
        "sanskrit": "baddhakoṇāsana A",
        "english": "Bound Angle Posture A",
        "audio": "/audio/baddhakona.m4a",
        "image": "/images/primary/baddhak-a.jpeg",
        "details": "/articles/primary/index.html#baddhakoṇāsana"
    },
    {
        "sanskrit": "baddhakoṇāsana B",
        "english": "Bound Angle Posture B",
        "audio": "/audio/baddhakona.m4a",
        "image": "/images/primary/baddhak-b.jpeg",
        "details": "/articles/primary/index.html#baddhakoṇāsana"
    },
    {
        "sanskrit": "upaviṣṭakoṇāsana A / suptakoṇāsana B",
        "english": "'Entered-into' Angle Posture A / Sleeping Angle Posture B",
        "audio": "/audio/upavishta.m4a",
        "image": "/images/primary/upa-a.jpeg",
        "details": "/articles/primary/index.html#upaviṣṭakoṇāsana"
    },
    {
        "sanskrit": "upaviṣṭakoṇāsana B",
        "english": "'Entered-into' Angle Posture B",
        "audio": "/audio/upavishta.m4a",
        "image": "/images/primary/upa-b.jpeg",
        "details": "/articles/primary/index.html#upaviṣṭakoṇāsana"
    },
    {
        "sanskrit": "suptakoṇāsana A",
        "english": "Sleeping Angle Posture A",
        "audio": "/audio/suptakona.m4a",
        "image": "/images/primary/suptakona-a.jpeg",
        "details": "/articles/primary/index.html#suptakoṇāsana"
    },
    {
        "sanskrit": "suptapādāṅguṣṭhāsana A",
        "english": "Sleeping Thumb-to-Foot Posture A",
        "audio": "/audio/suptapada.m4a",
        "image": "/images/primary/suptapada-a.jpeg",
        "details": "/articles/primary/index.html#suptapādāṅguṣṭhāsana"
    },
    {
        "sanskrit": "suptapādāṅguṣṭhāsana B",
        "english": "Sleeping Sleeping Thumb-to-Foot Posture B",
        "audio": "/audio/suptapada.m4a",
        "image": "/images/primary/suptapada-b.jpeg",
        "details": "/articles/primary/index.html#suptapādāṅguṣṭhāsana"
    },
    {
        "sanskrit": "suptapādāṅguṣṭhāsana C",
        "english": "Sleeping Sleeping Thumb-to-Foot Posture C",
        "audio": "/audio/suptapada.m4a",
        "image": "/images/primary/suptapada-c.jpeg",
        "details": "/articles/primary/index.html#suptapādāṅguṣṭhāsana"
    },
    {
        "sanskrit": "suptapādāṅguṣṭhāsana D",
        "english": "Sleeping Sleeping Thumb-to-Foot Posture D",
        "audio": "/audio/suptapada.m4a",
        "image": "/images/primary/suptapada-d.jpeg",
        "details": "/articles/primary/index.html#suptapādāṅguṣṭhāsana"
    },
    {
        "sanskrit": "ubhayapādāṅguṣṭhāsana A",
        "english": "Thumbs to Both Feet Posture A",
        "audio": "/audio/ubhayapada.m4a",
        "image": "/images/primary/ubhaya-a.jpeg",
        "details": "/articles/primary/index.html#ubhayapādāṅguṣṭhāsana"
    },
    {
        "sanskrit": "ubhayapādāṅguṣṭhāsana B",
        "english": "Thumbs to Both Feet Posture B",
        "audio": "/audio/ubhayapada.m4a",
        "image": "/images/primary/ubhaya-b.jpeg",
        "details": "/articles/primary/index.html#ubhayapādāṅguṣṭhāsana"
    },
    {
        "sanskrit": "ūrdhvamukhapaścimottānāsana",
        "english": "Upward Face West Stretching out Posture",
        "audio": "/audio/urdhvamukha.m4a",
        "image": "/images/primary/urdhvamukha.jpeg",
        "details": "/articles/primary/index.html#ūrdhvamukhapaścimottānāsana"
    },
    {
        "sanskrit": "setubandhāsana",
        "english": "Bridge-Binding Posture",
        "audio": "/audio/setu.m4a",
        "image": "/images/primary/setu.jpeg",
        "details": "/articles/primary/index.html#setubandhāsana"
    },
    {
        "sanskrit": "ūrdhvadhanurāsana",
        "english": "Upward Bow Posture",
        "audio": "/audio/urdhvadhanu.m4a",
        "image": "/images/primary/urdhvadhanurasana.jpeg",
        "details": "/articles/primary/index.html#ūrdhvadhanurāsana"
    },
    {
        "sanskrit": "sālambhasarvāṅgāsana",
        "english": "Posture where All Limbs are Held Up (AKA Shoulder Stand)",
        "audio": "/audio/salambha.m4a",
        "image": "/images/primary/shoulder.jpeg",
        "details": "/articles/primary/index.html#sālambhasarvāṅgāsana"
    },
    {
        "sanskrit": "hālāsana",
        "english": "Plow Posture",
        "audio": "/audio/hala.m4a",
        "image": "/images/primary/hala.jpeg",
        "details": "/articles/primary/index.html#hālāsana"
    },
    {
        "sanskrit": "ūrdhvapadmāsana",
        "english": "Upward Lotus Posture",
        "audio": "/audio/urdhvapadma.m4a",
        "image": "/images/primary/urdhvapadma.jpeg",
        "details": "/articles/primary/index.html#ūrdhvapadmāsana"
    },
    {
        "sanskrit": "piṇḍāsana",
        "english": "Embryo Posture",
        "audio": "/audio/pinda.m4a",
        "image": "/images/primary/pinda.jpeg",
        "details": "/articles/primary/index.html#piṇḍāsana"
    },
    {
        "sanskrit": "matsyāsana",
        "english": "Fish Posture",
        "audio": "/audio/matsya.m4a",
        "image": "/images/primary/matsya.jpeg",
        "details": "/articles/primary/index.html#matsyāsana"
    },
    {
        "sanskrit": "uttānapādāsana",
        "english": "Legs Stretching out Posture",
        "audio": "/audio/uttanapada.m4a",
        "image": "/images/primary/uttanapada.jpeg",
        "details": "/articles/primary/index.html#uttānapādāsana"
    },
    {
        "sanskrit": "śīrṣāsana",
        "english": "Headstand",
        "audio": "/audio/sirsha.m4a",
        "image": "/images/primary/sirsa.jpeg",
        "details": "/articles/primary/index.html#śīrṣāsana"
    },
    {
        "sanskrit": "ūrdhvadaṇḍāsana A",
        "english": "Upward Stick Posture A",
        "audio": "/audio/urdhvadanda.m4a",
        "image": "/images/primary/urdhvadanda-a.jpeg",
        "details": "/articles/primary/index.html#ūrdhvadaṇḍāsana"
    },
    {
        "sanskrit": "ūrdhvadaṇḍāsana B",
        "english": "Upward Stick Posture B",
        "audio": "/audio/urdhvadanda.m4a",
        "image": "/images/primary/urdhvadanda-b.jpeg",
        "details": "/articles/primary/index.html#ūrdhvadaṇḍāsana"
    },
    {
        "sanskrit": "bālāsana",
        "english": "Child Posture",
        "audio": "/audio/bala.m4a",
        "image": "/images/primary/bala.jpeg",
        "details": "/articles/primary/index.html#bālāsana"
    },
    {
        "sanskrit": "baddhapadmāsana",
        "english": "Bound Lotus Posture",
        "audio": "/audio/baddhapadma.m4a",
        "image": "/images/primary/baddhapadma.jpeg",
        "details": "/articles/primary/index.html#baddhapadmāsana"
    },
    {
        "sanskrit": "padmāsana",
        "english": "Lotus Posture",
        "audio": "/audio/padma.m4a",
        "image": "/images/primary/padma.jpeg",
        "details": "/articles/primary/index.html#padmāsana"
    },
    {
        "sanskrit": "tolāsana",
        "english": "'Tola' Posture",
        "audio": "/audio/tola.m4a",
        "image": "/images/primary/tola.jpeg",
        "details": "/articles/primary/index.html#tolāsana"
    },
    {
        "sanskrit": "śāvāsana",
        "english": "Corpse Posture",
        "audio": "/audio/sava.m4a",
        "image": "/images/primary/sava.jpeg",
        "details": "/articles/primary/index.html#śāvāsana"
    }
];