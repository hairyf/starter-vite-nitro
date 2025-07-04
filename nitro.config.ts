import process from 'node:process'

export default defineNitroConfig({
  storage: {
    base: {
      driver: 'redis',
      url: process.env.REDIS_URL,
    },
  },
  devStorage: {
    base: {
      driver: 'fs-lite',
      base: './.nitro/dev/storage',
    },
  },
  experimental: { tasks: true },
})
