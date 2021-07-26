
// The `ArticlesAPI.js` JavaScript module's primary function is to handle making requests to the API described in the previous section. This module already contains a few functions that are stubbed out - your job is to complete them.

// The functions are:
// - `fetchArticleByID(id)` - given an article ID, returns an Article object with the given ID.
// - `fetchArticlesBySection(section)` - returns a list of articles whose `section` attribute matches the section argument.
// - `fetchArticles(filters)` - returns a list of articles. The filters argument is optional - if no filters are provided, an array of all the articles are returned. If filters are provided, an array of Articles that meet the criteria are returned.

const BASE_URL = 'http://localhost:3001/api/articles'

const tryFetch = async (url) => {
  try {
    let response=await fetch(url)
    if (!response.ok) {
      throw response.statusText
    }
    let data = await response.json();
    return data
  } catch(error) {
    console.error(error)
  }
} 

const fetchArticleByID = async (articleID) => {
  return await tryFetch(BASE_URL + `/${articleID}`)
}

const fetchArticlesBySection = async (section) => {
    let url = BASE_URL
    url += `?filter={"where":{"section":"${section}"}}`
    return await tryFetch(url)
};

const fetchArticles = async (filters=null) => {
  console.log('fetching articles')
  if (filters==null) return await tryFetch(BASE_URL)
};

export default {
  fetchArticleByID,
  fetchArticles,
  fetchArticlesBySection
};
