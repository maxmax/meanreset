import React from 'react';

console.time('New Array');

class TypeUi extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      role: null,
      toggle: null,
      current: false,
      active: 0,
      term: '',
      modalVarstyle: {
        display: 'block'
      }
    };

    this.loadData();

  }

  loadData() {
    this.state = {
      data: this.props.data,
      role: this.props.role
    };
  }

  //componentDidMount() {
  //  // this would fetch or connect to a store
  //  this.setState({ name: "Michael" })
  //}

  updateData(config) {
    //console.log("up!");
    this.setState(config);
  }

  renderThisMapFn () {
    if (!this.state) { return null; }
    return (
      <div className="row">

        <div className="col-xs-12 col-lg-12">
          <h2 className="section-heading">Typography</h2>
        </div>

        <div className="col-xs-12 col-lg-12">
          <div className="well">
            <h1>h1. Type heading</h1>
            <h2>h2. Type heading</h2>
            <h3>h3. Type heading</h3>
            <h4>h4. Type heading</h4>
            <h5>h5. Type heading</h5>
            <h6>h6. Type heading</h6>
            <p className="lead">Intrusion Countermeasures Electronics (ICE) is a term used in cyberpunk literature to refer to security programs which protect computerized data from being accessed by hackers.</p>
            <p><strong>Origin of term</strong> The term was popularized by William Gibson in his short story "Burning Chrome", which also introduced the term cyberspace, and his subsequent novel Neuromancer. According to the Jargon File, as well as Gibson's own acknowledgements, the term ICE was originally coined by Tom Maddox.</p>
            <p><strong>Description of ICE</strong> When viewed in a cyberspace virtual reality environment, these constructs are often represented by actual walls of ice, stone, or metal. Black ICE refers to ICE that are capable of killing the intruder if deemed necessary or appropriate; some forms of black ICE may be artificially intelligent.</p>
            <p><strong>Real-world usage</strong> Though real-life firewalls, anti-virus software and similar programs fall under this classification, the term has little real world significance and remains primarily a science fiction concept. This can be attributed to the fact that using the term "electronics" to describe software products (such as firewalls) is somewhat of a misnomer.</p>
          </div>
          <br/>
          <br/>
          <br/>
        </div>

        <div className="col-xs-12 col-lg-12">
          <h2 className="section-heading">Grid</h2>
        </div>

        <div className="col-xs-12 col-sm-6 col-lg-4"><div className="media-queries">4</div></div>
        <div className="col-xs-12 col-sm-6 col-lg-4"><div className="media-queries">4</div></div>
        <div className="col-xs-12 col-sm-6 col-lg-4"><div className="media-queries">4</div></div>
        <div className="col-xs-12 col-sm-6 col-lg-4"><div className="media-queries">4</div></div>
        <div className="col-xs-12 col-sm-6 col-lg-4"><div className="media-queries">4</div></div>
        <div className="col-xs-12 col-sm-6 col-lg-4"><div className="media-queries">4</div></div>
        <div className="col-xs-12 col-lg-6"><div className="media-queries">6</div></div>
        <div className="col-xs-12 col-lg-6"><div className="media-queries">6</div></div>

      </div>
    );
  }

  render() {
    return (
      <section className='TypeUi'>
        <section>{this.renderThisMapFn()}</section>
      </section>
    );
  }
}

console.timeEnd('New Array'); // New Array: 0.344ms

export default TypeUi;
