import React, { PropTypes } from 'react'

class NewsListPreview extends React.Component {
  render () {
    return(
        <div className="b-news-list-preview">
          {this.props.news.map((oneNews, key) =>
            <div key={key} className="b-news-list-preview__item">
              <div className="b-news-list-preview__pic-box">
                <img className="b-news-list-preview__img" src={oneNews.pic} alt=""/>
              </div>
              <div className="b-news-list-preview__txt">
                {oneNews.content}
              </div>
          </div>)}
        </div>
    )
  }
}

export default NewsListPreview;
