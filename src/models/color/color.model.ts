import { DataTypes } from 'sequelize'
import { sequelize } from '../../database/database'

export const Color = sequelize.define(
  'color',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    }
  }
)
