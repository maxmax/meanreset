import React from 'react'
import { Link } from 'react-router';

import FlexContainer from '../components/FlexContainer';
import Col from '../components/Col';
import Thumb from '../components/Thumb';
import ContainerMedia from '../elements/ContainerMedia';
import Section from '../elements/Section';
import Button from '../elements/Button';

import AsideLayout from '../layout/AsideLayout';

export default React.createClass({

  //constructor(props) {
  //  super(props);
  //  this.state = {
  //    modalactive: false
  //  };
  //}

  render() {

    //<div className="wrapper">Modal content!</div>

    const instanceFlexContainer = (
      <Section>
        <br />
        <br />
        <FlexContainer>
          <Col>
            <Thumb
              image="/media/book/b1.png"
              size="cover"
              className="_h-sm"
            />
          </Col>
          <Col>
            <Thumb
              image="/media/book/b2.png"
              size="cover"
              className="_h-sm"
            />
          </Col>
          <Col>
            <Thumb
              image="/media/book/b3.png"
              size="cover"
              className="_h-sm"
            />
          </Col>
          <Col>
            <Thumb
              image="/media/book/b4.png"
              size="cover"
              className="_h-sm"
            />
          </Col>
          <Col>
            <Thumb
              image="/media/book/b5.png"
              size="cover"
              className="_h-sm"
            />
          </Col>
          <Col>
            <Thumb
              image="/media/book/b6.png"
              size="cover"
              className="_h-sm"
            />
          </Col>
          <Col>
            <Thumb
              image="/media/book/b7.png"
              size="cover"
              className="_h-sm text-center"
            >
              <small>1. Lorem Ipsum</small>
            </Thumb>
          </Col>
          <Col>
            <Thumb
              image="/media/book/b8.png"
              size="cover"
              className="_h-sm text-center"
            >
              <small>2. Lorem Simply</small>
            </Thumb>
          </Col>
          <Col>
            <Thumb
              image="/media/book/b9.png"
              size="cover"
              className="_h-sm text-center"
            >
              <small>3. Lorem Dummy</small>
            </Thumb>
          </Col>
        </FlexContainer>
      </Section>
    );

    const instanceFlexContainer0 = (
      <Section>
        <FlexContainer>
          <Col>
            <Thumb
              image="/media/book/b01.jpg"
              size="cover"
              className="_h-lg-2 _screen"
              link="#"
            >
              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</span>
            </Thumb>
          </Col>
          <Col>
            <Thumb
              image="/media/book/a7.jpg"
              size="cover"
              className="_h-lg-2 _screen"
              link="#"
            >
              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</span>
            </Thumb>
          </Col>
          <Col>
            <Thumb
              image="/media/book/a8.jpg"
              size="cover"
              className="_h-lg-2 _screen"
              link="#"
            >
              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</span>
            </Thumb>
          </Col>
        </FlexContainer>
      </Section>
    );

    const instanceFlexContainer1 = (
      <Section>
        <FlexContainer>
          <Col>
            <Thumb>
              <p>
                <strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</strong>
              </p>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </Thumb>
          </Col>
          <Col>
            <Thumb>
              <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </Thumb>
          </Col>
          <Col>
            <Thumb>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </Thumb>
          </Col>
        </FlexContainer>
      </Section>
    );

    const instanceFlexContainer2 = (
      <Section>
        <FlexContainer>
          <Col className="col-6">
            <Thumb>
              <p>
                <strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</strong>
              </p>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </Thumb>
          </Col>
          <Col className="col-3">
            <Thumb
              image="/media/book/b10.png"
              size="cover"
              className="_h-sm"
            />
          </Col>
          <Col className="col-3">
            <Thumb>
              <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </Thumb>
          </Col>
        </FlexContainer>
      </Section>
    );

    const instanceFlexContainer3 = (
      <Section>
        <FlexContainer>
          <Col className="col-6">
            <Thumb
              image="/media/book/bb1.png"
              size="cover"
              className="_h-lg-2"
            />
          </Col>
          <Col className="col-6">
            <Thumb
              image="/media/book/bb2.png"
              size="cover"
              className="_h-lg-2"
            />
          </Col>
          <Col className="col-4">
            <Thumb
              image="/media/book/a1.jpg"
              size="cover"
              className="_h-lg-2"
            />
          </Col>
          <Col className="col-4">
            <Thumb
              image="/media/book/a2.jpg"
              size="cover"
              className="_h-lg-2"
            />
          </Col>
          <Col className="col-4">
            <Thumb
              image="/media/book/a3.jpg"
              size="cover"
              className="_h-lg-2"
            />
          </Col>
          <Col className="col-4">
            <Thumb
              image="/media/book/a4.jpg"
              size="cover"
              className="_h-lg-2"
            />
          </Col>
          <Col className="col-4">
            <Thumb
              image="/media/book/a6.jpg"
              size="cover"
              className="_h-lg-2"
            />
          </Col>
          <Col className="col-4">
            <Thumb
              image="/media/book/a5.jpg"
              size="cover"
              className="_h-lg-2"
            />
          </Col>
        </FlexContainer>
      </Section>
    );

    return (
      <AsideLayout>
        <br />
        <br />
        {instanceFlexContainer}
        <hr />
        {instanceFlexContainer0}
        <hr />
        {instanceFlexContainer1}
        <hr />
        {instanceFlexContainer2}
        {instanceFlexContainer3}
        <br />
        <br />
      </AsideLayout>
    );

  }
})
