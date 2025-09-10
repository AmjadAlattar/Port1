/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: "Nunito Sans",
      },
      backgroundImage: {
        "hero-image": "url('/assets/bg.jpg')",
        "contact-image": "url('/assets/contact.jpg')",
      },
      colors: {
        designColor: "#100f44ff", // primary blue
        textColor: "#6b7280", // gray-500
        primaryBlue: "#2563eb",
        primaryBlueDark: "#1d4ed8",
        lightSurface: "#f8fafc",
      },
      boxShadow: {
        cardShadow: "0px 0px 5px 10px rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [],
}

