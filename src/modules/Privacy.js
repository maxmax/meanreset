import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import AsideTabs from '../components/AsideTabs/AsideTabs';

const propTypes = {
  data: PropTypes.array
};

const defaultProps = {
  data: [
    {
      title: '',
      text: 'Page Empty'
    }
  ]
};

export default class Privacy extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container page">
        <AsideTabs data={this.props.data}/>
      </div>
    );
  }
}

Privacy.propTypes = propTypes;
Privacy.defaultProps = defaultProps;
