import React, { PropTypes } from 'react';
import classNames from 'classnames';

class Progress extends React.Component {
  render () {
    let blockMix = classNames(
      'b-progress',
      { 'b-progress_alarm': this.props.spent > this.props.estimated },
      { 'b-tasks-list__progress': true }
    );
    return (
      <div className={blockMix}>
        <div className="b-progress__wrapper">
          <div
            style={{ width: `${this.props.spent}%` }}
            className="b-progress__line">
          </div>
        </div>
        <div style={{ left: `${this.props.estimated}%`}} className="b-progress__mark">
          <span className="b-progress__mark-val">
            {this.props.estimated}
          </span>
        </div>
      </div>
    )
  }
}

export default Progress;
