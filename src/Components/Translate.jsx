import { translate } from "@vitalets/google-translate-api";

export const translatetext = async (text, language) => {
  const translatedText = await translate(text, { to: language });
  return translatedText.text;
};
