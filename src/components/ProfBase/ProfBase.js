import React, { Component, PropTypes }  from 'react';

import './profbase.less';

const propTypes = {
  isCurrentIn: PropTypes.string,
  data: PropTypes.object
};

const defaultProps = {
  data: {}
};

function ProfEdit(props) {
  return (
    <section className={props.name}>
      <form className="edit-data">
        <section>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" value="" placeholder="You Name..." />
          </div>
          <div className="form-group">
            <label>Position</label>
            <input type="text" className="form-control" value="" placeholder="You Position..." />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-control" value="" placeholder="You Address..." />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" value="" placeholder="You Email..." />
          </div>
          <div className="form-group">
            <label>Tel</label>
            <input type="text" className="form-control" value="" placeholder="You Tel..." />
          </div>
          <div className="form-group">
            <label>Site</label>
            <input type="text" className="form-control" value="" placeholder="You Site..." />
          </div>
          <div className="form-group">
            <label>About</label>
            <textarea className="form-control" rows="4" placeholder="Create about..."></textarea>
          </div>
          <div className="form-group">
            <label>Purpose</label>
            <textarea className="form-control" rows="4" placeholder="Create purpose..."></textarea>
          </div>
        </section>
        <div className="submit-group">
          <div className="container-m">
            <button type="submit" className="btn btn-primary btn-sm" disabled="disabled">Save</button> <button className="btn btn-default btn-sm">Cancel</button>
          </div>
        </div>
      </form>
    </section>
  );
}

function ProfView(props) {
  return (
    <section className={props.name}>
      <section>
        <h4 className="user-name">{props.data.name}</h4>
        <div><strong>"{props.data.position}"</strong></div>
      </section>
      <section>
        <h4>Contacts</h4>
        <small>
          <cite title={props.data.address}>
            <span>{props.data.address}</span>
          </cite>
        </small>
        <p>
          <span>{props.data.mail}</span>
          <br />
          <span>{props.data.tel}</span>
          <br />
          <a href={props.data.site} target="_blank">{props.data.site}</a>
          <br />
        </p>
      </section>
      <section>
        <h4>About - Activity</h4>
        <p>{props.data.about}</p>
      </section>
      <section>
        <h4>Purpose of registration</h4>
        <p>{props.data.purpose}</p>
      </section>
    </section>
  );
}

function DiscountView(props) {
  return (
    <div className={props.name}>
      <h5>Discount <small>{props.data}</small></h5>
    </div>
  );
}

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
      active: null,
      edit: (<ProfEdit name="profile-edit" />),
      discount: this.props.data.discount ? (<DiscountView name="discount" data={this.props.data.discount} />) : null
    };
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
            <i className="icon"></i>
          </span>
        </div>
      </div>
    :
      <div className="profile-image">
        {this._renderUserImg()}
      </div>
    ;
  }

  _renderProfileData () {
    return this.props.isCurrentIn ? this.state.edit : (<ProfView name="view" data={this.props.data} />);
  }

  render() {
    return (
      <div className="prof-base">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            {this._renderProfileImage()}
            <span>{this.state.discount}</span>
            <br />
            <br />
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
