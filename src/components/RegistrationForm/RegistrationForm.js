import React, { Component, PropTypes }  from 'react';

//import './profbase.less';

const propTypes = {
  isCurrentIn: PropTypes.string,
  data: PropTypes.object,
  typeprof: PropTypes.string
};

const defaultProps = {
  data: {},
  typeprof: "option1"
};

function SignupReq(props) {
  return (
    <section className={props.name}>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" value="" placeholder="You Name..." />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" value="" placeholder="You Email..." />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Password" />
      </div>
    </section>
  );
}

function BaseInfo(props) {
  return (
    <section className={props.name}>
      <div className="form-group">
        <label>Address</label>
        <input type="text" className="form-control" value="" placeholder="address..." />
      </div>
      <div className="form-group">
        <label>Telephone</label>
        <input type="text" className="form-control" value="" placeholder="Telephone..." />
      </div>
      <div className="form-group">
        <label>Company</label>
        <input type="text" className="form-control" value="" placeholder="Company name..." />
      </div>
      <div className="form-group">
        <label>Position</label>
        <input type="text" className="form-control" value="" placeholder="Trade Consultant..." />
      </div>
      <div className="form-group">
        <label>Photo</label>
        <input type="file"  />
      </div>
    </section>
  );
}

function LegalInfo(props) {
  return (
    <section className={props.name}>
      <div className="form-group">
        <label>Address</label>
        <input type="text" className="form-control" value="" placeholder="address..." />
      </div>
      <div className="form-group">
        <label>Telephone</label>
        <input type="text" className="form-control" value="" placeholder="Telephone..." />
      </div>
      <div className="form-group">
        <label>Company</label>
        <input type="text" className="form-control" value="" placeholder="Company name..." />
      </div>
      <div className="form-group">
        <label>Company Type</label>
        <input type="text" className="form-control" value="" placeholder="Inc..." />
      </div>
      <div className="form-group">
        <label>Company logo</label>
        <input type="file"  />
        <p className="help-block">Downloaded company logo (svg, png, jpg)</p>
      </div>
      <div className="form-group">
        <label>Services</label>
        <input type="text" className="form-control" value="" placeholder="Company Services..." />
      </div>
    </section>
  );
}

class RegistrationForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checkebbar: true,
      signup: (<SignupReq name="base-signup" />),
      typeprof: this.props.typeprof,
      typestate: this.props.typeprof === 'option1' ? (<BaseInfo name="base-info" />) : (<LegalInfo name="legal-info" />)
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      typeprof: event.target.value,
      typestate: event.target.value === 'option1' ? (<BaseInfo name="base-info" />) : (<LegalInfo name="legal-info" />)
    });
  }

  _checkebType () {
    if (!this.state.checkebbar) { return null; }
    return (
      <section>
        <div className="form-group">
          <div className="checkbox">
            <label className="checkbox-inline">
              <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked={this.state.typeprof == "option1"} onClick={this.handleChange} /> Base
            </label>
            <label className="checkbox-inline">
              <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" checked={this.state.typeprof == "option2"} onClick={this.handleChange} /> Legal entity
            </label>
          </div>
        </div>
        <section>{this.state.typestate}</section>
      </section>
    );
  }

  _renderForm () {
    return (
      <section className="profile-edit">
        <form className="edit-data">
          <section>{this.state.signup}</section>
          <section>{this._checkebType()}</section>
          <section>
            <div className="form-group">
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> If you agree with the terms
                </label>
              </div>
            </div>
          </section>
          <div className="submit-group">
            <div className="container-m">
              <button type="submit" className="btn btn-primary" disabled="disabled">Create Account</button>
            </div>
          </div>
        </form>
      </section>
    );
  }

  render() {
    console.log("typeprof:", this.state.typeprof);
    return this._renderForm();
  }
}

RegistrationForm.propTypes = propTypes;
RegistrationForm.defaultProps = defaultProps;

export default RegistrationForm;
