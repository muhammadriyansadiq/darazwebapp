/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#f85606', // Example custom color
        'background': '#f5f5f5',
      },
     
    },
  },
    plugins: [
        require('flowbite/plugin'),
        require('@tailwindcss/container-queries'),
    ]
}

