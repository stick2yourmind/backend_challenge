import Color from './color.model'
import Dog from './dog.model'

// NaN
// Dog has many relations with Color
// Color has many relations with Dog

// dog.addColor dog.getColor...etc.
Color.belongsToMany(Dog, { through: 'color_dog' })
Dog.belongsToMany(Color, { through: 'color_dog' })
