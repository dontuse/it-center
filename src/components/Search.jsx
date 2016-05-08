import React, { PropTypes } from 'react'

class Search extends React.Component {
  render () {
    return (
      <div className="b-search">
        <input className="b-search__input" type="text" placeholder="Поиск"/>
        <button className="b-search__button"></button>
      </div>
    )
  }
}

export default Search;
