import React, { PropTypes } from 'react'

class DocListPr extends React.Component {
  render () {
    return (
      <div className="b-doc-list-pr">
        {this.props.docs.map((doc, key) =>
          <a key={key} href={doc.link} className="b-doc-list-pr__doc">
            <div className="b-doc-icon b-doc-list-pr__icon"></div>
            <div className="b-doc-list-pr__content">
              {doc.text}
            </div>
          </a>
        )}
      </div>
    )
  }
}

export default DocListPr;
