import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: true,
  typescript: true,
  rules: {
    'react-hooks/rules-of-hooks': 'off',
  },
})
