import { LANGUAGE } from "../tools/constants";
// import { en } from "./EN";
import { ru } from "./RU";
import { en } from "./EN";
// import { gr } from "./GR";

export const getLanguage = () => {
  return localStorage.getItem(LANGUAGE);
};

export const getText = (word) => {
  return getLanguage() === "en"
    ? en[word]
    : ru[word]
    // : gr[word];
};
