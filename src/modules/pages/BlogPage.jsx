import React from 'react'
import ArtitleList from '../artitleList/containers/articleList.container'
import { Layout } from 'antd'
const { Content, Sider } = Layout


const BlogPage = () => (
  <Layout>
    <Content>
      <ArtitleList></ArtitleList>
    </Content>
    <Sider>Sider</Sider>
  </Layout>
)

export default BlogPage