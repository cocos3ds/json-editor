// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt'],
  app: {
    head: {
      "meta": [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "name": "keyword",
          "content": "json, editor,vue3,vue, online, formatter, view, edit, format, query, validate, share, formatter, json parse,text Diff"
        },
        {
          "name": "description",
          "content": "JSON Editor build by vue, format,edit, format, transform, validate, and share your JSON data."
        },
        {
          "name": "author",
          "content": "Neo in the matrix"
        },
        {
          "charset": "utf-8"
        }
      ],
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
