export default defineNitroConfig({
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
