export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      login: 'Login',
      email: 'Email',
      password: 'Password',
    },
    fr: {
      login: 'Connexion',
      email: 'Email',
      password: 'Mot de passe',
    }
  }
}))
