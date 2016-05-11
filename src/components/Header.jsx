import React, { PropTypes } from 'react'
import HorizontalNav from './HorizontalNav.jsx';
import Search from './Search.jsx';

class Header extends React.Component {
  render () {
    return (
      <header className="b-header b-grid">
        <div className="b-wrap">
          <aside className="b-grid__col-1">
            <a className="b-logo" href="">
              <span className="b-logo__pic-box"></span>
              <span className="b-logo__txt-box">
                Информационно-
                справочная система
              </span>
            </a>
          </aside>
          <section className="b-grid__col-2">
            <div className="b-header__col-1-wrap">
              <div className="b-header__col-1">
                <HorizontalNav
                  items = {[]}
                  />
              </div>
            </div>
            <div className="b-header__col-2">
              <Search value="" />
            </div>
          </section>
        </div>
      </header>
    )
  }
}

export default Header;
