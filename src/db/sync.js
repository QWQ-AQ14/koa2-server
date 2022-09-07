/**
 * @description sequelize 同步数据库
 */

const seq = require('./seq')

seq.authenticate().then(() => {
    console.log('auth ok');
}).catch(() => {
    console.log('auth err');
})
// force: true  每次同步时，将表清空重建
seq.sync({ force: true }).then(() => {
    console.log('sync ok')
    process.exit()
})