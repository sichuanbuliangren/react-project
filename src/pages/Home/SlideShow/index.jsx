import React, { useEffect, useState } from 'react'

import './index.css'
// 轮播图函数
export default function SlideShow(props) {
  const [num, setNum] = useState(0)
  // const [img, setImg] = useState(Nav)
  // 轮播图模块
  const slideShow = () => {
    //若搜索不到信息，返回空串
    if (props.lists.length === 0) return ''
    else {
      return (
        <>
          {props.lists.map((imgObj, index) => {
            return (
              <img className='signal-img' key={imgObj.id} src={imgObj.url} style={{ display: (index === num ? 'block' : 'none') }} />
            )
          })
          }
          <ul ul className='slide-circle' >
            {props.lists.map((imgObj, index) => {
              return (
                <li key={imgObj.id} className={index === num ? 'active' : ''}></li>
              )
            })
            }
          </ul>
        </>
      )
    }
  }

  useEffect(() => {
    // 设置定时器，每隔2s切换图片
    const timer = setInterval(() => {
      setNum(index => {
        if (index >= props.lists.length - 1) return 0
        else return index + 1
      })
    }, 2000)
    // 在函数执行结束之后销毁定时器
    return () => clearInterval(timer)
  }, [num])
  return (
    <div className='slide-show'>
      <div className='slide-img'>
        {slideShow()}
      </div>
    </div >
  )
}
