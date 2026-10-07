import { en } from './en';
import { pt } from './pt';
import { es } from './es';

export type Language = 'en' | 'pt' | 'es';
export type TranslationKey = keyof typeof en;

export const locales = {
  en,
  pt,
  es
} as const;
