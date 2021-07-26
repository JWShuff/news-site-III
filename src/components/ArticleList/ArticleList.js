import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'
import { ListGroup } from 'react-bootstrap'


function ArticleList(props) {
  let articles = props.articles
  console.log(articles)

  const getAllTeasers = (articles) => {
    if(articles === null) {
      return (
        'error'
      )
    }
    return articles.map((article, idx) => {
      return(
        <ListGroup.Item action variant='dark' className='shadow my-1' >
          <ArticleTeaser key={idx} id={idx} title={ article.title } created_date={article.created_date} handleTitleClick={props.handleTitleClick} />
        </ListGroup.Item>
      ) 
    })
  }

  return (
    <ListGroup bg='dark'>
      { getAllTeasers(articles) }
    </ListGroup>
  )
}

export default ArticleList;
