export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  webfontloader: {
    google: {
      families: ['Nanum+Myeongjo', 'Open+Sans']
    }
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: './plugins/vue-slick-carousel.js'
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  eslint: {
    fix: true
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-fontawesome',
    'nuxt-webfontloader'
  ],
  styleResources: {
    scss: [
      '~assets/scss/_breakpoints.scss',
      '~assets/scss/_colors.scss',
      '~assets/scss/_mixins.scss',
      '~assets/scss/_variables.scss'
    ]
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons', // Solid icons
        icons: [
          'faEnvelope',
          'faMapMarkerAlt',
          'faPhone',
          'faClock',
          'faCouch',
          'faUserFriends',
          'faAngry',
          'faComment',
          'faBars',
          'faCaretDown',
          'faMobileAlt',
          'faUsers'
        ]
      },
      {
        set: '@fortawesome/free-brands-svg-icons', // Brand icons
        icons: ['faDev', 'faFacebook', 'faTwitter', 'faInstagram', 'faYoutube']
      }
    ]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
