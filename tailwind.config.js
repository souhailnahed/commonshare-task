/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lightsteelblue: "rgba(195, 212, 233, 0.4)",
        "primary-500": "#3563e9",
        whitesmoke: "#f6f7f9",
        gray: {
          "100": "rgba(19, 19, 19, 0.16)",
          "200": "rgba(19, 19, 19, 0.6)",
        },
        "secondary-500": "#1a202c",
        "secondary-300": "#90a3bf",
        "information-500": "#54a6ff",
      },
      spacing: {},
      fontFamily: {
        "bold-type32": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      sm: "14px",
      "13xl": "32px",
      base: "16px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
