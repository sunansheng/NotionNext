import cache from 'memory-cache'


export async function getCacheFromMemory (key, options) { // url为缓存标识
  return cache.get(key)
}

export async function setCacheToMemory (key, data) { // url为缓存标识
  await cache.put(key, data, 600 * 1000,(key,value)=>{console.log('key:'+key+"过期了")})
  // console.log('内存保存key：'+key)
}
