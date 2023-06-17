import 'dotenv/config'

export const SERVER_PORT = process.env.SERVER_PORT ?? 0

export const TEST_MODE = process.env.NODE_ENV === 'test'
