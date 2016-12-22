import React, { PropTypes }  from 'react';

const propTypes = {
  img: PropTypes.string,
  caption: PropTypes.string,
  col: PropTypes.string,
  size: PropTypes.string,
  link: PropTypes.string
};

const defaultProps = {
  img: '',
  caption: '',
  col: '',
  link: null
};

class OneThumb extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      img: this.props.img || null,
      caption: this.props.caption || null,
      col: this.props.col || 'col-xs-12 col-sm-6 col-lg-3',
      size: this.props.size || '200px',
      active: false
    };
    this._openMdal = this._openMdal.bind(this);
  }

  _openMdal () {
    this.setState({active: !this.state.active});
  }

  _formBackdrop () {
    if (!this.state.active) { return null; }
    return (
      <div className="modal-backdrop fade in"></div>
    );
  }

  _renderImg (el,size) {
    if (!el) { return <div className="thumbs-img thumbs-img-empty"></div>; }
    var style = {
      backgroundImage: 'url(' + el + ')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: size
    };
    return (
      <div className="thumbs-img" style={style}></div>
    );
  }

  _renderCaption () {
    if (!this.state.caption) { return null; }
    return (
      <div className="caption">
        {this.state.caption}
      </div>
    );
  }

  _renderLink () {
    if (!this.props.link) { return null; }
    return (
      <div className="thumb-link" onClick={this._openMdal.bind(this)}></div>
    );
  }

  _formMdal () {
    if (!this.state.active) { return null; }
    const style = {
      display: 'block'
    };
    return (
      <div className="modal fade in" role="dialog" style={style}>
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="close" onClick={this._openMdal.bind(this)}></div>
              <div className="row">
                <div className="col-xs-12 col-sm-4 col-lg-4">
                  <div class="main-icon">
                    <img src="http://image.flaticon.com/icons/svg/184/184635.svg" width="224" height="224" alt="Chemistry free icon" title="Chemistry free icon" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-8 col-lg-8">
                  <h3>Make modals accessible</h3>
                  <p>Lead is a particularly dangerous soil component. The following table from the University of Minnesota categorizes typical soil concentration levels and their associated health risks.</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-lg-12">
                  <br />
                  <br />
                  <table className="table">
                    <caption>Children and pregnant women should avoid contact with soil estimated total lead levels above 300 ppm.</caption>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Lead Level</th>
                        <th>Extracted lead (ppm)</th>
                        <th>Estimated total lead (ppm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Low</td>
                        <td>43</td>
                        <td>500</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Medium</td>
                        <td>43</td>
                        <td>500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={this.state.col}>
        <div className='thumb'>
          {this._renderImg(this.state.img, this.state.size)}
          {this._renderCaption()}
          {this._renderLink()}
        </div>
        {this._formMdal()}
        {this._formBackdrop()}
      </div>
    );
  }
}

OneThumb.propTypes = propTypes;
OneThumb.defaultProps = defaultProps;

export default OneThumb;
