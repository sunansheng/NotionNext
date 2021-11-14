import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useGlobal } from '@/lib/global'

const MenuButtonGroup = ({ allowCollapse = false }) => {
  const { locale } = useGlobal()
  const router = useRouter()
  const links = [
    { id: 0, icon: 'fa-home', name: locale.NAV.INDEX, to: '/' || '/', show: true },
    { id: 1, icon: 'fa-info-circle', name: locale.NAV.ABOUT, to: '/article/about', show: true }
    // { id: 7, icon: 'fa-github', name: 'Github', to: 'https://github.com/tangly1024', show: true },
    // { id: 5, icon: 'fa-weibo', name: '微博', to: 'https://weibo.com/tangly1024', show: true },
    // { id: 4, icon: 'fa-envelope', name: locale.NAV.MAIL, to: 'mailto:tlyong1992@hotmail.com', show: true }
    // { id: 2, icon: 'fa-rss-square', name: locale.NAV.RSS, to: '/feed', show: true },
    // { id: 3, icon: 'fa-compass', name: '发现', to: 'https://search.tangly1024.com/', show: true }
    // { id: 6, icon: 'fa-map-marker', name: 'Fuzhou', to: '#', show: true },
    // { id: 8, icon: 'fa-twitter', name: 'Twitter', to: 'https://twitter.com/troy1024_1', show: true },
    // { id: 9, icon: 'fa-telegram', name: 'Telegram', to: 'https://t.me/tangly_1024', show: true }
  ]
  return <nav id='nav'>
    <div className='leading-8 text-gray-700 dark:text-gray-400'>
      {links.map(
        link =>
          link.show && (
            <Link key={link.id + link.icon} title={link.to} href={link.to} >
              <a className={(router.asPath === link.to ? 'bg-gray-200 dark:bg-black' : '') + ' py-2 px-5 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-600 duration-100 flex flex-nowrap align-middle'} >
                <div className='my-auto w-5 text-2xl justify-center flex'>
                  <i className={'fa ' + link.icon} />
                </div>
                <div className={'ml-4 w-32'}>{link.name}</div>
              </a>
            </Link>
          )
      )}
    </div>
  </nav>
}
export default MenuButtonGroup
