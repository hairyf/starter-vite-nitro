export default defineNitroConfig({
  storage: {
    base: {
      url: 'https://touched-pipefish-34984.upstash.io',
      driver: 'vercel-kv',
    },
  },
  // devStorage: {
  //   base: {
  //     driver: 'fs-lite',
  //     base: './.nitro/dev/storage',
  //   },
  // },
  scheduledTasks: {
    '* * * * *': ['increase'],
  },
  experimental: { tasks: true },
})
