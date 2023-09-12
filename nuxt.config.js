export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'pokdx',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap",
        },
      ],
    },
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/toast',
    ['nuxt-vue-material', {
    }],
  ],

auth: {
  strategies: {
    local: {
      endpoints: {
        login: { url: '/api/token/', method: 'post', propertyName: 'data.token' },
        user: { url: 'me', method: 'get', propertyName: 'data' },
        logout: {},
        user: false
      }
    }
  }
},

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
/*router: {
    middleware: ['auth']
},*/
axios: {
    baseURL: 'http://localhost:8000',
    proxy: true
},
proxy: {
  "/api/": {
    target: "http://127.0.0.1:8000/api/",
    pathRewrite: {"^/api/": ""}
  }
},

toast: {
  position: 'top-center',
  iconPack: 'fontawesome',
  duration: 3000,
  register: [
    {
      name: 'defaultSuccess',
      message: (payload) =>
        !payload.msg ? 'Success' : payload.msg,
      options: {
        type: 'success',
        icon: 'check'
      }
    },
    {
      name: 'defaultError',
      message: (payload) =>
        !payload.msg ? 'Error' : payload.msg,
      options: {
        type: 'error',
        icon: 'times'
      }
    }
  ]
},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
