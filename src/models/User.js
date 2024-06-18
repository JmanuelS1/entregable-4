const { DataTypes } = require('sequelize')
const sequelize = require('../utils/connection')

const User = sequelize.define('user', {
   firstName: {
      type: DataTypes.STRING,
      allowNull: false
   },
   lastName: {
      type: DataTypes.STRING,
      allowNull: false
   },
   email: {
      type: DataTypes.STRING,
      allowNull: false
   },
   password: {
      type: DataTypes.TEXT,
      allowNull: false
   },
   image: {
      type: DataTypes.TEXT,
      allowNull: false
   },
   dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false
   },
   isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false
   },
})


module.exports = User