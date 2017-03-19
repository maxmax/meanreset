import React, { PropTypes }  from 'react';

const propTypes = {
  active: PropTypes.bool
};

const defaultProps = {
  active: true
};

export default class ModalBase extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
    this._closeModal = this._closeModal.bind(this);
  }

  //componentDidUpdate(){
  //  console.log("componentDidUpdate!");
  //  //this.setState({test: "new!"});
  //}

  //componentWillReceiveProps() {
  //  console.log("componentWillReceiveProps!");
  //  this.setState({
  //    show: true
  //  });
  //}

  //////

  _closeModal () {
    this.setState({show: false});
  }

  _renderWrapper () {
    //if (!this.props.active) { return null; }
    if (!this.state.show) { return null; }

    return (
      <div>
        <div>Modal!</div>
        <br />
        <br />
        <div className="close" onClick={this._closeModal.bind(this)}>Close</div>
      </div>
    );
  }

  render() {

    //const {
    //  children,
    //} = this.props;
    //console.log("state:", this.state.show);

    return (
      <div>
        <div>{this._renderWrapper()}</div>
      </div>
    );
  }
}

ModalBase.propTypes = propTypes;
ModalBase.defaultProps = defaultProps;
