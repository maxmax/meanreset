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
      show: this.props.active
    };
    //this._closeModal = this._closeModal.bind(this);
  }

  //componentWillMount() {
  //  this.setState({showModal: this.props.active});
  //  console.log("componentWillMount!");
  //}

  //componentDidMount() {
  //  this.setState({showModal: this.props.active});
  //  console.log("componentDidMount!");
  //}

  //componentWillReceiveProps() {
  //  this.setState({show: this.props.active});
  //  console.log("componentWillReceiveProps!");
  //  //console.log("props:", this.props.active);
  //}
  componentDidUpdate() {
    console.log("componentDidUpdate!");
  }

  //componentDidUpdate() {
  //  this.setState({showModal: this.props.active});
  //  console.log("componentDidUpdate!");
  //}

  //componentWillUpdate() {
  //  this.setState({showModal: this.props.active});
  //  console.log("componentWillUpdate!");
  //}

  //shouldComponentUpdate(){
  //  this.setState({showModal: this.props.active});
  //  console.log("shouldComponentUpdate!");
  //}

  _closeModal () {
    //this.setState({showModal: false});
    //this.setState({showModal: false});
  }

  _renderWrapper (body) {
    //if (!this.props.active) { return null; }
    if (!this.state.show) { return null; }

    const style = {
      display: 'block'
    };

    const intmodal = (
      <div className="modal fade in modal-base" role="dialog" style={style}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="close" onClick={this._closeModal.bind(this)}></div>
              {body}
            </div>
          </div>
        </div>
      </div>
    );

    //const intbackdrop = (
    //  <div className="modal-backdrop fade in"></div>
    //);

    return intmodal;
  }

  render() {

    //const {
    //  children,
    //} = this.props;

    console.log("props:", this.props.active);
    console.log("state:", this.state.show);
    //console.log("state:", this.state.show);

    return (
      <div>
        <div>Test</div>
        <div>{this._renderWrapper(this.props.children)}</div>
      </div>
    );
    //return (
    //  <div>Modal</div>
    //);
  }
}

ModalBase.propTypes = propTypes;
ModalBase.defaultProps = defaultProps;
