import { NavLink } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
// 引入antD库
import {
  HomeOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined
} from '@ant-design/icons'
export default function Menu() {
  const items = [
    { id: uuidv4(), path: '/home', title: '首页', icon: <HomeOutlined /> },
    { id: uuidv4(), path: '/subsribe', title: '订阅', icon: <SearchOutlined /> },
    { id: uuidv4(), path: '/shoppingcart', title: '购物车', icon: <ShoppingCartOutlined /> },
    { id: uuidv4(), path: '/my', title: '我的', icon: <UserOutlined /> },
  ]
  return (
    <div>
      <div div className='footer' >
        <div className='footer-seat'>
          <div className='footer-lists'>
            <ul className='footer-menu'>
              {/* 列表循环遍历 */}
              {
                items.map(item => {
                  return (
                    <li className='menu-list' key={item.id}>
                      <NavLink to={item.path} className={({ isActive }) => isActive ? 'selected' : ''}>
                        {item.icon}
                        <span className='menu-title'>{item.title}</span>
                      </NavLink>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
