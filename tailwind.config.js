module.exports = {
  mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['niveau-grotesk'],
      },
      colors: {
        'darkblue': "#0F1744",
        'green': "#A9F58D",
        'blue': "#88FFF0",
        'white': "#FFFFFF",
        'black': "#06131A",
        'darkgrey': "#36464F"
      }
    },
  },
}
