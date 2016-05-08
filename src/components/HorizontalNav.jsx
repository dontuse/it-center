import React, { PropTypes } from 'react';

class HorizontalNav extends React.Component {
  render () {
    return (
      <nav className="b-horizontal-nav">
        <a className="b-horizontal-nav__item" href="">
          Департамент
        </a>
        <a className="b-horizontal-nav__item b-horizontal-nav__item_active" href="">
          Отдел
        </a>
        <a className="b-horizontal-nav__item" href="">
          Рабочая площадка
        </a>
      </nav>
    );
  }
}

export default HorizontalNav;
