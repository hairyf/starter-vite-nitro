export default defineNitroConfig({
  storage: {
    base: {
      driver: 'vercel-kv',
    },
  },
  devStorage: {
    base: {
      driver: 'fs-lite',
      base: './.nitro/dev/storage',
    },
  },
  scheduledTasks: {
    '* * * * *': ['increase'],
  },
  experimental: { tasks: true },
})
