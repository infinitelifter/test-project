import React, { PureComponent } from 'react'
import t from 'prop-types'

import { Input } from '../components'

class ArticlesView extends PureComponent {
  render(){
    const { article, onArticleEdit } = this.props

    return(
      <div className='article-view float-left'>
        <Input 
          initialValue={article.title}
          onChange={title => {
            this.props.onArticleEdit(title)
          }
          }
        />
        <div>
          <img src={article.img} alt={article.title} />  
        </div>
        <div>
          {article.text}
        </div>
      </div>
    )
  }
}

ArticlesView.propTypes = {
  onArticleEdit: t.func,
  article: t.object
}

export default ArticlesView