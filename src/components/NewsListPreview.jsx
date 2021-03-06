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
              <section className="b-news-list-preview__c-box">
                <div className="b-news-list-preview__txt">
                  {oneNews.content}
                </div>
                <div className="b-news-list-preview__meta">
                  {oneNews.meta}
                </div>
              </section>
          </div>)}
        </div>
    )
  }
}

export default NewsListPreview;
