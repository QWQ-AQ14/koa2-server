const { isProd } = require('../utils/env')

let REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
}

let MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'koa2-weibo'
}
// 若为生产环境
if (isProd) {
    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }

    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '',
        port: 3306,
        database: 'koa2-weibo'
    }
}


module.exports = {
    REDIS_CONF, MYSQL_CONF
}