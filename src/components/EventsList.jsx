import React, { PropTypes } from 'react';
import classNames from 'classnames';

class EventsList extends React.Component {
  render () {
    return(
      <div className="b-events-list">
        {this.props.events.map((event, key) =>
          <div key={key} className="b-events-list__event">
            <div className="b-events-list__date">
              {event.date}
            </div>
            <div className="b-events-list__content">
              {event.text}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default EventsList;
