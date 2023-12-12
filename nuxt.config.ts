// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $development: {
    devtools: { enabled: true },
  },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    'nuxt-primevue',
  ],
  primevue: {
    components: {
      prefix: 'Prime',
    },
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
    options: {
      ripple: true,
      unstyled: true,
    },
    importPT: { as: 'Tailwind', from: 'primevue/passthrough/tailwind' },
  },
  colorMode: {
    classSuffix: ''
  },
})
