import React, { useState, useEffect, useRef } from "react";

const BigramList = [
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
  "ite",
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
  "bil",
  "eve",
  "mal",
  "un",
  "ap",
  "hi",
  "cr",
  "le",
  "ri",
  "ar",
  "le",
  "ing",
  "lis",
  "do",
  "lor",
  "sa",
  "ted",
  "sha",
  "ffi",
  "ma",
  "uct",
  "fu",
  "ac",
  "in",
  "rac",
  "ed",
  "fer",
  "ho",
  "be",
  "im",
  "ph",
  "er",
  "hur",
  "roo",
  "st",
  "ob",
  "rs",
  "ess",
  "io",
  "uss",
  "cti",
  "bin",
  "sk",
  "ta",
  "mis",
  "sh",
  "mi",
  "ng",
  "eu",
  "abl",
  "ent",
  "ind",
  "pi",
  "gl",
  "nn",
  "wi",
  "ps",
  "ose",
  "rat",
  "ven",
  "sel",
  "ro",
  "bo",
  "us",
  "ow",
  "ant",
  "ar",
  "nal",
  "rm",
  "ns",
  "ad",
  "as",
  "bl",
  "aci",
  "ica",
  "ple",
  "ch",
  "op",
  "ti",
  "ous",
  "de",
  "bi",
  "pho",
  "ga",
  "ise",
  "es",
  "ry",
  "hyp",
  "ell",
  "con",
  "te",
  "cin",
  "ast",
  "ul",
  "nde",
  "isc",
  "ge",
  "ur",
  "or",
  "ail",
  "lic",
  "ena",
  "ts",
  "ue",
  "ia",
  "blo",
  "am",
  "pl",
  "bea",
  "av",
  "ba",
  "enc",
  "qu",
  "hal",
  "ive",
  "ea",
  "ne",
  "en",
  "al",
  "gi",
  "ub",
  "rin",
  "pr",
  "iv",
  "so",
  "di",
  "co",
  "em",
  "to",
  "obe",
  "mic",
  "ss",
  "ab",
  "ac",
  "ad",
  "as",
  "at",
  "au",
  "ba",
  "bi",
  "ca",
  "cr",
  "cs",
  "cu",
  "da",
  "dd",
  "di",
  "do",
  "dr",
  "ds",
  "ed",
  "el",
  "em",
  "eo",
  "ep",
  "eq",
  "eu",
  "fa",
  "fe",
  "fo",
  "fr",
  "ft",
  "fu",
  "fy",
  "ga",
  "gi",
  "gl",
  "go",
  "ha",
  "he",
  "hi",
  "ic",
  "il",
  "im",
  "ir",
  "iu",
  "la",
  "ly",
  "ma",
  "mi",
  "mo",
  "na",
  "ne",
  "nm",
  "nn",
  "no",
  "ob",
  "ok",
  "om",
  "pa",
  "pd",
  "pe",
  "pp",
  "pt",
  "pu",
  "qu",
  "rr",
  "ru",
  "sc",
  "sh",
  "si",
  "sk",
  "sl",
  "sm",
  "so",
  "sp",
  "ss",
  "su",
  "ta",
  "tr",
  "ts",
  "tt",
  "tu",
  "ua",
  "ud",
  "ul",
  "um",
  "un",
  "up",
  "ur",
  "us",
  "vi",
  "wh",
];

export { BigramList };
