import TestPage from './modules/pages/TestPage.jsx'
import SwimmersPage from './modules/pages/SwimmersPage.jsx'

const routes = [
  {
    path: '/',
    name: 'home',
    exact: true
  },
  {
    path: '/test',
    name: 'test',
    component: TestPage
  },
  {
    path: '/swimmers',
    name: 'swimmers',
    component: SwimmersPage
  }
]

export default routes