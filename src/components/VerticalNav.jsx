import React, { PropTypes } from 'react';
import classNames from 'classnames';

class VerticalNav extends React.Component {
  render () {
    return (
      <nav className="b-vertical-nav">
        {this.props.items.map((navItem,key) =>
          <a key={key}
             className={classNames('b-vertical-nav__el', {'b-vertical-nav__el_active': navItem.active})}
             href="">
             {navItem.name}
          </a>
        )}
      </nav>
    );
  }
}

export default VerticalNav;
