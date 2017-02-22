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
  render() {

    const instanceFlexContainer = (
      <Section>
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
              className="_h-sm"
            />
          </Col>
          <Col>
            <Thumb
              image="/media/book/b8.png"
              size="cover"
              className="_h-sm"
            />
          </Col>
          <Col>
            <Thumb
              image="/media/book/b9.png"
              size="cover"
              className="_h-sm"
            />
          </Col>
          <Col>
            <Thumb
              image="/media/book/b01.jpg"
              size="cover"
              className="_h-lg-2"
            >
              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</span>
            </Thumb>
          </Col>
          <Col>
            <Thumb
              image="/media/book/b02.jpg"
              size="cover"
              className="_h-lg-2"
            >
              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</span>
            </Thumb>
          </Col>
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
              image="/media/book/retro-science-fiction-covers-4.jpg"
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
              image="/media/book/f43ad56004888100bc41e60e4f0e9932.jpg"
              size="cover"
              className="_h-lg-2"
            />
          </Col>
          <Col className="col-6">
            <Thumb
              image="/media/book/oyster-stand.jpg"
              size="cover"
              className="_h-lg-2"
            />
          </Col>
          <Col className="col-4">
            <Thumb
              image="/media/book/bef295ff57b0c5994fea8a7428fecb5f.jpg"
              size="cover"
              className="_h-lg-2"
            />
          </Col>
          <Col className="col-4">
            <Thumb
              image="/media/book/bef295ff57b0c5994fea8a7428fecb5f.jpg"
              size="cover"
              className="_h-lg-2"
            />
          </Col>
          <Col className="col-4">
            <Thumb
              image="/media/book/bef295ff57b0c5994fea8a7428fecb5f.jpg"
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
        {instanceFlexContainer2}
        {instanceFlexContainer3}
        <br />
        <br />
      </AsideLayout>
    );

  }
})
