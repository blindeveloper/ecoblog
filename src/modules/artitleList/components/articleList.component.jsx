import React from 'react'
import { Card, List } from 'antd'

class ArticleList extends React.Component {
  componentWillMount() {
    fetch('http://localhost:8000/article', {method: 'GET'})
    .then(response => response.json())
    .then(data => this.props.addListOfArticles(data))
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
              style={{ marginTop: 16 }}
              type="inner"
              title={article.name}
              extra={<a href="#">More</a>}>
                {article.shortText}
            </Card>
        </List.Item>
      )}/>
    </section>
  }
}

export default ArticleList