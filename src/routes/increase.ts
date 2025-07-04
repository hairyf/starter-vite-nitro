export default defineEventHandler(async () => {
  return runTask('increase').then(r => r.result)
})
