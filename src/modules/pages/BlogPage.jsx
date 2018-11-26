import React from 'react'
import ArtitleList from '../artitleList/containers/articleList.container'
import FullArticle from '../artitleList/containers/fullArticle.container'
import { Layout } from 'antd'
const { Content, Sider } = Layout
import { connect } from 'react-redux'

const BlogPage = ({fullArticle}) => (
  <Layout>
    <Content>
      {fullArticle.length ? <FullArticle></FullArticle> : <ArtitleList></ArtitleList>}
    </Content>
    <Sider>Sider</Sider>
  </Layout>
)

const mapStateToProps = state => ({
  fullArticle: state.fullArticleReducer
})

export default connect(
  mapStateToProps,
  null
)(BlogPage)