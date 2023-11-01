import { IncomingMessage, ServerResponse } from 'http'
import Database from '@database'

const allAvocados = async (req: IncomingMessage, res: ServerResponse) => {
  const dataBase = new Database()
  const allEntries = await dataBase.getAll()
  const length = allEntries.length

  res.statusCode = 200
  res.setHeader('Content-type', 'application/json')
  res.end(JSON.stringify({ data: allEntries, length }))
}

export default allAvocados
