import { Card } from 'react-bootstrap'

function Article(props) {
  console.log(props.article)
  return (
    <Card bg='dark' text='light' style={{ width: '30rem' }}>
      { props.image && <Card.Img  version='top' alt={ props.title } src={ props.image }/> }
      <Card.Title> {props.title} </Card.Title>
      <Card.Subtitle> {props.created_date} </Card.Subtitle>
      { props.byline && <Card.Text> { props.byline }</Card.Text>}
      <Card.Body> { props.abstract }</Card.Body>
    </Card>
  )
}

export default Article;