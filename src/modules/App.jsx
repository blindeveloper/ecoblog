import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navigation from './navigation/Navigation.jsx'
import routes from '../routes'
import { Layout, Row, Col } from 'antd'
const { Header, Footer, Sider, Content } = Layout;
import '../index.scss'

const App = () => (
  <Layout>
    <Header>
      <Navigation/>
    </Header>
    <Content>
      <Row type="flex" justify="center">
        <Col span={20}>
          <Switch>
            {routes.map(( route, i ) => <Route key={i} {...route}/>)}
          </Switch>
        </Col>
      </Row>
    </Content>
    <Footer>Footer</Footer>
  </Layout>
)

export default App