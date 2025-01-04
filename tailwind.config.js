/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        "Blurple": "#5865F2",
        "DiscordGreen": "#57F287",
        "DiscordYellow": "#FEE75C",
        "Fuchsia": "#EB459E",
        "DiscordRed": "#ED4245"
      },
      fontFamily:{
        'Ginto-Nord': ['ABC Ginto Nord Unlicensed Trial', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

