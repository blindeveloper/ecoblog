import React from 'react'
import { Card, List, Button } from 'antd'
import { GET } from '../resource/article.resource'
import PropTypes from 'prop-types'
class ArticleList extends React.Component {
  componentDidMount() {
    GET(null, data => this.props.addListOfArticles(data))
  }

  readMore(articleId) {
    GET(articleId, data => this.props.addFullArticle(data))
  }
  
  render(){
    return <section>
      <List
        header={<div>Articles</div>}
        bordered
        dataSource={this.props.listOfArticles}
        renderItem={article => (
          <List.Item>
            <Card
              type="inner"
              title={article.name}
              extra={new Date(article.creationDate).toLocaleDateString()}>
              <p>{article.shortText}</p>
              <Button type="dashed" onClick={() => this.readMore(article.id)}>Read more</Button>
            </Card>
          </List.Item>
        )}/>
    </section>
  }
}

ArticleList.propTypes = {
  addListOfArticles: PropTypes.func.isRequired,
  addFullArticle: PropTypes.func.isRequired,
  listOfArticles: PropTypes.array.isRequired
}

export default ArticleList