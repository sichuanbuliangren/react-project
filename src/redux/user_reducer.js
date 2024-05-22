/* 
  该文件用于创建一个共享用户信息服务的reducer
  之前的状态(preState) ，动作对象(action)
*/
const initState = '未登录'
function userReducer(preState = initState, action) {
  const { type, userData } = action
  switch (type) {
    case 'UPDATE_USER':
      return userData
    default:
      return preState
  }
}

export default userReducer