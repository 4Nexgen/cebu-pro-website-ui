/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#FFB700',
      'secondary': '#C00A27',
      'secondary-hover': '#FF0029',
      'tertiary': '#C00A27',
      'danger': '#e3342f',
      'shadowed-white': '#F9F9F9',
      'stroke-grey': '#E4E4E4',
      'input-default': '#F1F1F1'
    }),
    textColor: {
      'white': '#FFFFFF',
      'primary': '#FFB700',
      'link-hover': '#F4B618',
      'secondary': '#C00A27',
      'danger': '#e3342f',
      'grey': '#3A3A3A',
      'grey-lighter': '#686464',
      'hawaian-tan' : '#FFC700',
      'blue': '#1044C6'
    },
    // extend: {
    //   height: {
    //     'almost': '65vh',
    //   },
    //   minHeight: {
    //     'almost': '65vh',
    //   },
    //   fontFamily: {
    //     'nunito': 'Nunito, sans-serif'
    //   },
    // },
  },
  plugins: [],
}

