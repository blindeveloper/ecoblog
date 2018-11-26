import React from 'react'
import ArtitleList from '../artitleList/containers/articleList.container'
import FullArticle from '../artitleList/containers/fullArticle.container'
import { AutoComplete, Layout } from 'antd'
const { Content, Sider } = Layout
import PropTypes from 'prop-types'
import { GET } from '../artitleList/resource/article.resource'

const BlogPage = ({fullArticle, articleList, addFullArticle}) => {
  const dataSource = articleList.map(el => el.name)
  const searchInputSelected = value => {
    let id = articleList.filter(el => {
      return el.name === value
    })[0].id

    GET(id, data => {
      addFullArticle(data)
    })
  }
  return <Layout>
    <Content>
      {fullArticle.length ? <FullArticle></FullArticle> : <ArtitleList></ArtitleList>}
    </Content>
    <Sider theme="light" style={{padding: '20px', margin:'20px 0 0 20px'}}>
      <AutoComplete
        style={{ width: '100%' }}
        allowClear={true}
        dataSource={dataSource}
        placeholder="Search"
        onSelect={value => searchInputSelected(value)}
        filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
      />
    </Sider>
  </Layout>
}

BlogPage.propTypes = {
  fullArticle: PropTypes.array.isRequired,
  articleList: PropTypes.array.isRequired,
  addFullArticle: PropTypes.func.isRequired
}

export default BlogPage