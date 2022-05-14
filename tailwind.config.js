module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        blue: '#00FFDD',
        orange: '#ff5b00',
        transp: 'rgba(25, 31, 30, 0.9)'
      },
    },
    screens: {
      "cell": {'max': '1023px'},
      "desk": {'min': '1024px'},
      "lg": {'min': '1000'}
    },

  },
  plugins: [],
}


