import React, { PropTypes }  from 'react';
import ModalBase from '../ModalBase/ModalBase';

import './userrequests.less';

const propTypes = {
  title: PropTypes.string,
  data: PropTypes.object
};

const defaultProps = {
  title: "My Requests",
  data: {}
};

//Shema
//title: 'Lets Talk About Your Disease',
//description: 'WE ARE READY TO WORK WITH YOU',
//img: '/media/billionphotos.jpg',
//btn: 'GET IN TOUCH'

class UserRequest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'select',
      newform: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    //console.log(event.target.value)
    this.setState({
      value: event.target.value,
      newform: event.target.value
    });
  }

  _updateData(config) {
    this.setState({
      value: 'select',
      newform: null
    });
  }

  //_renderTitle () {
  //  //if (!this.props.data.title) { return null; }
  //  return (
  //    <h2>{this.props.title}</h2>
  //  );
  //}

  _newRequests () {
    //if (!this.props.data.title) { return null; }
    //<a href="#" className="btn btn-primary btn-lg">New Requests</a>
    return (
      <div className="new-requests">
        <div className="well">
          <div className="form-group">
            <label>Create Requests</label>
            <select value={this.state.value} onChange={this.handleChange} className="form-control">
              <option value="select">Select Requests</option>
              <option value="legal">Legal</option>
              <option value="manufacturer">Manufacturer</option>
              <option value="insurance">Insurance</option>
              <option value="bank">Bank</option>
              <option value="question">Question</option>
            </select>
          </div>
        </div>
      </div>
    );
  }

  _renderList () {
    if (!this.props.data.request[0]) { return null; }
    const { request } = this.props.data;
    const objlist = request.map((item, index) => {
      return (
        <li key={index} className={"request role-" + item.role + " status-" + item.status.role}>
          <div className="title">{item.title}</div>
          <div className="date small">
            <div>{item.status.openDate}</div>
            <div>{item.status.closeDate}</div>
          </div>
          <div><p>{item.text}</p></div>
          <div className="clearfix"></div>
          <div className="pull-left">
            <span className={"label label-" + item.status.label}>{item.status.text}</span>
          </div>
          <div>
            <div className="btn-group btn-group-xs pull-right" role="group">
              <button type="button" className="btn btn-info">View</button>
              <button type="button" className="btn btn-primary">Edit</button>
            </div>
            <div className="clearfix"></div>
          </div>
        </li>
      );
    });
    return (objlist ? (<ul className="list-unstyled">{objlist}</ul>) : null);
  }

  _formMdal () {
    if (!this.state.newform) { return null; }
    return (
      <ModalBase active={this.state.newform} update={this._updateData.bind(this)} />
    );
  }

  render() {
    //console.log("value:", this.state.value)
    //console.log("newform:", this.state.newform)
    return (
      <div className="user-requests">
        <div className="container">
          <div className="row">
            <div className='col-md-4'>
              {this._newRequests()}
            </div>
            <div className='col-md-8'>
              <h2>{this.props.title}</h2>
              {this._renderList()}
            </div>
          </div>
        </div>
        <div>{this._formMdal()}</div>
      </div>
    );
  }
}

UserRequest.propTypes = propTypes;
UserRequest.defaultProps = defaultProps;

export default UserRequest;
