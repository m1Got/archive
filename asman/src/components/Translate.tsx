import { siteLngGlobal } from "@/services/store.service";
import { useMemo } from "react";

export const languages = [
  { key: "ru", label: "Ru" },
  { key: "uz", label: "Uz" },
  { key: "eng", label: "Eng" },
] as const;

type LanguageKey = (typeof languages)[number]["key"];

export interface ILanguages
  extends Partial<Record<LanguageKey, string | JSX.Element>> {}

export const Translate = ({ uz, ru, eng }: ILanguages) => {
  const { siteLng } = siteLngGlobal();
  const translation = useMemo(() => {
    switch (siteLng) {
      case "uz":
        return uz;
      case "eng":
        return eng;
      case "ru":
      default:
        return ru;
    }
  }, [siteLng, ru, uz, eng]);

  return <>{translation}</>;
};
