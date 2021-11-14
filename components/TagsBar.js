import Link from 'next/link'

/**
 * 标签组导航条，默认隐藏仅在移动端显示
 * @param tags
 * @param currentTag
 * @returns {JSX.Element}
 * @constructor
 */
const TagsBar = ({ tags, currentTag }) => {
  if (!tags) return <></>
  return (
    <div id='tags-bar' className='fixed block lg:hidden top-16 duration-500 z-10 w-full border-b dark:border-gray-600'>
      <div className='bg-white dark:bg-gray-800 flex overflow-x-auto'>
      <div className='z-30 sticky left-0 flex'>
        <div className='px-2 bg-white dark:bg-gray-800'/>
        <div className='px-5 -line-x-opacity bg-black'/>
      </div>
      <ul id='tag-container' className='flex py-1 space-x-3'>
        <li className='w-10 py-2 dark:text-gray-200'>标签:</li>
        {tags.map(tag => {
          const selected = tag.name === currentTag
          return (
            <Link key={tag.name} href={selected ? '/' : `/tag/${encodeURIComponent(tag)}`}>
              <li
                className={`cursor-pointer border hover:bg-gray-300 rounded-xl duration-200 mr-1 my-1 px-2 py-1 font-medium font-light text-sm whitespace-nowrap
                 dark:text-gray-300 dark:hover:bg-gray-800 ${selected ? 'text-white bg-black dark:hover:bg-gray-900 dark:bg-black dark:border-gray-800' : 'bg-gray-100 text-gray-600 dark:bg-gray-600 dark:border-gray-600'
                }`}
              >
                <a>
                  {`${tag.name} (${tag.count})`}
                </a>
              </li>
            </Link>
          )
        })}
      </ul>
      <div className='z-30 sticky right-0 flex'>
        <div className='px-5 line-x-opacity'/>
        <div className='px-2 bg-white dark:bg-gray-800'/>
      </div>
    </div>
    </div>
  )
}

export default TagsBar
