export default defineNitroConfig({
  storage: {
    base: {
      envPrefix: 'BLOB',
      driver: 'vercel-blob',
      access: 'public',
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
