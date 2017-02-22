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
      <Section className="_test">
        <FlexContainer>
          <Col>
            <Thumb
              image="/media/book/retro-science-fiction-covers-4.jpg"
              size="cover"
              className="_h-sm"
            />
          </Col>
          <Col>
            <Thumb
              image="/media/wallhaven.jpg"
              size="cover"
              className="_h-sm"
            />
          </Col>
          <Col>
            <Thumb
              image="/media/book/oyster-stand.jpg"
              size="cover"
              className="_h-sm"
            />
          </Col>
          <Col>
            <Thumb
              image="/media/book/gettyimages-73553620.jpg"
              size="cover"
              className="_h-sm"
            />
          </Col>
          <Col>
            <Thumb
              image="/media/book/ef60aff78548b2bac52b08c456deb4e6.jpg"
              size="cover"
              className="_h-sm"
            />
          </Col>
          <Col>
            <Thumb
              image="/media/book/by_themascot.jpg"
              size="cover"
              className="_h-sm"
            />
          </Col>
        </FlexContainer>
      </Section>
    );

    const instanceFlexContainer2 = (
      <Section className="_md _test">
        <FlexContainer className="_vertical _align_center">
          <Col>
            <Thumb
              image="/media/book/bef295ff57b0c5994fea8a7428fecb5f.jpg"
              size="cover"
              className="_h-sm"
            >
              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</span>
            </Thumb>
          </Col>
          <Col>
            <Thumb
              image="/media/book/f43ad56004888100bc41e60e4f0e9932.jpg"
              size="cover"
              className="_h-sm"
            >
              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</span>
            </Thumb>
          </Col>
        </FlexContainer>
      </Section>
    );

    const instanceFlexContainer3 = (
      <Section className="_md _auto _test">
        <FlexContainer className="_vertical _auto">
          <Col className="half thumb-test">
            <section>
              <h3>Left Half</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </section>
          </Col>
          <Col className="half thumb-test _smoke">
            <section>
              <h3>Right Half</h3>
              <p>Lorem Ipsum is simply dummy...</p>
            </section>
          </Col>
        </FlexContainer>
      </Section>
    );

    const instanceFlexContainer4 = (
      <Section className="_test">
        <FlexContainer className="_align_center _vertical-cols">
          <Col className="col-3">
            <div className="thumb-test _h-lg">col-3</div>
          </Col>
          <Col className="col-3">
            <div className="thumb-test _h-md">col-3</div>
          </Col>
          <Col className="col-3">
            <div className="thumb-test _h-lg">col-3</div>
          </Col>
          <Col className="col-3">
            <div className="thumb-test _h-xs">col-3</div>
          </Col>
          <Col className="col-4">
            <div className="thumb-test _h-sm">col-4</div>
          </Col>
          <Col className="col-4">
            <div className="thumb-test _h-md">col-4</div>
          </Col>
          <Col className="col-4">
            <div className="thumb-test">col-4</div>
          </Col>
          <Col className="col-8">
            <div className="thumb-test _h-sm">col-8</div>
          </Col>
          <Col className="col-4">
            <div className="thumb-test _h-lg">col-4</div>
          </Col>
          <Col className="col-8">
            <div className="thumb-test _h-xs">col-12</div>
          </Col>
        </FlexContainer>
      </Section>
    );

    const instanceFlexContainer5 = (
      <Section className="_test">
        <FlexContainer className="_align_center _vertical-cols">
          <Col className="col-3">
            <Thumb
              title="Title"
              link="/company"
              image="/media/devbg.jpg"
              size="cover"
              className="_h-sm"
            />
          </Col>
          <Col className="col-3">
            <Thumb
              title="Title"
              link="/company"
              image="/media/claus-deleuran-bjorn-ironside-hastings.jpg"
              size="cover"
              className="_h-md"
            />
          </Col>
          <Col className="col-3">
            <Thumb
              title="Title"
              link="/company"
              image="/media/4a12e929deef7c8a90de50fe243d3a08.jpg"
              size="cover"
              className="_h-lg"
            />
          </Col>
          <Col className="col-3">
            <Thumb
              title="Title"
              link="/company"
              image="/media/battlezone_1.gif"
              size="cover"
              className="_h-xs"
            />
          </Col>
        </FlexContainer>
      </Section>
    );

    return (
      <AsideLayout>
        {instanceFlexContainer}
        <br />
        {instanceFlexContainer2}
        <br />
        {instanceFlexContainer3}
        <br />
        {instanceFlexContainer4}
        <br />
        {instanceFlexContainer5}
      </AsideLayout>
    );

  }
})
