import { Model, DataTypes } from '@sequelize/core'
import { sequelize } from '../database/database'

class Color extends Model {}
Color.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }

}, {
  sequelize,
  modelName: 'color'
})

export default Color
