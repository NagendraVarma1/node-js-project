const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Meeting = sequelize.define('meeting-table', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    mail: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    time: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Meeting;