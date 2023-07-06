// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt'],
  app: {
    head: {
      script: [
        {
          hid: 'gtm-script1',
          src: "https://www.googletagmanager.com/gtag/js?id=G-R890MKV9YM",
          body: true,
          async: true,
        },
        {
          hid: 'gtm-script2',
          innerHTML: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-R890MKV9YM');`,
          body: true,
          type: 'text/javascript'
        },
      ],
    }
  }
})
