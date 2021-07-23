import React, { Component } from 'react';
import ArticlesAPI from '../api/ArticlesAPI.js';
import ArticleList from '../components/ArticleList/ArticleList.js'
import News from '../data/news.json';

class HomePage extends Component {

  state = {
    articles: []
  }

  async componentDidMount() {
    const json = await ArticlesAPI.fetchArticles()
    this.setState({
      articles:json
    })
  }

  render() {
    return (
      <div>
        <ArticleList articles={this.state.articles}
          handleTitleClick={(articleID) => {
            console.log(articleID)
            this.props.history.push(`/articles/${articleID}`) 
            }
           } />
      </div>
    );
  }
}

export default HomePage;


// Functional solution:
// function HomePage() {
//   return (
//     <div>
//       <ArticleList articles={News}
//         handleTitleClick={(articleID) => props.history.push(`/articles/${articleID}`)} />
//     </div>
//   );
// }
