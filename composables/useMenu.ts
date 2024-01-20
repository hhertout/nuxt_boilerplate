export const useMenu = () => {
  const locale = useI18n()
  return useState('menu', () => {
    return [
      {
        label: locale.t('home'),
        path: "/",
      },
      {
        label: "A route",
        path: "/",
      },
    ]
  })
}