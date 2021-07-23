import React, { Component } from 'react';
import Article from '../components/Article/Article.js'
import News from '../data/news.json';
import ArticlesAPI from '../api/ArticlesAPI.js';

class ArticlePage extends Component {
  
  state = {
    article: null
  }
  
  async componentDidMount() {
    try {
      const articleID = this.props.match.params.articleID;
      const jsonResponse = await ArticlesAPI.fetchArticleByID(articleID)
      this.setState({
        article:jsonResponse
      });
    } catch(error) {
      console.error('Terrible things have happened: ', error)
    }
  }
  
  render() {
    return (
      <div>
        {this.state.article ? <Article {...this.state.article } image={ this.state.article.image } /> :
          <span>404: Article Not Found</span>
        }
      </div>
    );
  }
}

export default ArticlePage;


// Functional solution:
// function ArticlePage(props) {
//   const articleID = props.match.params.articleID - 1;
//   const article = News[articleID];
//   const image = article.multimedia.length ? article.multimedia[2].url : null;

//   return (
//     <div>
//       {article ? <Article { ...article } image={ image } /> :
//         <span>404: Article Not Found</span>
//       }
//     </div>
//   );
// }
