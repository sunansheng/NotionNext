import BLOG from '@/blog.config'
import { NotionAPI } from 'notion-client'
import { getDataFromCache, setDataToCache } from '@/lib/cache/cache_manager'

export async function getPostBlocks (id, from) {
  let pageBlock = await getDataFromCache('page_block_' + id)
  if (pageBlock) {
    return pageBlock
  }
  const authToken = BLOG.notionAccessToken || null
  const api = new NotionAPI({ authToken })
  try {
    // console.log(id, '向Notion请求数据,来源为', from)
    pageBlock = await api.getPage(id)
    // console.dir(pageBlock)

    console.log(id, '向Notion请求成功:', from)
  } catch (error) {
    console.error(id, '向Notion请求数据请求失败:', from, error)
    return null
  }

  if (pageBlock) {
    await setDataToCache('page_block_' + id, pageBlock)
  }
  return pageBlock
}
