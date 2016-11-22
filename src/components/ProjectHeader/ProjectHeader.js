import React, { Component, PropTypes }  from 'react';

import './projectheader.less';

const propTypes = {
  data: PropTypes.object
};

const defaultProps = {
  data: {}
};

class ProjectHeader extends React.Component {

  _renderPrHeaderInfo () {
    return this.props.info ?
    <a href="#" className="action action-info" data-info={this.props.notification}>
      <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
    </a>
    :
    null;
  }

  render() {
    return (
      <div className="project-header">
        <div className="row">
          <div className="col-xs-8 col-md-8">
            <h2 className="title">
              <span>{this.props.title}</span>
            </h2>
          </div>
          <div className="col-xs-4 col-md-4 text-right aside-col">{this._renderPrHeaderInfo()}</div>
        </div>
      </div>
    );
  }
}

ProjectHeader.propTypes = propTypes;
ProjectHeader.defaultProps = defaultProps;

export default ProjectHeader;
