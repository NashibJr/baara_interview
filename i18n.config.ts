import en from "./components/localization/en.json";
import fr from "./components/localization/fr.json";

export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    en: en,
    fr: fr,
  },
}));
