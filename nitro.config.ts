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
  experimental: { tasks: true },
})
