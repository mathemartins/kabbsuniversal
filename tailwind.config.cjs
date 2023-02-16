/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    darkMode: "class",
    mode: "jit",
    theme: {
      extend: {
        fontSize: {
          14: "14px",
        },
        backgroundColor: {
          "main-bg": "#FAFBFB",
          "main-dark-bg": "#20232A",
          "secondary-dark-bg": "#33373E",
          "light-gray": "#F7F7F7",
          "half-transparent": "rgba(0, 0, 0, 0.5)",
        },
        borderWidth: {
          1: "1px",
        },
        borderColor: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        backgroundColor: {
          "main-bg": "#FAFBFB",
          "main-dark-bg": "#20232A",
          "secondary-dark-bg": "#33373E",
          "light-gray": "#F7F7F7",
          "half-transparent": "rgba(0, 0, 0, 0.5)",
        },
        colors: {
          primaryNew: "#00040f",
          darkRed: "#F40607",
          greyColor: "#7D7D7D",
          blackBg: "#000000",
          secondaryNew: "#00f6ff",
          sideBarBg: "#191919",
          primary: "#040404",
          secondary: "#59AD71",
          dimWhite: "rgba(255, 255, 255, 0.7)",
          dimBlue: "rgba(9, 151, 124, 0.1)",
          orange: "#FC884B",
          lighterOrange: "#FB954B",
          purpleTop: "#A93FAD",
          purpleBtm: "#B43F96",
          blueTop: "#475EAA",
          blueBtm: "#3A80BB",
          darkestBlue: "#4154B2",
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        },
        width: {
          400: "400px",
          760: "760px",
          780: "780px",
          800: "800px",
          1000: "1000px",
          1200: "1200px",
          1400: "1400px",
        },
        height: {
          80: "80px",
        },
        minHeight: {
          590: "590px",
        },
        backgroundImage: {
          "hero-pattern":
            "url('https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/welcome-bg-2x-svg.25338f53.svg')",
        },
      },
  
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
    plugins: [],
  };