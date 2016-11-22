import React, { PropTypes }  from 'react';

//import './profbase.less';

const propTypes = {
  isCurrentIn: PropTypes.string,
  data: PropTypes.object
};

const defaultProps = {
  data: {}
};

class Profs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: null
    };
  }
  //
  _renderData () {
    //if (!this.props.data.items) { return null; }
    if (!this.props.data) {
      return (
        <div className="row">
          <div className='col-md-12 text-center'>Сategory is empty!</div>
        </div>
      );
    }
    //const { users } = this.props.data;
    const thumbslist = this.props.data.map((item, index) => {
      return (
        <div className="col-xs-12 col-sm-6 col-lg-3" key={index}>
          <a href="#" className="prof">
            <img src={item.profileImage} />
            <div className="caption">
              <h4>{item.name}</h4>
              <div className="small">{item.position}</div>
            </div>
          </a>
        </div>
      );
    });
    return (thumbslist ? (<div className="row">{thumbslist}</div>) : null);
  }
  //

  render() {
    console.log("Users:", this.props.data);
    return (
      <div className="profs">
        {this._renderData()}
      </div>
    );
  }
}

Profs.propTypes = propTypes;
Profs.defaultProps = defaultProps;

export default Profs;
