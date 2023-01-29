const gameState = {
  winner: null,
  players: {},
  time: 7,
  bigram: "ui",
};

const spawnPlayer = (id) => {
  gameState.players[id] = {
    lives: 3,
  };
};

const removePlayer = (id) => {
  if (gameState.players[id] != undefined) {
    delete gameState.players[id];
  }
};

let timerState = 0;

const serverTimer = () => {
  let remainingTime = 7;
  timerState = 0;
  const timerId = setInterval(() => {
    if (timerState === 1) {
      clearInterval(timerId);
      gameState.time = 7;
    }
    if (remainingTime === 0) {
      gameState.time = remainingTime;
      setBigram();
      console.log(gameState);
      remainingTime = 7;
    } else {
      gameState.time = remainingTime;
      remainingTime--;
      console.log(gameState);
    }
  }, 1000);
};

const stopTimer = () => {
  timerState = 1;
};

const setBigram = () => {
  let randomBigram = BigramList[Math.floor(Math.random() * BigramList.length)];
  gameState.bigram = randomBigram;
};

const BigramList = [
  "ui",
  "car",
  "nc",
  "hip",
  "sta",
  "ipp",
  "bl",
  "nat",
  "gu",
  "in",
  "an",
  "tat",
  "tiv",
  "ani",
  "mpo",
  "ol",
  "hs",
  "ati",
  "on",
  "rs",
  "ui",
  "oll",
  "pol",
  "en",
  "nes",
  "gat",
  "met",
  "ng",
  "cho",
  "co",
  "str",
  "ind",
  "eno",
  "rti",
  "bur",
  "ri",
  "it",
  "ch",
  "ize",
  "nci",
  "ine",
  "br",
  "nes",
  "ntr",
  "ri",
  "bal",
  "nal",
  "mou",
  "be",
  "car",
  "te",
  "cus",
  "hen",
  "ti",
  "se",
  "or",
  "lo",
  "arg",
  "tot",
  "et",
  "nl",
  "me",
  "it",
  "ent",
  "ut",
  "xt",
  "mp",
  "es",
  "lip",
  "ve",
  "mor",
  "te",
  "cl",
  "an",
  "ise",
  "cul",
  "pl",
  "riz",
  "ist",
  "can",
  "th",
  "ein",
  "es",
  "te",
  "imm",
  "du",
  "ams",
  "to",
  "hr",
  "og",
  "ie",
  "co",
  "ot",
  "st",
  "end",
  "ett",
  "hin",
  "des",
  "ity",
  "cl",
  "win",
  "oc",
  "es",
  "sa",
  "ol",
  "hu",
  "ll",
  "on",
  "tom",
  "cul",
  "fi",
  "pr",
  "els",
  "nr",
  "gi",
  "te",
  "vic",
  "ess",
  "ing",
  "alc",
  "on",
  "ck",
  "ho",
  "er",
  "es",
  "le",
  "mm",
  "esc",
  "eve",
  "it",
  "rta",
  "od",
  "re",
  "ki",
  "se",
  "de",
  "li",
  "io",
  "art",
  "mon",
  "uf",
  "eas",
  "yp",
  "ked",
  "eno",
  "ch",
  "ro",
  "lli",
  "itp",
  "ce",
  "ose",
  "am",
  "be",
  "ra",
  "is",
  "ers",
  "ar",
  "lly",
];

module.exports = {
  gameState,
  spawnPlayer,
  removePlayer,
  serverTimer,
  stopTimer,
};
