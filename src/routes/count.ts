export default defineEventHandler(async () => {
  const storage = useStorage('base')
  return await storage.getItem<number>('count', { allowOverwrite: true }) || 0
})
