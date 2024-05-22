import React, { useState, useEffect } from 'react'
import SlideShow from './SlideShow'
import { SearchOutlined } from '@ant-design/icons'
import { v4 as uuidv4 } from 'uuid'
import sNav from './SlideShow/nav'
import Nav from './nav'
import './index.css'
export default function Home() {
  // Hook
  // 默认轮播图
  const [defSlide, setSlide] = useState([
    { id: uuidv4(), name: '手机', url: require('../../assets/img/phone1.jpg') },
    { id: uuidv4(), name: '家电', url: require('../../assets/img/appliance5.jpg') },
    { id: uuidv4(), name: '女装', url: require('../../assets/img/ladywear5.jpg') },
    { id: uuidv4(), name: '男装', url: require('../../assets/img/manwear5.jpg') },
    { id: uuidv4(), name: '生活', url: require('../../assets/img/live4.jpg') },
  ])
  // 轮播图列表
  const [lists, setLists] = useState(defSlide)
  // 快捷导航栏
  const [headerLists, setHeaderLists] = useState(Nav)
  // 初始化搜索框输入数据
  const [input, setInput] = useState('')
  const handleChange = (e) => {
    // 更新value
    setInput(e.target.value)
  }

  // 实现导航的点击跳转事件
  const getDetail = (e) => {
    if (e.target.src.includes('phone')) setLists(() => sNav.filter(item => item.name.includes('手机')))
    else if (e.target.src.includes('appliance')) setLists(() => sNav.filter(item => item.name.includes('家电')))
    else if (e.target.src.includes('ladywear')) setLists(() => sNav.filter(item => item.name.includes('女装')))
    else if (e.target.src.includes('manwear')) setLists(() => sNav.filter(item => item.name.includes('男装')))
    else if (e.target.src.includes('live')) setLists(() => sNav.filter(item => item.name.includes('生活')))
  }
  useEffect(() => {
    // 筛选数据
    // 导航部分
    setHeaderLists(() => {
      if (input != '') {
        return Nav.filter(item => item.title.includes(input))
      }
      // 恢复默认
      return Nav
    })
    // 轮播图部分
    setLists(() => {
      if (input != '') {
        return sNav.filter(item => item.name.includes(input))
      }
      // 恢复默认
      return defSlide
    })
  }, [input])
  // 根据检索信息渲染数据
  const searchLists = () => {
    // 若检索为空，返回提示信息
    if (headerLists.length === 0) return <h1 style={{ color: "rgb(152, 152, 152)" }}>抱歉！没有相关信息</h1>
    else {
      return (headerLists.map(item => {
        return (
          <li key={item.id} className='home-list' onClick={getDetail}>
            <img src={item.url} alt="" />
            <p>{item.title}</p>
          </li>
        )
      })
      )
    }
  }
  return (
    <div>
      <div className="search">
        {/* 搜索模块 */}
        <i><SearchOutlined /></i>
        <input type="text" value={input} placeholder='请输入关键词' onChange={(e) => handleChange(e)} />
      </div>
      {/* 顶部导航 */}
      <ul className='header-nav'>
        {/* 结合搜索信息，渲染商品信息 */}
        {searchLists()}
      </ul>
      <SlideShow lists={lists} />
    </div >
  )
}
