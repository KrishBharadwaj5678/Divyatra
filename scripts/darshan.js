/* ==========================================================
     GOD DATA
  ========================================================== */

const gods = [
  {
    name: "Ganesha",
    nameHi: "गणेश",

    title: "Remover of Obstacles",
    titleHi: "विघ्नहर्ता",

    description:
      "Ganesha is revered as the remover of obstacles and the lord of beginnings, wisdom and prosperity.",

    descriptionHi:
      "गणेश जी को विघ्नों को दूर करने वाले तथा शुभारंभ, ज्ञान और समृद्धि के देवता के रूप में पूजा जाता है।",

    narrationFolderName: "Ganesha",

    model: "assets/models/ganesha.glb",

    modelPosition: { x: 2.1, y: 1.9, z: 0 },

    modelRotationY: -0.1,

    mobileModelRotationY: 0,

    image: "assets/images/ganesha.webp",

    music: "assets/chanting/ganesha.mp3",

    details: {
      "Known As": "Ganapati · Vinayaka · Vighnaharta",

      Role: "Lord of beginnings and wisdom",

      Represents: "Wisdom · Prosperity · New beginnings",

      Symbol: "Elephant head · Modak",

      Vehicle: "Mouse",
    },

    detailsHi: {
      "अन्य नाम": "गणपति · विनायक · विघ्नहर्ता",

      भूमिका: "शुभारंभ और ज्ञान के देवता",

      प्रतिनिधित्व: "ज्ञान · समृद्धि · नई शुरुआत",

      प्रतीक: "हाथी का सिर · मोदक",

      वाहन: "मूषक",
    },
  },

  {
    name: "Brahma",
    nameHi: "ब्रह्मा",

    title: "The Creator",
    titleHi: "सृष्टिकर्ता",

    description:
      "Brahma is revered as the creator of the universe, representing knowledge, creation, and the beginning of cosmic order.",

    descriptionHi:
      "ब्रह्मा को ब्रह्मांड के सृष्टिकर्ता के रूप में पूजा जाता है, जो ज्ञान, सृष्टि और ब्रह्मांडीय व्यवस्था के प्रारंभ का प्रतीक हैं।",

    narrationFolderName: "Brahma",

    model: "assets/models/brahma.glb",

    modelPosition: { x: 2.2, y: 0.16, z: 0 },

    modelRotationY: -0.13,

    mobileModelRotationY: 0,

    image: "assets/images/brahma.webp",

    music: "assets/chanting/brahma.mp3",

    details: {
      "Known As": "Svayambhuva · Prajapati · Vedic Creator",

      Role: "Lord of creation",

      Represents: "Creation · Knowledge · Cosmic order",

      Symbols: "Vedas · Hamsa · Kamandalu",

      Vehicle: "Hamsa",
    },

    detailsHi: {
      "अन्य नाम": "स्वयम्भुवा · प्रजापति · वैदिक सृष्टिकर्ता",

      भूमिका: "सृष्टि के देवता",

      प्रतिनिधित्व: "सृष्टि · ज्ञान · ब्रह्मांडीय व्यवस्था",

      प्रतीक: "वेद · हंस · कमंडल",

      वाहन: "हंस",
    },
  },
  {
    name: "Saraswati",
    nameHi: "सरस्वती",

    title: "The Goddess of Wisdom",
    titleHi: "ज्ञान की देवी",

    description:
      "Saraswati represents wisdom, learning, music, creativity and the divine flow of knowledge.",

    descriptionHi:
      "सरस्वती विद्या, ज्ञान, संगीत, रचनात्मकता और दिव्य ज्ञान के प्रवाह का प्रतीक हैं।",

    narrationFolderName: "Saraswati",

    model: "assets/models/saraswati.glb",

    modelPosition: { x: 2.03, y: 2.01, z: 0 },

    modelRotationY: -0.2,

    mobileModelRotationY: 0,

    image: "assets/images/saraswati.webp",

    music: "assets/chanting/saraswati.mp3",

    details: {
      "Known As": "Vagdevi · Bharati · Sharada",

      Role: "Goddess of knowledge and arts",

      Represents: "Wisdom · Creativity · Learning",

      Symbols: "Veena · Book · Swan",

      Vehicle: "Swan",
    },

    detailsHi: {
      "अन्य नाम": "वाग्देवी · भारती · शारदा",

      भूमिका: "ज्ञान और कला की देवी",

      प्रतिनिधित्व: "ज्ञान · रचना · शिक्षा",

      प्रतीक: "वीणा · पुस्तक · हंस",

      वाहन: "हंस",
    },
  },

  {
    name: "Lakshmi",
    nameHi: "लक्ष्मी",

    title: "The Goddess of Prosperity",
    titleHi: "समृद्धि की देवी",

    description:
      "Lakshmi symbolizes wealth, fortune, auspiciousness, compassion, and grace that bring balance and abundance to life.",

    descriptionHi:
      "लक्ष्मी समृद्धि, सौभाग्य, शुभता, दया और कृपा का प्रतीक हैं, जो जीवन में संतुलन और वैभव लाती हैं।",

    narrationFolderName: "Lakshmi",

    model: "assets/models/lakshmi.glb",

    modelPosition: { x: 2.05, y: 2.06, z: 0 },

    modelRotationY: -0.2,

    mobileModelRotationY: 0,

    image: "assets/images/lakshmi.webp",

    music: "assets/chanting/lakshmi.mp3",

    details: {
      "Known As": "Shri · Padma · Kamala",

      Role: "Goddess of wealth and auspiciousness",

      Represents: "Prosperity · Fortune · Grace",

      Symbols: "Lotus · Gold coins · Elephants",

      Vehicle: "Owl",
    },

    detailsHi: {
      "अन्य नाम": "श्री · पद्मा · कमला",

      भूमिका: "समृद्धि और शुभता की देवी",

      प्रतिनिधित्व: "वैभव · सौभाग्य · कृपा",

      प्रतीक: "कमल · स्वर्ण मुद्राएँ · हाथी",

      वाहन: "उल्लू",
    },
  },

  {
    name: "Kali",
    nameHi: "काली",

    title: "The Fierce Protector",
    titleHi: "क्रूरा समरूप रक्षक",

    description:
      "Kali represents divine power, courage, destruction of evil and the fierce protection of truth and justice.",

    descriptionHi:
      "काली दिव्य शक्ति, साहस, असुरों के विनाश और सत्य तथा न्याय की कठोर रक्षा का प्रतीक हैं।",

    narrationFolderName: "Kali",

    model: "assets/models/kali.glb",

    modelPosition: { x: 2.05, y: 2.01, z: 0 },

    modelRotationY: -0.15,

    mobileModelRotationY: 0,

    image: "assets/images/kali.webp",

    music: "assets/chanting/kali.mp3",

    details: {
      "Known As": "Kali Mata · Shyama · Bhadrakali",

      Role: "Goddess of time, power and transformation",

      Represents: "Power · Destruction · Liberation",

      Symbols: "Sword · Skull · Flame",

      Vehicle: "Lion",
    },

    detailsHi: {
      "अन्य नाम": "काली माता · श्यामा · भद्रकाली",

      भूमिका: "समय, शक्ति और परिवर्तन की देवी",

      प्रतिनिधित्व: "शक्ति · विनाश · मुक्ति",

      प्रतीक: "तलवार · खोपड़ी · अग्नि",

      वाहन: "सिंह",
    },
  },

  {
    name: "Shani Dev",
    nameHi: "शनि देव",

    title: "The Lord of Justice",
    titleHi: "न्याय के देवता",

    description:
      "Shani Dev symbolizes discipline, justice, karma, and the lessons that lead to spiritual maturity and balance.",

    descriptionHi:
      "शनि देव अनुशासन, न्याय, कर्म और उन शिक्षाओं का प्रतीक हैं, जो आध्यात्मिक परिपक्वता और संतुलन की ओर ले जाती हैं।",

    narrationFolderName: "ShaniDev",

    model: "assets/models/shanidev.glb",

    modelPosition: { x: 2.05, y: 1.92, z: 0 },

    modelRotationY: -0.2,

    mobileModelRotationY: 0,

    image: "assets/images/shanidev.webp",

    music: "assets/chanting/shanidev.mp3",

    details: {
      "Known As": "Shanaishchara · Saturn",

      Role: "Lord of justice and karma",

      Represents: "Discipline · Karma · Truth",

      Symbols: "Sickle · Dark zodiac · Hourglass",

      Vehicle: "Crow",
    },

    detailsHi: {
      "अन्य नाम": "शनैश्चर · शनि",

      भूमिका: "न्याय और कर्म के देवता",

      प्रतिनिधित्व: "अनुशासन · कर्म · सत्य",

      प्रतीक: "हंसिया · अंधेरे राशि · समय की घड़ी",

      वाहन: "कौआ",
    },
  },

  {
    name: "Vishnu",
    nameHi: "विष्णु",

    title: "The Preserver of the Universe",
    titleHi: "ब्रह्मांड के पालनकर्ता",

    description:
      "Vishnu is associated with preservation, protection and the restoration of cosmic balance.",

    descriptionHi:
      "विष्णु भगवान संरक्षण, सुरक्षा और ब्रह्मांडीय संतुलन की पुनर्स्थापना से जुड़े हैं।",

    narrationFolderName: "Vishnu",

    model: "assets/models/vishnu.glb",

    modelPosition: { x: 2.05, y: 0.3, z: 0 },

    modelRotationY: -0.2,

    mobileModelRotationY: 0,

    image: "assets/images/vishnu.webp",

    music: "assets/chanting/vishnu.mp3",

    details: {
      "Known As": "Narayana · Hari · Jagannatha",

      Role: "Preserver of cosmic order",

      Represents: "Protection · Balance · Dharma",

      Symbols: "Conch · Chakra · Lotus",

      Vehicle: "Garuda",
    },

    detailsHi: {
      "अन्य नाम": "नारायण · हरि · जगन्नाथ",

      भूमिका: "ब्रह्मांडीय व्यवस्था के पालनकर्ता",

      प्रतिनिधित्व: "सुरक्षा · संतुलन · धर्म",

      प्रतीक: "शंख · चक्र · कमल",

      वाहन: "गरुड़",
    },
  },

  {
    name: "Shiva",
    nameHi: "शिव",

    title: "The Eternal Consciousness",
    titleHi: "शाश्वत चेतना",

    description:
      "Shiva represents transformation, meditation and the eternal cycle of creation and dissolution.",

    descriptionHi:
      "शिव परिवर्तन, ध्यान तथा सृष्टि और संहार के शाश्वत चक्र का प्रतिनिधित्व करते हैं।",

    narrationFolderName: "Shiva",

    model: "assets/models/shiva.glb",

    modelPosition: { x: 2.05, y: 1.9, z: 0 },

    modelRotationY: -0.1,

    mobileModelRotationY: 0,

    image: "assets/images/shiva.webp",

    music: "assets/chanting/shiva.mp3",

    details: {
      "Known As": "Mahadeva · Shankara · Neelkanth",

      Role: "Lord of transformation",

      Represents: "Meditation · Power · Transformation",

      Symbols: "Trident · Crescent moon · Third eye",

      Consort: "Parvati",
    },

    detailsHi: {
      "अन्य नाम": "महादेव · शंकर · नीलकंठ",

      भूमिका: "परिवर्तन के देवता",

      प्रतिनिधित्व: "ध्यान · शक्ति · परिवर्तन",

      प्रतीक: "त्रिशूल · अर्धचंद्र · तीसरा नेत्र",

      अर्धांगिनी: "पार्वती",
    },
  },

  {
    name: "Radha Krishna",
    nameHi: "राधा कृष्ण",

    title: "The Divine Couple",
    titleHi: "दिव्य युगल",

    description:
      "Radha and Krishna represent the eternal bond of divine love, devotion and spiritual unity.",

    descriptionHi:
      "राधा और कृष्ण दिव्य प्रेम, भक्ति और आध्यात्मिक एकता के शाश्वत बंधन का प्रतीक हैं। उनका संबंध आत्मा और परमात्मा के बीच पवित्र प्रेम और भक्ति को दर्शाता है।",

    narrationFolderName: "RadhaKrishna",

    model: "assets/models/radhakrishna.glb",

    modelPosition: { x: 2.05, y: 2, z: 0 },

    modelRotationY: -0.2,

    mobileModelRotationY: 0,

    image: "assets/images/radhakrishna.webp",

    music: "assets/chanting/radhakrishna.mp3",

    details: {
      "Known As": "Radha Madhava · Radha Govinda",

      Role: "Embodiments of divine love and devotion",

      Represents: "Love · Devotion · Spiritual Unity · Bliss",

      Symbols: "Flute · Peacock feather · Lotus",

      Companion: "Radha",
    },

    detailsHi: {
      "अन्य नाम": "राधा माधव · राधा गोविंद · राधा गोपाल",

      भूमिका: "दिव्य प्रेम और भक्ति के स्वरूप",

      प्रतिनिधित्व: "प्रेम · भक्ति · आध्यात्मिक एकता · आनंद",

      प्रतीक: "बांसुरी · मोर पंख · कमल",

      साथी: "राधा",
    },
  },

  {
    name: "Hanuman",
    nameHi: "हनुमान",

    title: "The Embodiment of Devotion",
    titleHi: "भक्ति के स्वरूप",

    description:
      "Hanuman represents strength, courage, humility and unwavering devotion to Lord Rama.",

    descriptionHi:
      "हनुमान जी शक्ति, साहस, विनम्रता और भगवान राम के प्रति अटूट भक्ति के प्रतीक हैं।",

    narrationFolderName: "Hanuman",

    model: "assets/models/hanuman.glb",

    modelPosition: { x: 2.05, y: 1.9, z: 0 },

    modelRotationY: -0.1,

    mobileModelRotationY: 0,

    image: "assets/images/hanuman.webp",

    music: "assets/chanting/hanuman.mp3",

    details: {
      "Known As": "Anjaneya · Bajrangbali · Maruti",

      Role: "Devotee, protector and warrior",

      Represents: "Strength · Courage · Devotion",

      Symbol: "Mace · Mountain",

      Father: "Vayu",
    },

    detailsHi: {
      "अन्य नाम": "अंजनेय · बजरंगबली · मारुति",

      भूमिका: "भक्त, रक्षक और योद्धा",

      प्रतिनिधित्व: "शक्ति · साहस · भक्ति",

      प्रतीक: "गदा · पर्वत",

      पिता: "वायु देव",
    },
  },

  {
    name: "Sita Ram",
    nameHi: "सीता राम",

    title: "The Ideal Couple",
    titleHi: "आदर्श युगल",

    description:
      "Sita and Ram symbolize devotion, righteousness, compassion and the sacred ideal of dharma in life.",

    descriptionHi:
      "सीता और राम भक्ति, नैतिकता, दया और जीवन में धर्म के पवित्र आदर्श का प्रतीक हैं।",

    narrationFolderName: "SitaRam",

    model: "assets/models/sitaram.glb",

    modelPosition: { x: 2.05, y: 1.92, z: 0 },

    modelRotationY: -0.15,

    mobileModelRotationY: 0,

    image: "assets/images/sitaram.webp",

    music: "assets/chanting/sitaram.mp3",

    details: {
      "Known As": "Rama Rajya · Sita Ram · Maryada Purushottam",

      Role: "Embodiments of devotion and dharma",

      Represents: "Love · Duty · Integrity · Compassion",

      Symbols: "Bow · Lotus · Golden temple",

      Companion: "Sita",
    },

    detailsHi: {
      "अन्य नाम": "राम राज्य · सीता राम · मर्यादा पुरुषोत्तम",

      भूमिका: "भक्ति और धर्म के प्रतीक",

      प्रतिनिधित्व: "प्रेम · कर्तव्य · शील · दया",

      प्रतीक: "धनुष · कमल · स्वर्ण मंदिर",

      साथी: "सीता",
    },
  },

  {
    name: "Durga",
    nameHi: "दुर्गा",

    title: "The Divine Mother",
    titleHi: "दिव्य माता",

    description:
      "Durga represents divine strength, courage, protection and the victory of good over evil.",

    descriptionHi:
      "दुर्गा दिव्य शक्ति, साहस, रक्षा और अशुभ पर शुभ की विजय का प्रतीक हैं।",

    narrationFolderName: "Durga",

    model: "assets/models/durga.glb",

    modelPosition: { x: 2.05, y: 2.08, z: 0 },

    modelRotationY: -0.25,

    mobileModelRotationY: 0,

    image: "assets/images/durga.webp",

    music: "assets/chanting/durga.mp3",

    details: {
      "Known As": "Shailaputri · Devi · Mata Rani",

      Role: "Protector and embodiment of divine power",

      Represents: "Strength · Fearlessness · Protection",

      Symbols: "Trident · Lion · Lotus",

      Vehicle: "Lion",
    },

    detailsHi: {
      "अन्य नाम": "शैलपुत्री · देवी · माता रानी",

      भूमिका: "रक्षक और दिव्य शक्ति का स्वरूप",

      प्रतिनिधित्व: "शक्ति · निर्भीकता · सुरक्षा",

      प्रतीक: "त्रिशूल · सिंह · कमल",

      वाहन: "सिंह",
    },
  },
];

/* ==========================================================
     VARIABLES
  ========================================================== */

let scene;
let camera;
let renderer;
let controls;

let currentModel = null;

let modelLoadRequestId = 0;

let arSession = null;

let arHitTestSource = null;

let arReferenceSpace = null;

let arReticle = null;

let arPlacementGroup = null;

let arModelSnapshot = null;

let arModelPlaced = false;

let currentGodIndex = 8;

function getModelRotationY(god) {
  if (window.innerWidth <= 600) {
    return god.mobileModelRotationY ?? god.modelRotationY ?? 0;
  }

  return god.modelRotationY ?? 0;
}

function centerModelVertically(targetScreenY) {
  if (!camera || !currentModel) {
    return;
  }

  camera.updateMatrixWorld(true);
  currentModel.updateMatrixWorld(true);

  const bounds = new THREE.Box3().setFromObject(currentModel);
  const center = bounds.getCenter(new THREE.Vector3());
  const projectedY = center.clone().project(camera).y;
  const cameraCenter = center.clone().applyMatrix4(camera.matrixWorldInverse);
  const viewDepth = Math.max(camera.near, -cameraCenter.z);
  const viewHeight =
    2 * viewDepth * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);
  const verticalCorrection = ((targetScreenY - projectedY) * viewHeight) / 2;
  const cameraUp = new THREE.Vector3(0, 1, 0).applyQuaternion(
    camera.quaternion,
  );

  currentModel.position.addScaledVector(cameraUp, verticalCorrection);
}

function getProjectedModelBounds() {
  camera.updateMatrixWorld(true);
  currentModel.updateMatrixWorld(true);

  const bounds = new THREE.Box3().setFromObject(currentModel);
  const projectedX = [];
  const projectedY = [];

  for (const x of [bounds.min.x, bounds.max.x]) {
    for (const y of [bounds.min.y, bounds.max.y]) {
      for (const z of [bounds.min.z, bounds.max.z]) {
        const point = new THREE.Vector3(x, y, z).project(camera);
        projectedX.push(((point.x + 1) * window.innerWidth) / 2);
        projectedY.push(((1 - point.y) * window.innerHeight) / 2);
      }
    }
  }

  return {
    left: Math.min(...projectedX),
    right: Math.max(...projectedX),
    top: Math.min(...projectedY),
    bottom: Math.max(...projectedY),
  };
}

function applyResponsiveModelPosition() {
  if (!currentModel || !currentModel.userData.basePosition) {
    return;
  }

  const basePosition = currentModel.userData.basePosition;
  const godModelPosition = gods[currentGodIndex].modelPosition || basePosition;
  const cameraTargetX = 0.8;
  let horizontalFactor = 1;
  let verticalOffset = 0;
  let scaleFactor = 1;

  if (window.innerWidth <= 600) {
    horizontalFactor = 0;
    scaleFactor = 0.72;
  } else if (window.innerWidth <= 900) {
    horizontalFactor = 0.55;
    scaleFactor = 0.6;
  } else if (window.innerWidth > 900) {
    horizontalFactor = 1;
    scaleFactor = 3.3;
  }

  const positionX =
    window.innerWidth > 900
      ? godModelPosition.x
      : cameraTargetX + (basePosition.x - cameraTargetX) * horizontalFactor;
  const positionY =
    window.innerWidth > 900
      ? godModelPosition.y
      : basePosition.y + verticalOffset;

  currentModel.position.set(positionX, positionY, basePosition.z);

  currentModel.rotation.y = getModelRotationY(gods[currentGodIndex]);

  currentModel.scale.setScalar(currentModel.userData.baseScale * scaleFactor);

  if (camera) {
    if (window.innerWidth <= 900) {
      const targetScreenY = window.innerWidth <= 600 ? 1 - 2 * 0.42 : 0;
      centerModelVertically(targetScreenY);
    }

    if (window.innerWidth > 900) {
      const infoPanel = document.querySelector(".god-info");
      const safeLeft = infoPanel
        ? infoPanel.getBoundingClientRect().right + 16
        : 16;
      const safeBounds = {
        left: safeLeft,
        right: window.innerWidth - 20,
        top: 20,
        bottom: window.innerHeight - 20,
      };

      for (let attempt = 0; attempt < 60; attempt += 1) {
        const projected = getProjectedModelBounds();
        const fitsViewport =
          projected.left >= safeBounds.left &&
          projected.right <= safeBounds.right &&
          projected.top >= safeBounds.top &&
          projected.bottom <= safeBounds.bottom;

        if (fitsViewport) {
          break;
        }

        currentModel.scale.multiplyScalar(0.98);
      }
    }
  }
}

let audio = null;

let isMusicPlaying = false;

let particles = null;

let divineGlow = null;

let currentLanguage = "en";

let autoRotate = false;

let isStorySpeaking = false;

let narrationAudio = null;

let narrationRequestId = 0;

let languageTransitionTimer = null;

/* ==========================================================
     PRAYER SOUNDS
  ========================================================== */

const templeBellButton = document.getElementById("templeBellButton");
const fastBellButton = document.getElementById("fastBellButton");
const shankhButton = document.getElementById("shankhButton");
const templeBellText = document.getElementById("templeBellText");
const fastBellText = document.getElementById("fastBellText");
const shankhText = document.getElementById("shankhText");

const prayerSounds = {
  bell: new Audio("./assets/audio/bell.mp3"),
  fastBell: new Audio("./assets/audio/ganti.mp3"),
  shankh: new Audio("./assets/audio/shankh.mp3"),
};

Object.values(prayerSounds).forEach((sound) => {
  sound.preload = "auto";
  sound.volume = 0.7;
});

/* ==========================================================
     VIRTUAL DIYA VARIABLES
  ========================================================== */

let virtualDiya = null;

let diyaAnimation = null;

let diyaLight = null;

let diyaFlame = null;

/* ==========================================================
     FLOWER OFFERING VARIABLES
  ========================================================== */

let flowerOfferingGroup = null;

let flowerOfferingAnimation = null;

let flowerOfferings = [];

const loader = new THREE.GLTFLoader();

const dracoLoader = new THREE.DRACOLoader();

dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");

loader.setDRACOLoader(dracoLoader);

/* ==========================================================
     DOM
  ========================================================== */

const godName = document.getElementById("godName");

const godTitle = document.getElementById("godTitle");

const godDescription = document.getElementById("godDescription");

const details = document.getElementById("details");

const godSelector = document.getElementById("godSelector");

const musicButton = document.getElementById("musicButton");

const languageButton = document.getElementById("languageButton");

const languageIcon = document.getElementById("languageIcon");

const transition = document.getElementById("transition");

const modelLoader = document.getElementById("modelLoader");

/* VIRTUAL DIYA */

const virtualDiyaButton = document.getElementById("virtualDiyaButton");

const virtualDiyaText = document.getElementById("virtualDiyaText");

const storySpeechButton = document.getElementById("storySpeechButton");

const storySpeechText = document.getElementById("storySpeechText");

/* FLOWER OFFERING */

const flowerOfferingButton = document.getElementById("flowerOfferingButton");

const flowerOfferingText = document.getElementById("flowerOfferingText");

/* SETTINGS */

const settingsButton = document.getElementById("settingsButton");

const settingsPopup = document.getElementById("settingsPopup");

const settingsClose = document.getElementById("settingsClose");

const autoRotateToggle = document.getElementById("autoRotateToggle");

const fullscreenToggle = document.getElementById("fullscreenToggle");

const arSettingRow = document.getElementById("arSettingRow");

const arPlacementToggle = document.getElementById("arPlacementToggle");

const arPlacementName = document.getElementById("arPlacementName");

const arPlacementDescription = document.getElementById(
  "arPlacementDescription",
);

const resetViewButton = document.getElementById("resetViewButton");

const settingsTitle = document.getElementById("settingsTitle");

const autoRotateName = document.getElementById("autoRotateName");

const autoRotateDescription = document.getElementById("autoRotateDescription");

const fullscreenName = document.getElementById("fullscreenName");

const fullscreenDescription = document.getElementById("fullscreenDescription");

const resetViewName = document.getElementById("resetViewName");

const resetViewDescription = document.getElementById("resetViewDescription");

/* ==========================================================
     PRAYER SOUND BUTTONS
  ========================================================== */

function playPrayerSound(soundName, button) {
  const sound = prayerSounds[soundName];
  if (!sound) return;

  sound.currentTime = 0;
  sound
    .play()
    .then(() => {
      button.classList.remove("ringing");
      void button.offsetWidth;
      button.classList.add("ringing");
    })
    .catch((error) => {
      console.log("Prayer sound could not play:", error);
    });
}

templeBellButton.addEventListener("click", () => {
  playPrayerSound("bell", templeBellButton);
});

fastBellButton.addEventListener("click", () => {
  playPrayerSound("fastBell", fastBellButton);
});

shankhButton.addEventListener("click", () => {
  playPrayerSound("shankh", shankhButton);
});

[templeBellButton, fastBellButton, shankhButton].forEach((button) => {
  button.addEventListener("animationend", () => {
    button.classList.remove("ringing");
  });
});

/* ==========================================================
     THREE.JS INITIALIZATION
  ========================================================== */

function initThree() {
  scene = new THREE.Scene();

  /* CAMERA */

  camera = new THREE.PerspectiveCamera(
    42,
    window.innerWidth / window.innerHeight,
    0.1,
    100,
  );

  camera.position.set(0.8, 1.5, 5.5);

  /* RENDERER */

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  renderer.setSize(window.innerWidth, window.innerHeight);

  renderer.xr.enabled = true;

  renderer.xr.setReferenceSpaceType("local");

  renderer.outputEncoding = THREE.sRGBEncoding;

  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  renderer.toneMappingExposure = 1.05;

  /* SHADOWS */

  renderer.shadowMap.enabled = true;

  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  document.getElementById("scene").appendChild(renderer.domElement);

  /* LIGHTING */

  const ambient = new THREE.AmbientLight(0xffffff, 0.4);

  scene.add(ambient);

  const keyLight = new THREE.DirectionalLight(0xffdfaa, 1);

  keyLight.position.set(4, 6, 5);

  keyLight.castShadow = true;

  keyLight.shadow.mapSize.width = 2048;

  keyLight.shadow.mapSize.height = 2048;

  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xdbe6ff, 0.6);

  fillLight.position.set(-5, 3, 4);

  scene.add(fillLight);

  const rimLight = new THREE.PointLight(0xd49a3a, 1.5, 12);

  rimLight.position.set(2, 3, -3);

  scene.add(rimLight);

  /* PARTICLES */

  createParticles();

  /* FLOWER OFFERING */

  flowerOfferingGroup = new THREE.Group();

  flowerOfferingGroup.name = "FlowerOfferingGroup";

  scene.add(flowerOfferingGroup);

  /* CONTROLS */

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  controls.enableDamping = true;

  controls.dampingFactor = 0.06;

  controls.enablePan = false;

  controls.minDistance = 3;

  controls.maxDistance = 7;

  controls.target.set(0.8, 1.6, 0);

  arReticle = new THREE.Mesh(
    new THREE.RingGeometry(0.12, 0.16, 32),
    new THREE.MeshBasicMaterial({ color: 0xffd27a, side: THREE.DoubleSide }),
  );

  arReticle.rotation.x = -Math.PI / 2;
  arReticle.matrixAutoUpdate = false;
  arReticle.visible = false;
  scene.add(arReticle);

  const arController = renderer.xr.getController(0);
  arController.addEventListener("select", placeARModel);
  scene.add(arController);

  /* DEFAULT MODEL */

  loadGod(currentGodIndex);

  renderer.setAnimationLoop(animate);
}

/* ==========================================================
     PARTICLES
  ========================================================== */

function createParticles() {
  const particleCount = 250;

  const geometry = new THREE.BufferGeometry();

  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = 1 + (Math.random() - 0.5) * 7;

    positions[i * 3 + 1] = Math.random() * 5;

    positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0xc99b52,

    size: 0.018,

    transparent: true,

    opacity: 0.22,

    depthWrite: false,
  });

  particles = new THREE.Points(geometry, material);

  scene.add(particles);
}

/* ==========================================================
     LOAD GOD
  ========================================================== */

function loadGod(index) {
  const god = gods[index];

  const requestId = ++modelLoadRequestId;

  currentGodIndex = index;

  stopStorySpeech();

  updateUI(god);

  updateCards();

  showModelLoader();

  transition.classList.add("show");

  setTimeout(() => {
    transition.classList.remove("show");
  }, 250);

  /* HIDE ACTIVE DIYA */

  if (virtualDiya) {
    virtualDiya.visible = false;
  }

  /* CLEAR ACTIVE FLOWERS */

  clearFlowerOfferings();

  /* REMOVE OLD MODEL */

  if (currentModel) {
    scene.remove(currentModel);

    currentModel.traverse((object) => {
      if (object.geometry) {
        object.geometry.dispose();
      }

      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach((material) => {
            material.dispose();
          });
        } else {
          object.material.dispose();
        }
      }
    });

    currentModel = null;
  }

  /* LOAD MODEL */

  loader.load(
    god.model,

    function (gltf) {
      if (requestId !== modelLoadRequestId) {
        gltf.scene.traverse((object) => {
          if (object.geometry) {
            object.geometry.dispose();
          }

          if (object.material) {
            const materials = Array.isArray(object.material)
              ? object.material
              : [object.material];

            materials.forEach((material) => material.dispose());
          }
        });

        return;
      }

      currentModel = gltf.scene;

      /* MODEL BOUNDS */

      const box = new THREE.Box3().setFromObject(currentModel);

      const size = box.getSize(new THREE.Vector3());

      const center = box.getCenter(new THREE.Vector3());

      /* SIZE */

      const maxSize = Math.max(size.x, size.y, size.z);

      const targetHeight = 3.2;

      const scale = targetHeight / maxSize;

      currentModel.userData.baseScale = scale;

      /* MODEL POSITION */

      const modelPosition = god.modelPosition || {
        x: 2.05,
        y: 1.65,
        z: 0,
      };

      currentModel.userData.basePosition = {
        x: modelPosition.x,
        y: modelPosition.y,
        z: modelPosition.z - center.z,
      };

      currentModel.rotation.y = getModelRotationY(god);

      /* ADD MODEL */

      scene.add(currentModel);

      applyResponsiveModelPosition();

      /* MATERIALS */

      currentModel.traverse((object) => {
        if (object.isMesh) {
          object.castShadow = true;

          object.receiveShadow = true;

          if (object.material) {
            const materials = Array.isArray(object.material)
              ? object.material
              : [object.material];

            materials.forEach((material) => {
              if (material.roughness !== undefined) {
                material.roughness = Math.max(material.roughness, 0.4);
              }

              if (material.metalness !== undefined) {
                material.metalness = Math.min(material.metalness, 0.25);
              }

              material.needsUpdate = true;
            });
          }
        }
      });

      /* CAMERA */

      controls.target.set(0.8, 1.55, 0);

      camera.position.set(0.8, 1.5, 5.5);

      controls.update();

      hideModelLoader();
    },

    undefined,

    function (error) {
      console.error("Model loading error:", error);
      hideModelLoader();
    },
  );

  /* AUDIO */

  loadMusic(god.music);
}

function showModelLoader() {
  modelLoader.classList.add("show");
  modelLoader.setAttribute("aria-hidden", "false");
}

function hideModelLoader() {
  modelLoader.classList.remove("show");
  modelLoader.setAttribute("aria-hidden", "true");
}

/* ==========================================================
     UPDATE UI
  ========================================================== */

function updateStorySpeechButton() {
  const isHindi = currentLanguage === "hi";
  const isSpeakingLabel = isHindi ? "कहानी रोकें" : "Stop story";
  const listenLabel = isHindi ? "कहानी सुनें" : "Story";
  const label = isStorySpeaking ? isSpeakingLabel : listenLabel;

  storySpeechText.textContent = label;
  storySpeechButton.setAttribute("aria-label", label);
  storySpeechButton.setAttribute("title", label);
  storySpeechButton.classList.toggle("active", isStorySpeaking);
}

function stopStorySpeech() {
  narrationRequestId += 1;

  if (narrationAudio) {
    narrationAudio.pause();
    narrationAudio.currentTime = 0;
    narrationAudio = null;
  }

  isStorySpeaking = false;

  if (storySpeechButton) {
    updateStorySpeechButton();
  }
}

function speakCurrentStory() {
  if (isStorySpeaking) {
    stopStorySpeech();
    return;
  }

  const god = gods[currentGodIndex];
  const isHindi = currentLanguage === "hi";
  const languageFile = isHindi ? "hi" : "en";
  const source = `assets/narrations/${god.narrationFolderName}/${languageFile}.mp3`;
  const requestId = ++narrationRequestId;
  const narration = new Audio(source);

  narration.preload = "auto";
  narration.volume = 0.85;
  narrationAudio = narration;

  narration.onplay = () => {
    if (requestId !== narrationRequestId) return;

    isStorySpeaking = true;
    updateStorySpeechButton();
  };

  narration.onended = () => {
    if (requestId !== narrationRequestId) return;

    isStorySpeaking = false;
    narrationAudio = null;
    updateStorySpeechButton();
  };

  narration.onerror = () => {
    if (requestId !== narrationRequestId) return;

    narrationAudio = null;
    isStorySpeaking = false;
    storySpeechButton.setAttribute(
      "title",
      isHindi
        ? "इस देवता की कथा का ऑडियो उपलब्ध नहीं है"
        : "Narration audio is unavailable for this deity",
    );
    updateStorySpeechButton();
  };

  narration.play().catch(() => {
    if (requestId === narrationRequestId) {
      narrationAudio = null;
      isStorySpeaking = false;
      storySpeechButton.setAttribute(
        "title",
        isHindi
          ? "इस देवता की कथा का ऑडियो उपलब्ध नहीं है"
          : "Narration audio is unavailable for this deity",
      );
      updateStorySpeechButton();
    }
  });
}

function updateUI(god) {
  const isHindi = currentLanguage === "hi";

  godName.textContent = isHindi ? god.nameHi : god.name;
  godTitle.textContent = isHindi ? god.titleHi : god.title;
  godDescription.textContent = isHindi ? god.descriptionHi : god.description;

  godName.classList.toggle("hindi-display", isHindi);
  godTitle.classList.toggle("hindi-display", isHindi);
  godDescription.classList.toggle("hindi-display", isHindi);

  godName.classList.toggle("english-display", !isHindi);
  godTitle.classList.toggle("english-display", !isHindi);
  godDescription.classList.toggle("english-display", !isHindi);

  updateStorySpeechButton();

  details.innerHTML = "";

  const godDetails = isHindi ? god.detailsHi : god.details;

  Object.entries(godDetails).forEach(([label, value]) => {
    const row = document.createElement("div");

    row.className = "detail-row";

    const labelElement = document.createElement("div");

    labelElement.className = "detail-label";
    if (isHindi) labelElement.classList.add("hindi-display");
    else labelElement.classList.add("english-display");
    labelElement.textContent = label;

    const valueElement = document.createElement("div");

    valueElement.className = "detail-value";
    if (isHindi) valueElement.classList.add("hindi-display");
    else valueElement.classList.add("english-display");
    valueElement.textContent = value;

    row.appendChild(labelElement);
    row.appendChild(valueElement);

    details.appendChild(row);
  });
}

/* ==========================================================
     CREATE CARDS
  ========================================================== */

function createCards() {
  godSelector.innerHTML = "";

  gods.forEach((god, index) => {
    const card = document.createElement("div");

    card.className = "god-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");

    if (index === currentGodIndex) {
      card.classList.add("active");
    }

    const cardName = currentLanguage === "hi" ? god.nameHi : god.name;

    card.setAttribute("aria-label", cardName);

    const image = document.createElement("img");

    image.src = god.image;

    image.alt = cardName;

    image.loading = "lazy";

    image.onerror = function () {
      this.style.display = "none";
    };

    const name = document.createElement("div");

    name.className = "card-name";

    name.textContent = cardName;

    card.appendChild(image);
    card.appendChild(name);

    card.addEventListener("click", () => {
      if (index !== currentGodIndex) {
        loadGod(index);
      }
    });

    card.addEventListener("keydown", (event) => {
      const cards = Array.from(document.querySelectorAll(".god-card"));
      const currentCardIndex = cards.indexOf(card);

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        card.click();
        return;
      }

      let nextCardIndex = currentCardIndex;

      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        nextCardIndex = (currentCardIndex + 1) % cards.length;
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        nextCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
      } else if (event.key === "Home") {
        nextCardIndex = 0;
      } else if (event.key === "End") {
        nextCardIndex = cards.length - 1;
      } else {
        return;
      }

      event.preventDefault();
      cards[nextCardIndex].focus();
    });

    godSelector.appendChild(card);
  });
}

/* ==========================================================
     UPDATE CARDS
  ========================================================== */

function updateCards() {
  const cards = document.querySelectorAll(".god-card");

  cards.forEach((card, index) => {
    card.classList.toggle("active", index === currentGodIndex);

    const god = gods[index];

    const name = currentLanguage === "hi" ? god.nameHi : god.name;

    const nameElement = card.querySelector(".card-name");

    const image = card.querySelector("img");

    if (nameElement) {
      nameElement.textContent = name;
    }

    if (image) {
      image.alt = name;
    }

    card.setAttribute("aria-label", name);
  });
}

/* ==========================================================
     MUSIC
  ========================================================== */

function loadMusic(src) {
  if (audio) {
    audio.pause();

    audio.currentTime = 0;
  }

  audio = new Audio(src);

  audio.loop = true;

  audio.volume = 0.35;

  if (isMusicPlaying) {
    audio.play().catch(() => {});
  }
}

/* ==========================================================
     MUSIC BUTTON
  ========================================================== */

musicButton.addEventListener("click", function () {
  if (!audio) return;

  if (audio.paused) {
    audio
      .play()
      .then(() => {
        isMusicPlaying = true;

        musicButton.classList.add("active");

        musicButton.innerHTML =
          '<img src="./assets/icons/pause.webp" alt="Pause chanting" class="top-icon" />';
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    audio.pause();

    isMusicPlaying = false;

    musicButton.classList.remove("active");

    musicButton.innerHTML =
      '<img src="./assets/icons/play.webp" alt="Play chanting" class="top-icon" />';
  }
});

/* ==========================================================
     LANGUAGE BUTTON
  ========================================================== */

languageButton.addEventListener("click", function () {
  stopStorySpeech();

  clearTimeout(languageTransitionTimer);

  const languageElements = [godTitle, godName, godDescription, details];

  languageElements.forEach((element) => {
    element.classList.add("language-fade");
  });

  currentLanguage = currentLanguage === "en" ? "hi" : "en";

  languageIcon.src =
    currentLanguage === "en"
      ? "./assets/icons/en.webp"
      : "./assets/icons/hi.webp";
  languageButton.setAttribute(
    "aria-label",
    currentLanguage === "en"
      ? "English language selected"
      : "Hindi language selected",
  );

  document.documentElement.lang = currentLanguage;

  const currentGod = gods[currentGodIndex];

  languageTransitionTimer = setTimeout(() => {
    updateUI(currentGod);
    updateCards();
    updateSettingsLanguage();

    requestAnimationFrame(() => {
      languageElements.forEach((element) => {
        element.classList.remove("language-fade");
      });
    });
  }, 180);
});

/* ==========================================================
     SETTINGS LANGUAGE
  ========================================================== */

function updateSettingsLanguage() {
  if (currentLanguage === "hi") {
    settingsTitle.textContent = "सेटिंग्स";

    autoRotateName.textContent = "ऑटो रोटेट";

    autoRotateDescription.textContent = "दिव्य मॉडल को स्वचालित रूप से घुमाएं";

    fullscreenName.textContent = "फुलस्क्रीन";

    fullscreenDescription.textContent = "दिव्य अनुभव को फुलस्क्रीन में देखें";

    arPlacementName.textContent = "एआर में रखें";

    arPlacementDescription.textContent = arSession
      ? "जगह खोजने के लिए डिवाइस घुमाएँ, फिर टैप करें"
      : "चयनित देवता को अपने स्थान में रखें";

    resetViewName.textContent = "व्यू रीसेट करें";

    resetViewDescription.textContent =
      "मॉडल और कैमरा को डिफ़ॉल्ट व्यू पर रीसेट करें";

    resetViewButton.setAttribute("aria-label", "व्यू रीसेट करें");

    resetViewButton.setAttribute("title", "व्यू रीसेट करें");

    settingsClose.setAttribute("aria-label", "सेटिंग्स बंद करें");
    settingsClose.setAttribute("title", "सेटिंग्स बंद करें");

    languageButton.setAttribute("title", "भाषा बदलें");
    musicButton.setAttribute("aria-label", "भजन चलाएं या रोकें");
    musicButton.setAttribute("title", "भजन");
    settingsButton.setAttribute("aria-label", "सेटिंग्स खोलें");
    settingsButton.setAttribute("title", "सेटिंग्स");

    /* PRAYER SOUNDS */

    templeBellButton.setAttribute("aria-label", "मंदिर की घंटी");
    templeBellButton.setAttribute("title", "मंदिर की घंटी");
    templeBellText.textContent = "मंदिर की घंटी";
    fastBellButton.setAttribute("aria-label", "गरुड़ घंटी");
    fastBellButton.setAttribute("title", "गरुड़ घंटी");
    fastBellText.textContent = "तेज़ मंदिर की घंटी";
    shankhButton.setAttribute("aria-label", "शंख");
    shankhButton.setAttribute("title", "शंख");
    shankhText.textContent = "शंख";

    /* VIRTUAL DIYA */

    virtualDiyaText.textContent = "दीपक अर्पित करें";

    virtualDiyaButton.setAttribute("aria-label", "दीपक अर्पित करें");

    virtualDiyaButton.setAttribute("title", "दीपक अर्पित करें");

    flowerOfferingText.textContent = "फूल अर्पित करें";

    flowerOfferingButton.setAttribute("aria-label", "फूल अर्पित करें");

    flowerOfferingButton.setAttribute("title", "फूल अर्पित करें");
  } else {
    settingsTitle.textContent = "Settings";

    autoRotateName.textContent = "Auto Rotate";

    autoRotateDescription.textContent = "Rotate the divine model automatically";

    fullscreenName.textContent = "Fullscreen";

    fullscreenDescription.textContent =
      "View the divine experience in fullscreen";

    arPlacementName.textContent = "AR Placement";

    arPlacementDescription.textContent = arSession
      ? "Move to scan a surface, then tap to place"
      : "Place the selected deity in your space";

    resetViewName.textContent = "Reset View";

    resetViewDescription.textContent =
      "Reset the model and camera to the default view";

    resetViewButton.setAttribute("aria-label", "Reset View");

    resetViewButton.setAttribute("title", "Reset View");

    settingsClose.setAttribute("aria-label", "Close settings");
    settingsClose.setAttribute("title", "Close settings");

    languageButton.setAttribute("aria-label", "Switch language");
    languageButton.setAttribute("title", "Switch Language");
    musicButton.setAttribute("aria-label", "Toggle Chanting");
    musicButton.setAttribute("title", "Chanting");
    settingsButton.setAttribute("aria-label", "Open settings");
    settingsButton.setAttribute("title", "Settings");

    /* PRAYER SOUNDS */

    templeBellButton.setAttribute("aria-label", "Temple Bell");
    templeBellButton.setAttribute("title", "Temple Bell");
    templeBellText.textContent = "Temple Bell";
    fastBellButton.setAttribute("aria-label", "Pooja Bell");
    fastBellButton.setAttribute("title", "Pooja Bell");
    fastBellText.textContent = "Pooja Bell";
    shankhButton.setAttribute("aria-label", "Shankh Sound");
    shankhButton.setAttribute("title", "Shankh");
    shankhText.textContent = "Shankh";

    /* VIRTUAL DIYA */

    virtualDiyaText.textContent = "Offer Virtual Diya";

    virtualDiyaButton.setAttribute("aria-label", "Offer Diya");

    virtualDiyaButton.setAttribute("title", "Offer Diya");

    flowerOfferingText.textContent = "Offer Flowers";

    flowerOfferingButton.setAttribute("aria-label", "Offer Flowers");

    flowerOfferingButton.setAttribute("title", "Offer Flowers");
  }
}

/* ==========================================================
     SETTINGS BUTTON
  ========================================================== */

settingsButton.addEventListener("click", function (event) {
  event.stopPropagation();

  settingsPopup.classList.toggle("show");
});

/* ==========================================================
     CLOSE SETTINGS
  ========================================================== */

settingsClose.addEventListener("click", function () {
  settingsPopup.classList.remove("show");
});

/* ==========================================================
     AUTO ROTATE TOGGLE
  ========================================================== */

autoRotateToggle.addEventListener("change", function () {
  autoRotate = this.checked;
});

/* ==========================================================
     FULLSCREEN TOGGLE
  ========================================================== */

fullscreenToggle.addEventListener("change", function () {
  if (this.checked) {
    enterFullscreen();
  } else {
    exitFullscreen();
  }
});

async function configureARPlacement() {
  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
  const isMobileOrTablet =
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  if (!isTouchDevice || !isMobileOrTablet || !navigator.xr) {
    return;
  }

  arSettingRow.hidden = false;
  arPlacementDescription.textContent =
    currentLanguage === "hi"
      ? "एआर सुविधा जाँची जा रही है"
      : "Checking AR support";

  try {
    const isSupported = await navigator.xr.isSessionSupported("immersive-ar");
    if (!isSupported) {
      arPlacementDescription.textContent =
        currentLanguage === "hi"
          ? "इस डिवाइस या ब्राउज़र में एआर उपलब्ध नहीं है"
          : "AR is unavailable in this browser or on this device";
      return;
    }

    arPlacementToggle.disabled = false;
    arPlacementDescription.textContent =
      currentLanguage === "hi"
        ? "चयनित देवता को अपने स्थान में रखें"
        : "Place the selected deity in your space";
  } catch (error) {
    arPlacementDescription.textContent =
      currentLanguage === "hi"
        ? "इस डिवाइस या ब्राउज़र में एआर उपलब्ध नहीं है"
        : "AR is unavailable in this browser or on this device";
  }
}

arPlacementToggle.addEventListener("change", function () {
  if (this.checked) {
    startARSession();
  } else if (arSession) {
    arSession.end();
  }
});

async function startARSession() {
  if (!currentModel || !navigator.xr || arSession) {
    arPlacementToggle.checked = false;
    return;
  }

  arPlacementToggle.disabled = true;

  try {
    const session = await navigator.xr.requestSession("immersive-ar", {
      requiredFeatures: ["hit-test"],
    });

    arSession = session;
    session.addEventListener("end", finishARSession, { once: true });
    await renderer.xr.setSession(session);

    arReferenceSpace = await session.requestReferenceSpace("viewer");
    arHitTestSource = await session.requestHitTestSource({
      space: arReferenceSpace,
    });

    arModelSnapshot = {
      position: currentModel.position.clone(),
      rotation: currentModel.rotation.clone(),
      scale: currentModel.scale.clone(),
    };

    arPlacementGroup = new THREE.Group();
    arPlacementGroup.visible = false;
    scene.add(arPlacementGroup);
    arPlacementGroup.add(currentModel);
    currentModel.position.set(0, 0, 0);
    currentModel.rotation.set(0, getModelRotationY(gods[currentGodIndex]), 0);
    currentModel.scale.setScalar(currentModel.userData.baseScale * 0.45);

    if (particles) particles.visible = false;
    if (controls) controls.enabled = false;

    arModelPlaced = false;
    arReticle.visible = true;
    document.body.classList.add("ar-active");
    autoRotate = false;
    autoRotateToggle.checked = false;
    arPlacementDescription.textContent =
      currentLanguage === "hi"
        ? "जगह खोजने के लिए डिवाइस घुमाएँ, फिर टैप करें"
        : "Move to scan a surface, then tap to place";
  } catch (error) {
    console.error("AR session could not start:", error);
    if (arSession) {
      arSession.end();
    } else {
      arPlacementToggle.checked = false;
      arPlacementToggle.disabled = false;
      arPlacementDescription.textContent =
        currentLanguage === "hi"
          ? "एआर शुरू नहीं हो सका। सुरक्षित HTTPS कनेक्शन आज़माएँ।"
          : "Could not start AR. Try again over a secure HTTPS connection.";
    }
  }
}

function placeARModel() {
  if (!arReticle?.visible || !arPlacementGroup) {
    return;
  }

  arPlacementGroup.position.setFromMatrixPosition(arReticle.matrix);
  arPlacementGroup.quaternion.setFromRotationMatrix(arReticle.matrix);
  arPlacementGroup.visible = true;
  arReticle.visible = false;
  arModelPlaced = true;
  arPlacementDescription.textContent =
    currentLanguage === "hi"
      ? "देवता आपके स्थान में रखे गए हैं"
      : "The deity is placed in your space";
}

function finishARSession() {
  if (arHitTestSource) {
    arHitTestSource.cancel();
    arHitTestSource = null;
  }

  if (arPlacementGroup) {
    arPlacementGroup.remove(currentModel);
    scene.remove(arPlacementGroup);
    arPlacementGroup = null;
  }

  if (currentModel && arModelSnapshot) {
    currentModel.position.copy(arModelSnapshot.position);
    currentModel.rotation.copy(arModelSnapshot.rotation);
    currentModel.scale.copy(arModelSnapshot.scale);
    scene.add(currentModel);
  }

  arModelSnapshot = null;
  arReferenceSpace = null;
  arSession = null;
  arModelPlaced = false;

  if (arReticle) arReticle.visible = false;
  if (particles) particles.visible = true;
  if (controls) controls.enabled = true;

  document.body.classList.remove("ar-active");
  arPlacementToggle.checked = false;
  arPlacementToggle.disabled = false;
  updateSettingsLanguage();
  applyResponsiveModelPosition();
}

/* ==========================================================
     ENTER FULLSCREEN
  ========================================================== */

function enterFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen().catch(() => {
      fullscreenToggle.checked = false;
    });
  }
}

/* ==========================================================
     EXIT FULLSCREEN
  ========================================================== */

function exitFullscreen() {
  if (document.fullscreenElement && document.exitFullscreen) {
    document.exitFullscreen().catch(() => {});
  }
}

/* ==========================================================
     FULLSCREEN STATE
  ========================================================== */

document.addEventListener("fullscreenchange", function () {
  fullscreenToggle.checked = !!document.fullscreenElement;
});

/* ==========================================================
     RESET VIEW
  ========================================================== */

resetViewButton.addEventListener("click", function () {
  resetView();
});

function resetView() {
  if (!camera || !controls) {
    return;
  }

  /* RESET CAMERA */

  camera.position.set(0.8, 1.5, 5.5);

  /* RESET ORBIT TARGET */

  controls.target.set(0.8, 1.55, 0);

  /* RESET MODEL ROTATION */

  if (currentModel) {
    currentModel.rotation.set(0, getModelRotationY(gods[currentGodIndex]), 0);
  }

  clearFlowerOfferings();

  /* UPDATE CONTROLS */

  controls.update();
}

/* ==========================================================
     CLOSE SETTINGS OUTSIDE CLICK
  ========================================================== */

document.addEventListener("click", function (event) {
  if (
    !settingsPopup.contains(event.target) &&
    !settingsButton.contains(event.target)
  ) {
    settingsPopup.classList.remove("show");
  }
});

/* ==========================================================
     ESCAPE KEY
  ========================================================== */

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    settingsPopup.classList.remove("show");
  }
});

/* ==========================================================
     FLOWER OFFERING
  ========================================================== */

function createFlower() {
  const flower = new THREE.Group();

  const petalGeometry = new THREE.SphereGeometry(0.055, 10, 8);

  const petalColors = [0xff8fb1, 0xffa6c1, 0xffb3c7, 0xf48fb1];

  const petalMaterial = new THREE.MeshStandardMaterial({
    color: petalColors[Math.floor(Math.random() * petalColors.length)],

    roughness: 0.78,

    metalness: 0.0,

    side: THREE.DoubleSide,
  });

  for (let i = 0; i < 5; i++) {
    const petal = new THREE.Mesh(petalGeometry, petalMaterial);

    const angle = (i / 5) * Math.PI * 2;

    petal.position.set(
      Math.cos(angle) * 0.075,

      Math.sin(angle) * 0.075,

      0,
    );

    petal.scale.set(1.0, 0.68, 0.35);

    petal.rotation.z = angle;

    petal.castShadow = true;

    flower.add(petal);
  }

  const center = new THREE.Mesh(
    new THREE.SphereGeometry(0.042, 12, 8),

    new THREE.MeshStandardMaterial({
      color: 0xf4b942,

      roughness: 0.65,

      metalness: 0.0,
    }),
  );

  center.position.z = 0.02;

  center.scale.set(1, 1, 0.55);

  flower.add(center);

  const s = 0.72 + Math.random() * 0.38;

  flower.scale.set(s, s, s);

  return flower;
}

function clearFlowerOfferings() {
  if (flowerOfferingAnimation) {
    cancelAnimationFrame(flowerOfferingAnimation);

    flowerOfferingAnimation = null;
  }

  flowerOfferings.forEach((item) => {
    if (item.group && flowerOfferingGroup) {
      flowerOfferingGroup.remove(item.group);
    }
  });

  flowerOfferings.length = 0;

  if (flowerOfferingButton) {
    flowerOfferingButton.classList.remove("active");

    flowerOfferingButton.disabled = false;
  }
}

function createConfettiFlower() {
  const flower = new THREE.Group();

  const colors = [0xffc107, 0xff9800, 0xff69b4, 0xff4d4d, 0xffffff];

  const color = colors[Math.floor(Math.random() * colors.length)];

  const petalMaterial = new THREE.MeshStandardMaterial({
    color,

    roughness: 0.75,

    metalness: 0.05,

    side: THREE.DoubleSide,
  });

  const centerMaterial = new THREE.MeshStandardMaterial({
    color: 0xffd54f,

    roughness: 0.6,
  });

  const petalGeometry = new THREE.SphereGeometry(0.055, 6, 4);

  for (let i = 0; i < 5; i++) {
    const angle = (i / 5) * Math.PI * 2;

    const petal = new THREE.Mesh(petalGeometry, petalMaterial);

    petal.scale.set(1.0, 0.55, 0.7);

    petal.position.set(
      Math.cos(angle) * 0.055,

      Math.sin(angle) * 0.055,

      0,
    );

    petal.rotation.z = angle;

    flower.add(petal);
  }

  const center = new THREE.Mesh(
    new THREE.SphereGeometry(0.035, 6, 4),

    centerMaterial,
  );

  center.position.z = 0.02;

  flower.add(center);

  const scale = 0.65 + Math.random() * 0.75;

  flower.scale.set(scale, scale, scale);

  return flower;
}

function startFlowerOffering() {
  if (!scene || !currentModel || !flowerOfferingGroup) {
    return;
  }

  clearFlowerOfferings();

  const modelBox = new THREE.Box3().setFromObject(currentModel);

  const modelCenter = modelBox.getCenter(new THREE.Vector3());

  const modelSize = modelBox.getSize(new THREE.Vector3());

  const startY = modelCenter.y + modelSize.y * 0.75 + 1.0;

  const fallBottom = modelCenter.y - modelSize.y * 0.75;

  const width = Math.max(modelSize.x * 1.6, 2.8);

  const frontZ = modelCenter.z + 0.8;

  const FLOWER_COUNT = 100;

  const startTime = performance.now();

  flowerOfferingButton.classList.add("active");

  flowerOfferingButton.disabled = true;

  for (let i = 0; i < FLOWER_COUNT; i++) {
    const flower = createConfettiFlower();

    flower.position.set(
      modelCenter.x + (Math.random() - 0.5) * width,

      startY + Math.random() * 1.4,

      frontZ + (Math.random() - 0.5) * 1.2,
    );

    flower.userData = {
      velocityX: (Math.random() - 0.5) * 0.55,

      velocityY: -(0.25 + Math.random() * 0.55),

      velocityZ: (Math.random() - 0.5) * 0.25,

      gravity: 0.32 + Math.random() * 0.22,

      rotationX: (Math.random() - 0.5) * 5,

      rotationY: (Math.random() - 0.5) * 6,

      rotationZ: (Math.random() - 0.5) * 5,

      sway: 0.18 + Math.random() * 0.35,

      swaySpeed: 1.5 + Math.random() * 2.5,

      swayOffset: Math.random() * Math.PI * 2,

      delay: Math.random() * 0.65,

      life: 0,

      maxLife: 4.0 + Math.random() * 2.0,

      createdAt: startTime,
    };

    flowerOfferingGroup.add(flower);

    flowerOfferings.push({
      group: flower,
      createdAt: startTime,
    });
  }

  function animateFlowers(now) {
    const delta = Math.min(
      (now - (animateFlowers.lastTime || now)) / 1000,
      0.05,
    );

    animateFlowers.lastTime = now;

    for (let i = flowerOfferings.length - 1; i >= 0; i--) {
      const item = flowerOfferings[i];

      const flower = item.group;

      const data = flower.userData;

      data.life += delta;

      if (data.life < data.delay) {
        continue;
      }

      const t = data.life - data.delay;

      data.velocityY -= data.gravity * delta;

      flower.position.x += data.velocityX * delta;

      flower.position.y += data.velocityY * delta;

      flower.position.z += data.velocityZ * delta;

      flower.position.x +=
        Math.sin(t * data.swaySpeed + data.swayOffset) * data.sway * delta;

      flower.position.z +=
        Math.cos(t * data.swaySpeed * 0.7 + data.swayOffset) * 0.08 * delta;

      flower.rotation.x += data.rotationX * delta;

      flower.rotation.y += data.rotationY * delta;

      flower.rotation.z += data.rotationZ * delta;

      const fadeStart = data.maxLife * 0.72;

      if (t > fadeStart) {
        const fade = 1 - (t - fadeStart) / (data.maxLife - fadeStart);

        flower.traverse((child) => {
          if (child.isMesh) {
            child.material.transparent = true;

            child.material.opacity = Math.max(0, fade);
          }
        });
      }

      if (t > data.maxLife || flower.position.y < fallBottom) {
        if (flower.parent) {
          flower.parent.remove(flower);
        }

        flowerOfferings.splice(i, 1);
      }
    }

    if (flowerOfferings.length > 0) {
      flowerOfferingAnimation = requestAnimationFrame(animateFlowers);
    } else {
      flowerOfferingAnimation = null;

      flowerOfferingButton.classList.remove("active");

      flowerOfferingButton.disabled = false;
    }
  }

  flowerOfferingAnimation = requestAnimationFrame(animateFlowers);
}

flowerOfferingButton.addEventListener("click", startFlowerOffering);

storySpeechButton.addEventListener("click", speakCurrentStory);

/* ==========================================================
     VIRTUAL DIYA
  ========================================================== */

function createVirtualDiya() {
  const diyaGroup = new THREE.Group();
  diyaGroup.name = "VirtualDiya";

  // =========================================================
  // 1. DIYA BODY — hollow terracotta bowl
  // =========================================================

  const diyaMaterial = new THREE.MeshStandardMaterial({
    color: 0x9a4f2b,
    roughness: 0.82,
    metalness: 0.0,
  });

  const profile = [
    // Bottom
    new THREE.Vector2(0.07, -0.14),
    new THREE.Vector2(0.16, -0.145),
    new THREE.Vector2(0.26, -0.13),
    new THREE.Vector2(0.36, -0.09),

    // Rounded outer bowl
    new THREE.Vector2(0.45, -0.02),
    new THREE.Vector2(0.52, 0.08),
    new THREE.Vector2(0.56, 0.18),
    new THREE.Vector2(0.57, 0.27),
    new THREE.Vector2(0.54, 0.34),
    new THREE.Vector2(0.49, 0.39),

    // Rounded rim
    new THREE.Vector2(0.44, 0.41),

    // Inner wall
    new THREE.Vector2(0.38, 0.38),
    new THREE.Vector2(0.4, 0.32),
    new THREE.Vector2(0.42, 0.25),
    new THREE.Vector2(0.41, 0.18),
    new THREE.Vector2(0.37, 0.11),
    new THREE.Vector2(0.31, 0.055),
    new THREE.Vector2(0.23, 0.025),
    new THREE.Vector2(0.14, 0.005),

    // Inner bottom
    new THREE.Vector2(0.07, -0.025),
    new THREE.Vector2(0.06, -0.075),
    new THREE.Vector2(0.07, -0.12),
  ];

  const diyaGeometry = new THREE.LatheGeometry(profile, 64);

  diyaGeometry.computeVertexNormals();

  const diyaBody = new THREE.Mesh(diyaGeometry, diyaMaterial);

  diyaBody.scale.set(1.22, 1.0, 0.88);

  diyaBody.castShadow = true;
  diyaBody.receiveShadow = true;

  diyaGroup.add(diyaBody);

  // =========================================================
  // 2. DARK INNER CAVITY
  // =========================================================

  const cavityGeometry = new THREE.SphereGeometry(0.365, 40, 24);

  const cavityMaterial = new THREE.MeshStandardMaterial({
    color: 0x3a1b0d,
    roughness: 0.95,
    metalness: 0.0,
  });

  const cavity = new THREE.Mesh(cavityGeometry, cavityMaterial);

  cavity.scale.set(1.02, 0.16, 0.72);

  cavity.position.set(0, 0.205, 0);

  cavity.receiveShadow = true;

  diyaGroup.add(cavity);

  // =========================================================
  // 3. OIL
  // =========================================================

  const oilGeometry = new THREE.SphereGeometry(0.285, 40, 24);

  const oilMaterial = new THREE.MeshStandardMaterial({
    color: 0x4b290c,
    roughness: 0.14,
    metalness: 0.02,
  });

  const oil = new THREE.Mesh(oilGeometry, oilMaterial);

  oil.scale.set(1.04, 0.055, 0.67);

  oil.position.set(0, 0.265, 0);

  oil.receiveShadow = true;

  diyaGroup.add(oil);

  // =========================================================
  // 4. WICK
  // =========================================================

  const wickGeometry = new THREE.CylinderGeometry(0.018, 0.03, 0.19, 14);

  const wickMaterial = new THREE.MeshStandardMaterial({
    color: 0x2a1b12,
    roughness: 1.0,
    metalness: 0.0,
  });

  const wick = new THREE.Mesh(wickGeometry, wickMaterial);

  wick.position.set(0.02, 0.355, 0);

  wick.rotation.z = -0.24;
  wick.rotation.x = 0.06;

  wick.castShadow = true;

  diyaGroup.add(wick);

  // =========================================================
  // 5. BASE
  // =========================================================

  const baseGeometry = new THREE.CylinderGeometry(0.2, 0.27, 0.055, 32);

  const base = new THREE.Mesh(baseGeometry, diyaMaterial);

  base.scale.set(1.25, 1.0, 0.88);

  base.position.y = -0.13;

  base.castShadow = true;
  base.receiveShadow = true;

  diyaGroup.add(base);

  // =========================================================
  // 6. REALISTIC OUTER FLAME
  // =========================================================

  const outerFlameMaterial = new THREE.MeshBasicMaterial({
    color: 0xff7a18,
    transparent: true,
    opacity: 0.92,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  diyaFlame = new THREE.Mesh(
    new THREE.SphereGeometry(0.13, 32, 32),
    outerFlameMaterial,
  );

  diyaFlame.scale.set(0.62, 1.9, 0.62);

  diyaFlame.position.set(0.02, 0.49, 0);

  diyaGroup.add(diyaFlame);

  // =========================================================
  // 7. YELLOW INNER FLAME
  // =========================================================

  const innerFlameMaterial = new THREE.MeshBasicMaterial({
    color: 0xffff9a,
    transparent: true,
    opacity: 0.98,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const innerFlame = new THREE.Mesh(
    new THREE.SphereGeometry(0.075, 28, 28),
    innerFlameMaterial,
  );

  innerFlame.scale.set(0.55, 1.55, 0.55);

  innerFlame.position.set(0.02, 0.48, -0.01);

  diyaGroup.add(innerFlame);

  // =========================================================
  // 8. WHITE-HOT FLAME CORE
  // =========================================================

  const coreMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffdf,
    transparent: true,
    opacity: 0.96,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const flameCore = new THREE.Mesh(
    new THREE.SphereGeometry(0.045, 24, 24),
    coreMaterial,
  );

  flameCore.scale.set(0.48, 1.3, 0.48);

  flameCore.position.set(0.025, 0.42, -0.015);

  diyaGroup.add(flameCore);

  // =========================================================
  // 9. SOFT FLAME GLOW
  // =========================================================

  const glowMaterial = new THREE.MeshBasicMaterial({
    color: 0xff941f,
    transparent: true,
    opacity: 0.09,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(0.3, 32, 32),
    glowMaterial,
  );

  glow.scale.set(0.9, 1.35, 0.9);

  glow.position.set(0.02, 0.45, 0);

  diyaGroup.add(glow);

  // =========================================================
  // 10. FLAME LIGHT
  // =========================================================

  diyaLight = new THREE.PointLight(0xffa52b, 2.8, 4.5);

  diyaLight.position.set(0.02, 0.48, 0);

  diyaGroup.add(diyaLight);

  // =========================================================
  // 11. INITIAL STATE
  // =========================================================

  diyaGroup.scale.set(0.01, 0.01, 0.01);

  diyaGroup.visible = false;

  scene.add(diyaGroup);

  return diyaGroup;
}

/* ==========================================================
     PERFORM DIYA AARTI
  ========================================================== */

function performVirtualDiya() {
  if (!scene || !currentModel) {
    return;
  }

  if (!virtualDiya) {
    virtualDiya = createVirtualDiya();
  }

  if (diyaAnimation) {
    cancelAnimationFrame(diyaAnimation);

    diyaAnimation = null;
  }

  virtualDiyaButton.classList.add("active");

  const modelBox = new THREE.Box3().setFromObject(currentModel);

  const modelCenter = modelBox.getCenter(new THREE.Vector3());

  const modelSize = modelBox.getSize(new THREE.Vector3());

  const radiusX = Math.max(modelSize.x * 0.55, 1.25);

  const radiusY = Math.max(modelSize.y * 0.3, 0.75);

  const frontZ = modelCenter.z + 1.15;

  const startAngle = -Math.PI / 2;

  virtualDiya.visible = true;

  virtualDiya.rotation.set(0, 0, 0);

  virtualDiya.scale.set(0.01, 0.01, 0.01);

  virtualDiya.position.set(
    modelCenter.x + Math.cos(startAngle) * radiusX,

    modelCenter.y + Math.sin(startAngle) * radiusY,

    frontZ,
  );

  if (diyaLight) {
    diyaLight.intensity = 2.5;
  }

  const duration = 2600;

  const startTime = performance.now();

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animateDiya(currentTime) {
    const elapsed = currentTime - startTime;

    const progress = Math.min(elapsed / duration, 1);

    const eased = easeInOutCubic(progress);

    const angle = startAngle - eased * Math.PI * 2;

    virtualDiya.position.x = modelCenter.x + Math.cos(angle) * radiusX;

    virtualDiya.position.y = modelCenter.y + Math.sin(angle) * radiusY;

    virtualDiya.position.z = frontZ;

    virtualDiya.rotation.y = eased * Math.PI * 2;

    virtualDiya.rotation.z = Math.sin(angle) * 0.12;

    if (progress < 0.12) {
      const scaleProgress = progress / 0.12;

      const scale = 0.01 + scaleProgress * 0.35;

      virtualDiya.scale.set(scale, scale, scale);
    } else {
      virtualDiya.scale.set(0.27, 0.27, 0.27);
    }

    // =========================================================
    // REALISTIC FLAME FLICKER
    // =========================================================

    if (diyaFlame) {
      const t = currentTime * 0.012;

      // Multiple frequencies make the movement less mechanical
      const flicker =
        Math.sin(t * 2.1) * 0.08 +
        Math.sin(t * 3.7) * 0.045 +
        Math.sin(t * 6.3) * 0.025;

      const height = 1.0 + flicker;
      const width = 1.0 - flicker * 0.35;

      // Stretch and compress flame
      diyaFlame.scale.set(0.62 * width, 1.9 * height, 0.62 * width);

      // Small natural movement
      diyaFlame.position.x = 0.02 + Math.sin(t * 2.8) * 0.018;

      diyaFlame.position.z = Math.cos(t * 2.2) * 0.008;

      // Flame bends slightly
      diyaFlame.rotation.z = Math.sin(t * 2.4) * 0.1;
    }

    // =========================================================
    // FLAME LIGHT FLICKER
    // =========================================================

    if (diyaLight) {
      const lightFlicker =
        Math.sin(currentTime * 0.018) * 0.25 +
        Math.sin(currentTime * 0.031) * 0.12 +
        Math.sin(currentTime * 0.047) * 0.06;

      diyaLight.intensity = 2.7 + lightFlicker;
    }

    if (progress < 1) {
      diyaAnimation = requestAnimationFrame(animateDiya);
    } else {
      diyaAnimation = null;

      setTimeout(() => {
        fadeOutDiya();
      }, 350);
    }
  }

  diyaAnimation = requestAnimationFrame(animateDiya);
}

/* ==========================================================
     FADE OUT DIYA
  ========================================================== */

function fadeOutDiya() {
  if (!virtualDiya) {
    return;
  }

  const startScale = virtualDiya.scale.x;

  const startTime = performance.now();

  const duration = 500;

  function fadeAnimation(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);

    const scale = startScale * (1 - progress);

    virtualDiya.scale.set(scale, scale, scale);

    if (diyaLight) {
      diyaLight.intensity = 2.5 * (1 - progress);
    }

    if (progress < 1) {
      requestAnimationFrame(fadeAnimation);
    } else {
      virtualDiya.visible = false;

      virtualDiyaButton.classList.remove("active");

      if (diyaLight) {
        diyaLight.intensity = 2.5;
      }
    }
  }

  requestAnimationFrame(fadeAnimation);
}

/* ==========================================================
     VIRTUAL DIYA BUTTON
  ========================================================== */

virtualDiyaButton.addEventListener("click", function () {
  performVirtualDiya();
});

/* ==========================================================
     RESIZE
  ========================================================== */

window.addEventListener("resize", function () {
  if (!camera || !renderer) {
    return;
  }

  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  applyResponsiveModelPosition();
});

/* ==========================================================
     ANIMATION
  ========================================================== */

function animate(timestamp, frame) {
  if (frame && arHitTestSource && arReferenceSpace && !arModelPlaced) {
    const hitTestResults = frame.getHitTestResults(arHitTestSource);
    const hit = hitTestResults[0];

    if (hit) {
      const pose = hit.getPose(renderer.xr.getReferenceSpace());
      if (pose) {
        arReticle.matrix.fromArray(pose.transform.matrix);
        arReticle.visible = true;
      }
    } else {
      arReticle.visible = false;
    }
  }

  /* AUTO ROTATE */

  if (currentModel && autoRotate) {
    currentModel.rotation.y += 0.0012;
  }

  /* PARTICLES */

  if (particles) {
    particles.rotation.y += 0.00015;
  }

  /* GLOW */

  if (divineGlow) {
    const pulse = 1 + Math.sin(Date.now() * 0.001) * 0.025;

    divineGlow.scale.set(pulse, pulse, pulse);
  }

  if (controls) {
    controls.update();
  }

  renderer.render(scene, camera);
}

/* ==========================================================
     START
  ========================================================== */

createCards();

updateSettingsLanguage();

initThree();

configureARPlacement();
