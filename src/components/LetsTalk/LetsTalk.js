import React, { PropTypes }  from 'react';
import ContainerMedia from '../../elements/ContainerMedia/ContainerMedia';

import './letstalk.less';

const propTypes = {
  data: PropTypes.object,
  address: PropTypes.object
};

const defaultProps = {
  data: {
    title: 'Create Title!',
    description: 'Create Description'
  },
  address: null
};

//Shema
//title: 'Lets Talk About Your Disease',
//description: 'WE ARE READY TO WORK WITH YOU',
//img: '/media/billionphotos.jpg',
//btn: 'GET IN TOUCH'

class LetsTalk extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      itstyle: this.props.data.itstyle || null,
      active: false,
      class: this.props.data.class || 'text-center',
      containerMediaOpacity: this.props.data.containerMediaOpacity || '1',
      containerMediaClass: this.props.data.containerMediaClass || 'backdrop'
    };
    this._openMdal = this._openMdal.bind(this);
  }

  _openMdal () {
    this.setState({active: !this.state.active});
  }

  _addressItems () {
    if (!this.props.address.items) {return null;}
    const intitems = this.props.address.items.map((item, index) => {
      return (
        <address key={index}>
          <h3>{item.name}</h3>
          <div className="description">"{item.description}"</div><br />
          <a href={'mailto:' + item.mail}>{item.mail}</a><br />
          <span>{item.tel}</span>
        </address>
      );
    });
    return (intitems ? (<div>{intitems}</div>) : null);
  }

  _addressInt () {
    if (!this.props.address) { return <section className="text-info">Empty</section>; }
    return (
      <section>
        <address>
          <h2>{this.props.address.title}</h2>
          <div dangerouslySetInnerHTML={{__html: this.props.address.int}} />
          <abbr title="Phone">P:</abbr>
          <span>{this.props.address.phone}</span><br />
          <a href={'mailto:' + this.props.address.mail}>{this.props.address.mail}</a><br />
          <a href={this.props.address.site}>{this.props.address.site}</a>
        </address>
        {this._addressItems()}
      </section>
    );
  }

  _formBackdrop () {
    if (!this.state.active) { return null; }
    return (
      <div className="modal-backdrop fade in"></div>
    );
  }

  _formMdal () {
    if (!this.state.active) { return null; }
    const style = {
      display: 'block'
    };
    return (
      <div className="modal fade in" role="dialog" style={style}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="close" onClick={this._openMdal.bind(this)}></div>
              {this._addressInt()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  _renderTitle () {
    if (!this.props.data.title) { return null; }
    return (
      <h2>{this.props.data.title}</h2>
    );
  }

  _renderDesc () {
    if (!this.props.data.description) { return null; }
    return (
      <p>{this.props.data.description}</p>
    );
  }

  _renderImgBg () {
    if (!this.props.data.img) { return null; }
    return (
      <ContainerMedia
        img={this.props.data.img}
        opacity={this.state.containerMediaOpacity}
        class={this.state.containerMediaClass}
      />
    );
  }

  _renderBtn () {
    if (!this.props.data.btn) { return null; }
    return (
      <a className="btn btn-default" role="button" onClick={this._openMdal.bind(this)}>{this.props.data.btn}</a>
    );
  }

  render() {
    return (
      <div className={'lets-talk ' + this.state.class} style={this.state.itstyle}>
        {this._renderImgBg()}
        <div className="container">
          {this._renderTitle()}
          {this._renderDesc()}
          {this._renderBtn()}
        </div>
        {this._formMdal()}
        {this._formBackdrop()}
      </div>
    );
  }
}

LetsTalk.propTypes = propTypes;
LetsTalk.defaultProps = defaultProps;

export default LetsTalk;
