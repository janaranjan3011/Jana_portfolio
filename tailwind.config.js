export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 16px 80px rgba(56,189,248,0.18)',
      },
      backgroundImage: {
        cosmic: 'radial-gradient(circle at 20% 20%, rgba(56,189,248,0.15), transparent 18%), radial-gradient(circle at 80% 10%, rgba(168,85,247,0.12), transparent 20%), radial-gradient(circle at 50% 100%, rgba(14,165,233,0.06), transparent 30%)',
      },
      colors: {
        cosmic: {
          50: '#f7fbff',
          500: '#38bdf8',
          900: '#0f172a',
        },
      },
    },
  },
}
