/**
 * @description 环境变量
 */
const ENV = process.env.NODE_ENV

module.exports = {
    isTest: ENV === 'test',
    isDev: ENV === 'dev',
    isProd: ENV === 'production',
    notTest: ENV !== 'test',
    notDev: ENV !== 'dev',
    notProd: ENV !== 'production',
}