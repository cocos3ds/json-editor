// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt'],
  app: {
    head: {
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-R890MKV9YM",
          body: true,
          async: true,
        },
        {
          src: "/public/initgtag.js",
          body: true,
          async: true,
        },
      ],
    }
  }
})
