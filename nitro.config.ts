import redisDriver from 'unstorage/drivers/redis'

redisDriver({

})
export default defineNitroConfig({
  storage: {
    base: {
      driver: 'redis',
      url: 'redis://default:Iwx6mUMsxyUN1Gc2YqhemezZwLCuN25u@redis-10771.c84.us-east-1-2.ec2.redns.redis-cloud.com:10771',
    },
  },
  // devStorage: {
  //   base: {
  //     driver: 'fs-lite',
  //     base: './.nitro/dev/storage',
  //   },
  // },
  // scheduledTasks: {
  //   '* * * * *': ['increase'],
  // },
  experimental: { tasks: true },
})
