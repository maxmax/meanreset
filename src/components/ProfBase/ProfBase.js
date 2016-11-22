import React, { Component, PropTypes }  from 'react';

import './profbase.less';

const propTypes = {
  isCurrentIn: PropTypes.string,
  data: PropTypes.object
};

const defaultProps = {
  data: {}
};

//Shema
//logo: '/lang-logo.png',
//title: 'Hello and a very warm welcome!',
//description: 'We are a customer-service oriented team of web developers committed to the highest quality of our work and we stand behind it.',
//video: '/media/videobg.mp4',
//img: '/media/billionphotos.jpg',
//down: '#AboutContainer'
//Countdown: ''
//let OPTIONS = { endDate: '06/03/2018 10:12 AM', prefix: 'App started!' }

class ProfBase extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: null
    };
  }

  _renderProfDiscount () {
    if (!this.props.data.discount) { return null; }
    return (
      <div>
        <h5>Discount <small>{this.props.data.discount}</small></h5>
      </div>
    );
  }

  _renderUserImg () {
    if (!this.props.data.profileImage) { return null; }
    return (
      <img src={this.props.data.profileImage} />
    );
  }

  _renderProfileImage () {
    return this.props.isCurrentIn ?
      <div className="profile-image edit-image">
        {this._renderUserImg()}
        <div className="btn-edit-image">
          <span>
            <span>Click here to change profile image</span>
            <i className="glyphicon glyphicon-camera"></i>
          </span>
        </div>
      </div>
    :
      <div className="profile-image">
        {this._renderUserImg()}
      </div>
    ;
  }

  //
  _renderProfileData () {
    return this.props.isCurrentIn ?
      <section className="profile-edit">
        <form className="edit-data">
          <section>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" value={this.props.data.name} placeholder="You Name..." />
            </div>
            <div className="form-group">
              <label>Position</label>
              <input type="text" className="form-control" value={this.props.data.position} placeholder="You Position..." />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" className="form-control" value={this.props.data.address} placeholder="You Address..." />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" value={this.props.data.email} placeholder="You Email..." />
            </div>
            <div className="form-group">
              <label>Tel</label>
              <input type="text" className="form-control" value={this.props.data.tel} placeholder="You Tel..." />
            </div>
            <div className="form-group">
              <label>Site</label>
              <input type="text" className="form-control" value={this.props.data.site} placeholder="You Site..." />
            </div>
            <div className="form-group">
              <label>About</label>
              <textarea className="form-control" rows="4" placeholder="Create about...">{this.props.data.about}</textarea>
            </div>
            <div className="form-group">
              <label>Purpose</label>
              <textarea className="form-control" rows="4" placeholder="Create purpose...">{this.props.data.purpose}</textarea>
            </div>
          </section>
          <div className="submit-group">
            <div className="container-m">
              <button type="submit" className="btn btn-primary btn-sm" disabled="disabled">Save</button> <button className="btn btn-default btn-sm">Cancel</button>
            </div>
          </div>
        </form>
      </section>
    :
      <section className="profile-view">
        <section>
          <h4 className="user-name">{this.props.data.name}</h4>
          <div><strong>"{this.props.data.position}"</strong></div>
        </section>
        <section>
          <h4>Contacts</h4>
          <small>
            <cite title={this.props.data.address}>
              <span>{this.props.data.address}</span>
            </cite>
          </small>
          <p>
            <span>{this.props.data.mail}</span>
            <br />
            <span>{this.props.data.tel}</span>
            <br />
            <a href={this.props.data.site} target="_blank">{this.props.data.site}</a>
            <br />
          </p>
        </section>
        <section>
          <h4>About - Activity</h4>
          <p>{this.props.data.about}</p>
        </section>
        <section>
          <h4>Purpose of registration</h4>
          <p>{this.props.data.purpose}</p>
        </section>
      </section>
    ;
  }
  //

  render() {
    console.log("User:", this.props);
    return (
      <div className="prof-base">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            {this._renderProfileImage()}
            {this._renderProfDiscount()}
          </div>
          <div className="col-sm-6 col-md-8">
            {this._renderProfileData()}
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

ProfBase.propTypes = propTypes;
ProfBase.defaultProps = defaultProps;

export default ProfBase;
