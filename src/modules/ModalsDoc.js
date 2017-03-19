import React from 'react'
import { Link } from 'react-router';

import FlexContainer from '../components/FlexContainer';
import Col from '../components/Col';
import Thumb from '../components/Thumb';
import ModalBase from '../components/ModalBase';
import ContainerMedia from '../elements/ContainerMedia';
import Section from '../elements/Section';
import Button from '../elements/Button';

//import ModalBase from '../ModalsDoc/index';

import AsideLayout from '../layout/AsideLayout';

//export default React.createClass({
export default class ModalsDoc extends React.Component {

  //state = {
  //  isOpen: false
  //}

  constructor(props) {
    super(props);
    this.state = {
      basemodal: false,
      btnmodal: false
    };
    //this._openModal = this._openModal.bind(this);
  }

  _openModal () {
    //this.setState({btnmodal: true});
    //this.setState({btnmodal: true});
  }

  _openModalTest (a) {
    console.log(a);
    this.setState({btnmodal: true});
    //this.setState({btnmodal: true});
  }

  render() {

    //console.log("this:", this.state.btnmodal);

    //const instanceBaseModal = (
    //  <Section>
    //    <ModalBase active={this.state.basemodal}>
    //      <div className="wrapper _page">Modal content!</div>
    //    </ModalBase>
    //  </Section>
    //);

    //<button onClick={this._openModal.bind(this)} >Button</button>

    const instanceBtnModal = (
      <Section>
        <button onClick={this._openModal.bind(this)} >Button</button>
        <ModalBase>
          <div className="wrapper _page">Modal content1!</div>
        </ModalBase>
      </Section>
    );

    const instanceBtnModal2 = (
      <Section>
        <button onClick={this._openModalTest.bind(this)} >Button</button>
        <ModalBase>
          <div className="wrapper _page">Modal content2!</div>
        </ModalBase>
      </Section>
    );

    //{instanceBaseModal}

    return (
      <AsideLayout>
        <br />
        <br />
        {instanceBtnModal}
        <br />
        {instanceBtnModal2}
        <br />
      </AsideLayout>
    );

  }
}
//})
