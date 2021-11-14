import fs from 'fs'
import BLOG from '@/blog.config'

const path = require('path')
// 文件缓存持续10秒
const cacheInvalidSeconds = 1000000000 * 1000
// 文件名
const jsonFile = path.resolve('./data.json')

export async function getCacheFromFile (key) {
  const exist = await fs.existsSync(jsonFile)
  if (!exist) return null
  const data = await fs.readFileSync(jsonFile)
  const json = data ? JSON.parse(data) : {}
  // 缓存超过有效期就作废
  const cacheValidTime = new Date(parseInt(json[key + '_expire_time']) + cacheInvalidSeconds)
  const currentTime = new Date()
  if (!cacheValidTime || cacheValidTime < currentTime) {
    return null
  }
  return json[key]
}

/**
 * 并发请求写文件异常； Vercel生产环境不支持写文件。
 * @param key
 * @param data
 * @returns {Promise<null>}
 */
export async function setCacheToFile (key, data) {
  const exist = await fs.existsSync(jsonFile)
  const json = exist ? JSON.parse(await fs.readFileSync(jsonFile)) : {}
  json[key] = data
  json[key + '_expire_time'] = new Date().getTime()
  fs.writeFileSync(jsonFile, JSON.stringify(json))
}
