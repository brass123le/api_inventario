const { Sequelize } = require('sequelize');
const path = require('path');



// Option 2: Passing parameters separately (sqlite)
module.exports = new Sequelize({
    dialect: 'sqlite',
    storage: `${path.join(__dirname, '../db/')}database.sqlite`,
    logging:false,
});







