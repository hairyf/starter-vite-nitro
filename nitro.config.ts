import redisDriver from 'unstorage/drivers/redis'

redisDriver({

})
export default defineNitroConfig({
  storage: {
    base: {
      driver: 'redis',
      url: 'REDIS_URL',
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
