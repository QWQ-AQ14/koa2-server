const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../config/db')
const { isProd, isTest } = require('../utils/env')

const { host, user, password, database } = MYSQL_CONF

const conf = {
    host,
    dialect: 'mysql'
}

// Product enviroment, using pool
if(isProd) {
    conf.pool = {
        max: 5,
        min: 0,
        idle: 10000
    }
}
// 希望不要打印sequelize语句
if(isTest) {
    conf.logging = () => {}
}

const seq = new Sequelize(database, user, password, conf)

module.exports = seq