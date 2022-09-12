/**
 * @description json test
 */
const server = require('./server')
test('json接口', async () => {
  const res = await server.get('./json')
  expect(res.body.title).toBe('koa2 json')
})