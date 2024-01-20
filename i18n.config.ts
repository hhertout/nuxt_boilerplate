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
      loginIn: 'Login in...',
      settings: 'Settings',
      logout: 'Logout',
      menu: 'Menu',
      account: 'Account',
      home: 'Home'
    },
    fr: {
      login: 'Connexion',
      email: 'Email',
      password: 'Mot de passe',
      serverError: 'Le service est actuellement indisponible',
      invalidLoginData: 'La connexion à échouée : Identifiants invalides',
      loginIn: 'Connexion en cours...',
      settings: 'Paramètres',
      logout: 'Déconnexion',
      menu: 'Menu',
      account: 'Compte',
      home: 'Accueil'
    }
  }
}))
