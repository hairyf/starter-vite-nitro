/* eslint-disable no-console */
export default defineTask({
  meta: {
    name: 'increase',
    description: 'Increase the count',
  },
  async run() {
    const storage = useStorage('kv')
    const count = await storage.getItem<number>('count', { allowOverwrite: true }) || 0
    await storage.setItem('count', count + 1, { allowOverwrite: true })
    console.log(`Current count is: ${count + 1}`)
    return { result: `Current count is: ${count + 1}` }
  },
})
