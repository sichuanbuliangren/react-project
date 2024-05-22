import Home from '../pages/Home'
import My from '../pages/My'
import Subsribe from '../pages/Subsribe'
import ShoppingCart from '../pages/ShoppingCart'
export default [
  {
    path: '/home',
    keys: 'home',
    element: <Home />
  },
  {
    path: '/my',
    key: 'my',
    element: <My />
  },
  {
    path: '/subsribe',
    key: 'subsribe',
    element: <Subsribe />
  },
  {
    path: '/shoppingcart',
    key: 'shoppingcart',
    element: <ShoppingCart />
  },
]