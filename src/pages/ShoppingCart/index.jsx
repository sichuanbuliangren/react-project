import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'
import {
  ShoppingCartOutlined,
} from '@ant-design/icons'
export default function Home() {
  const [productList, setPorductList] = useState([])
  const [least, setLeast] = useState(false)

  // 执行获取商品信息的函数
  const getProduct = () => {
    axios.get('https://hmajax.itheima.net/api/news').then(result => {
      setPorductList(result.data.data);
    })
  }

  // 只调用一次商品信息
  useEffect(getProduct, [])

  // 添加事件委托，实现单个商品数量的增减
  const updateMsg = (e) => {
    // 判断点击的按钮是-或者+，执行不同的更新操作
    if (e.target.className.includes('sub')) {
      // 监测商品数量是否禁用-按钮
      if (e.target.value <= 0) {
        setLeast(true)
      } else {
        setLeast(false)
        const newProductList = productList.map(item => {
          if (+item.cmtcount === +e.target.value) {
            const newCount = +item.cmtcount - 1
            console.log(newCount);
            return { ...item, cmtcount: newCount }
          }
          return item
        }
        )
        setPorductList(newProductList)
      }

    }
    if (e.target.className.includes('add')) {
      const newProductList = productList.map(item => {
        if (+item.cmtcount === +e.target.value) {
          const newCount = +item.cmtcount + 1
          return { ...item, cmtcount: newCount }
        }
        return item
      }
      )
      setPorductList(newProductList)
    }
  }

  return (
    <div>
      <h1><ShoppingCartOutlined />&nbsp;购物车</h1>
      <ul className='product-show'>
        {
          productList.map(item => {
            return <li key={item.id} id={item.id} onClick={updateMsg} >
              <span className='mode-show'>
                {/* 商品展示区 */}
                <img src={item.img} />
                <i>{item.source}</i>
              </span>
              <span className='num-show'>
                <button className='product-num sub' disabled={least} value={item.cmtcount} >-</button>
                <input type="text" className='product-num' value={item.cmtcount} defaultValue={''} />
                <button className='product-num add' value={item.cmtcount} >+</button>
              </span>
            </li>
          })
        }
      </ul>
    </div>
  )
}
