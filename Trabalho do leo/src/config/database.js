const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize(process.env.DATABASE_URL)
const sequelize = new Sequelize('trabalho-leo', 'postgres', '12345678', {
  host: 'localhost',
  dialect:  'postgres'
});

sequelize
  .authenticate()
  .then(() =>   console.log('Connection has been established successfully.'))
  .catch((error) => console.error('Unable to connect to the database:', error))


const products = sequelize.define('products', {
   'nome_time': DataTypes.STRING,
    cidade: DataTypes.STRING,
    classificacao: DataTypes.INTEGER,
    pontos: DataTypes.INTEGER
  }, {
    timestamps: false
});


module.exports={products};