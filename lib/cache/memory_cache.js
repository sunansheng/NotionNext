import cache from 'memory-cache'


export async function getCacheFromMemory (key, options) { // url为缓存标识
  return cache.get(key)
}

export async function setCacheToMemory (key, data) { // url为缓存标识
  await cache.put(key, data, 60*2 * 1000)
  // console.log('内存保存key：'+key)
}
