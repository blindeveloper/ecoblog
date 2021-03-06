import React from 'react'
import { Card, Button } from 'antd'
import PropTypes from 'prop-types'

const FullArticle = ({fullArticle, clearFullArticle}) => (
  <Card
    style={{marginTop: '20px'}}
    cover={<img alt="example" src={fullArticle.imageUrl}/>}
    type="inner"
    title={fullArticle.name}
    extra={new Date(fullArticle.creationDate).toLocaleDateString()}>
    <p>{fullArticle.fullText}</p>
    <Button type="dashed" onClick={() => clearFullArticle()}>Get back</Button>
  </Card>
)

FullArticle.propTypes = {
  fullArticle: PropTypes.object.isRequired,
  clearFullArticle: PropTypes.func.isRequired
}

export default FullArticle