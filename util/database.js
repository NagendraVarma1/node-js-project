const Sequelize = require('sequelize');

const sequelize = new Sequelize('meeting-app', 'root', 'Veera@512', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;