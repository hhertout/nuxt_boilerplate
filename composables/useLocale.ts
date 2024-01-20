export const useLocale = () => {
  return useState('locale', () => {
    const {locale, locales} = useI18n()

    /**
     * Get the locale availableLocales from I18n array value
     */
    const localMapper = {
      en: "🇬🇧",
      fr: "🇫🇷",
    }

    return {locale, locales, localMapper}
  })
}