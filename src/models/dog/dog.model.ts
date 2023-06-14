import { DataTypes } from 'sequelize'
import { sequelize } from '../../database/database'
import { Color } from '../color/color.model'

export const Dog = sequelize.define(
  'dog',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    tail_length: {
      type: DataTypes.DECIMAL
    },
    weight: {
      type: DataTypes.DECIMAL
    }
  }
)

Dog.hasMany(Color, {
  foreignKey: 'dogId',
  sourceKey: 'id'
})
Color.belongsTo(Dog, { foreignKey: 'dogId', targetKey: 'id' })
