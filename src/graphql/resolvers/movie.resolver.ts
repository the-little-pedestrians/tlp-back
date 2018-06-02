import { Backhaton } from '../../index'

export async function getAll(limit: number = 200) {
  const query = `SELECT * FROM movies LIMIT ${limit}`
  return new Promise((resolve, reject) => {
    Backhaton.mysql.query(query, (error, results, fields) => {
      if (error) reject(error)
      resolve(results)
    })
  })
}

export async function getById(id: string) {
  try {
    return {}
  } catch (e) {
    return e
  }
}

export async function getInit(limit: number = 100) {
  const query = `SELECT * FROM movies WHERE status = 'Released' ORDER BY popularity desc LIMIT ${limit}`
  return new Promise((resolve, reject) => {
    Backhaton.mysql.query(query, (error, results, fields) => {
      if (error) reject(error)
      resolve(results)
    })
  })
}