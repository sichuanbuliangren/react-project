import { useRoutes } from 'react-router-dom'
import Menu from './pages/menu'
import './App.css';

// 引入路由表
import routes from './routes'


function App() {
  // 路由表
  const element = useRoutes(routes)

  return (
    <div className="content">
      {/* 主体内容 */}
      <header className="header">
        {/* 注册路由 */}
        {element}
      </header>
      {/* 底部导航 */}
      <Menu />
    </div >
  );
}

export default App;
