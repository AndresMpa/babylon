import { NextApiRequest, NextApiResponse } from 'next'
import Database from '@database'
import { request } from 'http'

const avocadoDetail = async (request: NextApiRequest, response: NextApiResponse) => {
  const avocadoId = request.query.id

  const dataBase = new Database()
  const detail = await dataBase.getById(avocadoId as string)

  response.status(200).json(detail)
}

export default avocadoDetail
