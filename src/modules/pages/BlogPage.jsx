import React from 'react'
import ArtitleList from '../artitleList/containers/articleList.container'
import FullArticle from '../artitleList/containers/fullArticle.container'
import { Layout } from 'antd'
const { Content, Sider } = Layout
import { connect } from 'react-redux'
import { Input } from 'antd'
const Search = Input.Search
import PropTypes from 'prop-types'


const BlogPage = ({fullArticle}) => (
  <Layout>
    <Content>
      {fullArticle.length ? <FullArticle></FullArticle> : <ArtitleList></ArtitleList>}
    </Content>
    <Sider theme="light" style={{padding: '20px', margin:'20px 0 0 20px'}}>
      <Search placeholder="input search text"
        onSearch={value => console.log(value)}
        style={{ width: '100%'}}
      />
    </Sider>
  </Layout>
)

BlogPage.propTypes = {
  fullArticle: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  fullArticle: state.fullArticleReducer
})

export default connect(
  mapStateToProps,
  null
)(BlogPage)