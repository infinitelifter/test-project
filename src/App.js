import React, { Component } from 'react';
import { connect } from 'react-redux';
import t from 'prop-types'

import { ArticlesList, ArticlesView } from './containers'
import * as articlesActions from './redux/articles'
import Store from './redux/index'

import './App.css';
import './styles/style.css'


class App extends Component {
  static propTypes = {
    storeArticles: t.func,
    openArticle: t.func,
    editArticle: t.func
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = () => {
    const session = window.localStorage.getItem('session')

    if (session) {
      this.loadSession(session)
    } else {
      this.fetchJSON()
    }
  }

  // editArticle = (article) => {
  //   this.props.editArticle()

  //   setTimeout(() => {
  //     const { articles } = this.props

  //     window.localStorage.setItem('session', JSON.stringify({ articles }))
  //   }, 5);
  // }

  fetchJSON = () =>
    window
      .fetch(`${window.location.origin}/data.json`)
      .then(res => res.json())
      .then(({articles}) => this.props.storeArticles(articles))

  loadSession = session => {
    const { articles } = JSON.parse(session)

    this.props.storeArticles(articles)
  }

  saveSession = () => {
    const { articles } = this.props
    const session = { articles }

    window.localStorage.setItem('session', JSON.stringify(session));
  }

  handleArticleEdit = title => {
    const { activeIndex, articles } = this.props

    const article = {
      ...articles[activeIndex],
      title
    }

    // UI rerender
    this.props.editArticle(article)

    // Persistence
    setTimeout(this.saveSession, 5)
  }

  render() {
    const { articles, storeArticles, editArticle, openArticle, activeIndex } = this.props

    const article = articles[activeIndex]
    
    return (
      <div className="App">
        <ArticlesList articles={articles} openArticle={openArticle} activeIndex={activeIndex}/>
        {article && (
          <ArticlesView article={article} onArticleEdit={this.handleArticleEdit}/>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles.articles,
  activeIndex: state.articles.activeIndex
}) 

const mapDispatchToProps = { ...articlesActions }

const withStore = connect(mapStateToProps ,mapDispatchToProps)

export default withStore(App);