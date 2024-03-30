import { titleCase } from "title-case";
import { AVAILABLE_LANGUAGES, LANGUAGES_AND_VOICES_CONFIG } from "../languages-and-voices-config";

const getAvailableLanguagesByProvider = (provider: string) => {
  return Array.from(
    // Get unique languages
    new Set(
      LANGUAGES_AND_VOICES_CONFIG.filter((voice) => voice.provider === provider).flatMap(
        (voice) => voice.languages,
      ),
    ),
  );
}

const useTargetLanguages = () => {
  // Get all available languages in TTS config
  return AVAILABLE_LANGUAGES;
};

export default useTargetLanguages;