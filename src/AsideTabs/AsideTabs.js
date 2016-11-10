import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';

import './asidetabs.less';

const propTypes = {
  data: PropTypes.array
};

const defaultProps = {
  data: [
    {
      title: 'ARTICLE',
      text: '<p>Description</p>'
    }, {
      title: 'ARTICLE 2',
      text: '<p>Description 2</p>'
    }
  ]
};

export default class AsideTabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  getAllTabs() {
    return Object.keys(this.props.data).map((key, index) => {
      return (
        <li className={`tab-item ${this.state.activeIndex === index && 'active'}`}
          onClick={() => this.setState({activeIndex: index})} key={`tab-item-${index}`}>
          <span>{this.props.data[index].title}</span>
        </li>
      );
    });
  }

  render() {

    //console.log("test:", this);
    //console.log(this.props);

    let nextButton = null;
    let nextActiveIndex = parseInt(this.state.activeIndex) + 1;

    if (this.props.data[nextActiveIndex]) {
      nextButton = (
        <a onClick={() => this.setState({activeIndex: nextActiveIndex})}>
          <span>Next:</span>
          <span>{this.props.data[nextActiveIndex].title}</span>
        </a>
      );
    }

    return (
      <div className="panel panel-default panel-aside">
        <div className="panel-body">
          <ul className="nav nav-tabs nav-stacked">
            {this.getAllTabs()}
          </ul>
          <div className="tab-content">
            <div className="tab-pane active">
              <div dangerouslySetInnerHTML={{__html: this.props.data[this.state.activeIndex].text}}/>
              <nav>
                <ul className="pager">
                  <li className="next">
                    {nextButton}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AsideTabs.propTypes = propTypes;
AsideTabs.defaultProps = defaultProps;

//AsideTabs.propTypes = {
//  data: PropTypes.arrayOf(PropTypes.shape({
//    title: PropTypes.string.isRequired,
//    text: PropTypes.string.isRequired
//  }).isRequired).isRequired
//};

//AsideTabs.propTypes = {
//  data: PropTypes.array.describe(
//    'All data.'
//  )
//};
//AsideTabs.propTypes = {
//  data: PropTypes.array.describe(
//    'All data.'
//  )
//};
