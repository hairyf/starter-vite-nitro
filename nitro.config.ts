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
  experimental: { tasks: true },
})
