import React, {PureComponent} from 'react'
import t from 'prop-types'

//import ArticleListItem from '../components/'

class ArticleListItem extends PureComponent {
  render(){
    const { article, openArticle, index, activeIndex } = this.props

    return (
      <li onClick={() => openArticle(index)} className={activeIndex !== index ? ' ' : 'active'}>
        {article.title}
      </li>    
    )
  }

}

/*const ArticleListItem = ({ article, openArticle, index}) => (
  <li onClick={() => openArticle(index)} className={index ? ' ' : 'active'}>
    {article.title}
  </li>
)*/

export const ArticlesList = ({ articles, openArticle, activeIndex }) => (
  <div className="sidebar float-left">
    <ul>
      {articles.map((article,index) =>
        <ArticleListItem key={index} article={article} openArticle={openArticle} index={index} activeIndex={activeIndex} />
      )}
    </ul>
  </div>
)

ArticlesList.propTypes = {
  articles: t.arrayOf(t.object).isRequired,
  openArticle: t.func.isRequired,
  activeIndex: t.bool.isRequired
}

export default ArticlesList