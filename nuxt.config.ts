// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Potfolio | Enoch Tetteh",
      meta: [{ name: "description", content: "Potfolio | Enoch Tetteh" }],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" }],
      script: [{ src: "https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.28.0/feather.min.js", crossorigin: "anonymous", integrity:"sha512-7x3zila4t2qNycrtZ31HO0NnJr8kg2VI67YLoRSyi9hGhRN66FHYWr7Axa9Y1J9tGYHVBPqIjSE1ogHrJTz51g==", referrerpolicy: "no-referrer" }],
    },
  },
})
