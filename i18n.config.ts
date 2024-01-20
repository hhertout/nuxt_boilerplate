export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      login: 'Login',
      email: 'Email',
      password: 'Password',
      serverError: 'Service is temporally unavailable',
      invalidLoginData: 'Connection failed : Your email or password are invalid',
      loginIn: 'Login in...'
    },
    fr: {
      login: 'Connexion',
      email: 'Email',
      password: 'Mot de passe',
      serverError: 'Le service est actuellement indisponible',
      invalidLoginData: 'La connexion à échouée : Identifiants invalides',
      loginIn: 'Connexion en cours...'
    }
  }
}))
