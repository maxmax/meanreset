import React, { PropTypes }  from 'react';
import './modalbase.less';

const propTypes = {
  active: PropTypes.string
};

const defaultProps = {
  active: null
};

class ModalBase extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active || null
    };
  }

  _renderWrapper () {
    if (!this.state.active) { return null; }

    const style = {
      display: 'block'
    };

    const intmodal = (
      <div className="modal fade in modal-base" role="dialog" style={style}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="close" onClick={this.props.update}></div>
              <h2>{this.state.active}</h2>
            </div>
          </div>
        </div>
      </div>
    );

    const intbackdrop = (
      <div className="modal-backdrop fade in"></div>
    );

    return (
      <div>
        {intmodal}
        {intbackdrop}
      </div>
    );
  }

  render() {
    return this._renderWrapper();
  }
}

ModalBase.propTypes = propTypes;
ModalBase.defaultProps = defaultProps;

export default ModalBase;
