import { LanguageContent as TLanguageContent } from "../api/languageContent/LanguageContent";

export const LANGUAGECONTENT_TITLE_FIELD = "key";

export const LanguageContentTitle = (record: TLanguageContent): string => {
  return record.key?.toString() || String(record.id);
};
