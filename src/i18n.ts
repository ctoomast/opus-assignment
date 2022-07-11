import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import de from "./translations/de.json";
import ee from "./translations/ee.json";
import en from "./translations/en.json";
import lt from "./translations/lt.json";
import ru from "./translations/ru.json";

// https://medium.com/geekculture/strong-typed-i18n-in-react-c43281de720c

const resources = {
  de,
  ee,
  en,
  lt,
  ru,
}

export const availableLanguages = Object.keys(resources)

i18n.use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    defaultNS: "common",
    fallbackLng: "en",
  });