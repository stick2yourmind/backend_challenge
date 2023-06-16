import { Model, DataTypes } from '@sequelize/core'
import { sequelize } from '../database/database'

class Dog extends Model {}
Dog.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    unique: true
  },
  color: {
    type: DataTypes.STRING
  },
  tail_length: {
    type: DataTypes.INTEGER
  },
  weight: {
    type: DataTypes.INTEGER
  }

}, {
  sequelize,
  modelName: 'dog'
})

export default Dog
