import { Card } from "react-bootstrap";

function ArticleTeaser(props) {
  
  return (
    <Card bg='secondary' text='light'>
      <Card.Link action as='a' bg='light' text='dark' href='#' onClick={ (event) => {
        props.handleTitleClick(props.id+1);
        event.preventDefault();
        }}>
        { props.title } 
      </Card.Link>
      <p>
        { props.created_date }
      </p>
    </Card>
  )
}

export default ArticleTeaser;