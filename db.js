const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  process.env.bn_name, // Database name
  process.env.bn_user, // User
  process.env.bn_psd, // Password
  {
    host: process.env.bn_host, // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
