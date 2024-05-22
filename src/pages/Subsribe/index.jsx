import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import { UserOutlined } from '@ant-design/icons'
import axios from 'axios'
import './index.css'

export default function Subsribe() {
  const [input, setInput] = useState('')
  const [words, setWords] = useState([''])
  // 更新输入的值
  const handleChange = (e) => {
    // 更新value
    setInput(e.target.value)
  }

  // 请求接口，获取句子
  const getWords = () => {
    axios.get('https://hmajax.itheima.net/api/ambition').then(result => {
      setWords([result.data.data, ...words]);
    })
  }
  // 点击事件和enter事件均可触发筛选函数
  const isSearch = (e) => {
    if (e.key === 'Enter' || e._reactName === 'onClick') {
      // 在输入不为空的前提下，筛选数据
      if (input !== '') {
        setWords(() => {
          const arr = words
          // 根据输入的值作为筛选条件
          const str = arr.filter(item => item.includes(input))
          return str
        })
      } else {
        alert('输入不能为空！')
      }
    }
  }
  return (
    <div>
      <div className="search">
        {/* 搜索模块 */}
        <i><SearchOutlined onClick={(e) => isSearch(e)} /></i>
        <input type="text" value={input} placeholder='请输入关键词' onChange={(e) => handleChange(e)} onKeyUp={(e) => isSearch(e)} />
      </div>
      <div className='subscribe-title'>
        <h2>我的订阅</h2>
        <button className='add-word' onClick={getWords}>新增语句</button>
        <NavLink to="/my">
          <i className='sub-login' ><UserOutlined />未登录</i>
        </NavLink>
      </div>
      <div className='good-words'>
        <ul>
          {
            words.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>

  )
}
