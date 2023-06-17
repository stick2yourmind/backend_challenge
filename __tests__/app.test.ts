import request from 'supertest'

import server from '../src/app'
import { SERVER_PORT } from '../src/config/server.config'
import { sequelize } from '../src/database/database'
import Dog from '../src/models/dog.model'
import supertest from 'supertest'
import { PING_MESSAGE_DEFAULT } from '../src/data/constant.data'

const emptyDogResponse = {
  data: [],
  error: false,
  statusCode: 200
}
const dogOne = {
  name: 'aaaa',
  weight: 30,
  tail_length: 202,
  color: 'brown'
}
const dogTwo = {
  name: 'bbbb',
  weight: 32,
  tail_length: 205,
  color: 'black&white'
}
beforeAll(async () => {
  await sequelize.sync({ force: true })
  await Dog.destroy({
    where: {
    }
  })
})
afterAll(async () => {
  await sequelize.close()
})
describe('Test app.ts', () => {
  describe('Dog endpoint', () => {
    test('Get empty dog', async () => {
      const { statusCode, body } = await supertest(server)
        .get('/dog')
      expect(statusCode).toBe(200)
      expect(body).toEqual(emptyDogResponse)
    })
    test('Save a dog', async () => {
      const { statusCode, body } = await supertest(server)
        .post('/dog')
        .send(dogOne)
      expect(statusCode).toBe(200)
      expect(body.data).toEqual(expect.objectContaining(dogOne))
    })

    test('Get dogs sorted by name asc', async () => {
      await Dog.destroy({
        where: {
        }
      })
      const { statusCode: statusCodeOne, body: bodyOne } = await supertest(server)
        .post('/dog')
        .send(dogOne)
      expect(statusCodeOne).toBe(200)
      expect(bodyOne.data).toEqual(expect.objectContaining(dogOne))
      const { statusCode: statusCodeTwo, body: bodyTwo } = await supertest(server)
        .post('/dog')
        .send(dogTwo)
      expect(statusCodeTwo).toBe(200)
      expect(bodyTwo.data).toEqual(expect.objectContaining(dogTwo))
      const { statusCode, body } = await supertest(server)
        .get('/dog')
        .query({
          attribute: 'name',
          order: 'asc'
        })
      expect(statusCode).toBe(200)
      expect(body.data).toEqual([
        expect.objectContaining(dogOne),
        expect.objectContaining(dogTwo)
      ])
    })

    test('Get dogs sorted by name desc', async () => {
      await Dog.destroy({
        where: {
        }
      })
      const { statusCode: statusCodeOne, body: bodyOne } = await supertest(server)
        .post('/dog')
        .send(dogOne)
      expect(statusCodeOne).toBe(200)
      expect(bodyOne.data).toEqual(expect.objectContaining(dogOne))
      const { statusCode: statusCodeTwo, body: bodyTwo } = await supertest(server)
        .post('/dog')
        .send(dogTwo)
      expect(statusCodeTwo).toBe(200)
      expect(bodyTwo.data).toEqual(expect.objectContaining(dogTwo))
      const { statusCode, body } = await supertest(server)
        .get('/dog')
        .query({
          attribute: 'name',
          order: 'desc'
        })
      expect(statusCode).toBe(200)
      expect(body.data).toEqual([
        expect.objectContaining(dogTwo),
        expect.objectContaining(dogOne)
      ])
    })
  })

  describe('Ping endpoint', () => {
    test('Get ping message', async () => {
      const { statusCode, text } = await supertest(server)
        .get('/ping')
      expect(statusCode).toBe(200)
      expect(text).toEqual(PING_MESSAGE_DEFAULT)
    })
  })
})
