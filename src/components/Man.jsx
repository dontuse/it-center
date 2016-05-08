import React, { PropTypes } from 'react'

class Man extends React.Component {
  render () {
    return (
      <div className="b-man">
        <div className="b-man__portrait">
          <img src={this.props.portrait} alt=""/>
        </div>
        <div className="b-man__name">
          {this.props.name}
        </div>
        <div className="b-man__position">{this.props.position}</div>
        <a className="b-man__logout"></a>
      </div>
    );
  }
}

export default Man;
