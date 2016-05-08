import React, { PropTypes } from 'react'

class SystemsList extends React.Component {
  render () {
    return (
      <div className="b-systems-list">
        {this.props.systems.map((system) =>
          <a href="" className="b-systems-list__item">
            <div className="b-systems-list__pic-box">
              <img src={system.pic} alt=""/>
            </div>
            <div className="b-systems-list__conent-box">
              <div className="b-systems-list__name">
                {system.name}
              </div>
            </div>
          </a>
        )}
      </div>
    )
  }
}

export default SystemsList;
