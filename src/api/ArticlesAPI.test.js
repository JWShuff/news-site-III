/**
 * Gotta return an await from API function
 * URL formatting has to match
 */
import ArticlesAPI from './ArticlesAPI'
import fetchMock from 'fetch-mock'
require('isomorphic-fetch')

afterEach(() => {
  fetchMock.restore()
})

it('calls ArticlesAPI.fetchArticleByID(1)', () => {
  fetchMock.get('http://localhost:3001/api/articles/1', { success: true })
  return ArticlesAPI.fetchArticleByID(1)
    .then((json) => {
      expect(json.success).toEqual(true)
    })
    .catch((err) => {
      throw new Error('Call failed')
    })
})

it('calls ArticlesAPI.fetchArticles()', () => {
  fetchMock.get('http://localhost:3001/api/articles', { success: true })
  return ArticlesAPI.fetchArticles()
    .then((json) => {
      expect(json.success).toEqual(true)
    })
    .catch((err) => {
      throw new Error('Call failed')
    })
})

it('calls ArticlesAPI.fetchArticlesBySection(\'opinion\')', () => {
  fetchMock.get('http://localhost:3001/api/articles?filter={"where":{"section":"opinion"}}', { success: true })
  return ArticlesAPI.fetchArticlesBySection('opinion')
    .then((json) => {
      expect(json.success).toEqual(true)
    })
    .catch((err) => {
      throw new Error('Call failed')
    })
})
