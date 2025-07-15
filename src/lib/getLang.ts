import { Language } from "./i18n";

export function getCurrentLanguage(pathname: string): Language {
  if (pathname.startsWith("/en")) return "en";
  return "zh";
}
