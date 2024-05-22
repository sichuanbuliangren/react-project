import React, { useState } from 'react'
import axios from 'axios'

import "./index.css";
export default function Home() {
  const [account, setAccount] = useState('')
  const [psd, setPsd] = useState('')

  // 处理输入框变化事件
  const handleUsernameChange = (event) => {
    setAccount(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPsd(event.target.value);
  };
  const login = () => {
    axios.post('https://hmajax.itheima.net/api/login', { username: account, password: psd }).then(result => {
      setAccount('')
      setPsd('')
      alert(result.data.message)
    }).catch(error => {
      alert(error)
    })
  }
  return (
    <div>
      <h1>请先登录您的账号</h1>
      <table action="" className='user-list'>
        <tr>
          <td>请输入您的账号：</td>
          <td><input placeholder="手机号/邮箱 黑马no1hello" type="text" onChange={handleUsernameChange} value={account} /></td>
        </tr>
        <tr>
          <td>请输入您的密码：</td>
          <td><input placeholder="含大小写字母 123456" type="text" onChange={handlePasswordChange} value={psd} /></td>
        </tr>
        <tr>
          <td colspan="2"><button className="login-btn" onClick={login}>登录</button></td>
        </tr>

      </table>
    </div >
  )
}
