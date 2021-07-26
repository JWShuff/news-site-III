import React, { useEffect, useState } from 'react';
import ArticlesAPI from '../api/ArticlesAPI.js';
import ArticleList from '../components/ArticleList/ArticleList.js'

const HomePage = (props) => {

  const [articles, setArticles] = useState(null)

  useEffect(() => {
    console.log (ArticlesAPI.fetchArticles());
    const fetchDataAsync = async() => {
      try {
        console.log('loading articles')
        const json = await ArticlesAPI.fetchArticles();
        setArticles(json)
      } catch (error) {
        console.error('error found fetching articles: ', error);
      }
    };
    if (articles === null) {
      fetchDataAsync();
    }
  }, [articles]);

  return (
    <div>
      <ArticleList articles={articles}
        handleTitleClick={(articleID) => {
          console.log(articleID)
          props.history.push(`/articles/${articleID}`) 
          }
        } />
    </div>
  );
}

export default HomePage;