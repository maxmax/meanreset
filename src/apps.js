import React from 'react';
import { render } from 'react-dom';

import Jumbotron from './components/Jumbotron';
import LeftAside from './components/LeftAside';
import FlexContainer from './components/FlexContainer';

import ContainerMedia from './elements/ContainerMedia';
import Section from './elements/Section';
import Button from './elements/Button';

import AsideLayout from './layout/AsideLayout';

import './Base/global.less';

export default class BaseWrapper extends React.Component {
  render() {

    var codeSnippetsTest = {
      active: true,
      codes: [48348, 28923, 39080],
      city: "London"
    };

    const instanceFlexContainer = (
      <div>
        <FlexContainer>
          <div className="flex-item">1</div>
          <div className="flex-item">2</div>
          <div className="flex-item">3</div>
          <div className="flex-item">4</div>
          <div className="flex-item">5</div>
          <div className="flex-item">6</div>
        </FlexContainer>
      </div>
    );

    const instanceLeftAside = (
      <LeftAside>
        <p>replace default LeftAside</p>
      </LeftAside>
    );

    const instanceJumbotron = (
      <Jumbotron className="text-center _blue _landing">
        <Section  className="_sm _center">
          <h2>Jumbotron</h2>
          <p>lorem ipsum</p>
        </Section>
      </Jumbotron>
    );

    const instanceJumbotronV1 = (
      <Jumbotron className="text-center _green">
        <Section>
          <h2>Jumbotron</h2>
          <p>lorem ipsum</p>
          <Button className="_primary _lg">Touch</Button>
        </Section>
      </Jumbotron>
    );

    const instanceJumbotronV2 = (
      <Jumbotron className="text-center _white">
        <Section>
          <h2>Jumbotron</h2>
          <p>lorem ipsum</p>
        </Section>
      </Jumbotron>
    );

    const instanceJumbotronV3 = (
      <Jumbotron className="text-center _orange">
        <Section>
          <h2>Jumbotron</h2>
          <p>lorem ipsum</p>
        </Section>
      </Jumbotron>
    );

    const instanceJumbotronV4 = (
      <Jumbotron className="text-center _green">
        <ContainerMedia img="/media/devbg.jpg" />
        <Section>
          <h2>Jumbotron</h2>
          <p>lorem ipsum</p>
        </Section>
      </Jumbotron>
    );

    const instanceJumbotronV5 = (
      <Jumbotron className="text-center _orange">
        <ContainerMedia
          img="/media/devbg.jpg"
          opacity="1"
        />
        <Section className="_md">
          <h2>Jumbotron</h2>
          <p>lorem ipsum</p>
        </Section>
      </Jumbotron>
    );

    const instanceJumbotronV6 = (
      <Jumbotron className="text-center _orange _landing">
        <ContainerMedia
          video="/media/videobg.mp4"
          opacity="1"
        />
        <Section className="_xs _center">
          <h2>Jumbotron</h2>
          <p>lorem ipsum</p>
        </Section>
      </Jumbotron>
    );

    const instanceJumbotronV7 = (
      <Jumbotron className="text-center _green">
        <ContainerMedia
          img="/media/green.jpg"
          opacity="0.8"
          filter="grayscale(1)"
        />
        <Section className="_xs">
          <h2>Jumbotron</h2>
          <p>filter: grayscale(1)</p>
        </Section>

      </Jumbotron>
    );

    const instanceJumbotronV8 = (
      <Jumbotron className="text-center _green">
        <ContainerMedia
          img="/media/green.jpg"
          opacity="0.8"
          filter="blur(1px)"
        />
        <Section className="_xs">
          <h2>Jumbotron</h2>
          <p>filter: blur(1px) grayscale(1), sepia(1) ...</p>
        </Section>
      </Jumbotron>
    );

    const instanceJumbotronV9 = (
      <Jumbotron className="text-center _orange">
        <ContainerMedia
          img="/media/devbg.jpg"
          opacity="1"
        />
        <Section className="_md">
          <h2>Jumbotron</h2>
          <p>lorem ipsum</p>
        </Section>
      </Jumbotron>
    );

    const instanceSection = (
      <div>
        <Section className="_md _test">
          <h2>Section md</h2>
          <p>lorem ipsum</p>
        </Section>
        <Section className="_sm _test">
          <h2>Section sm</h2>
          <p>lorem ipsum</p>
        </Section>
        <Section className="_xs _test">
          <h2>Section xs</h2>
          <p>lorem ipsum</p>
        </Section>
      </div>
    );

    const instanceMediaqueries = (
      <Section className="_xs">
        <div className="media-queries">lorem ipsum</div>
      </Section>
    );

    const instanceButton = (
      <Section className="text-center">
        <br />
        <br />
        <Button>Button default</Button>
        <Button className="_success">Button success</Button>
        <Button className="_primary">Button primary</Button>
        <Button className="_info">Button info</Button>
        <Button className="_error">Button error</Button>
        <Button className="_link">Button link</Button>
        <br />
        <br />
        <br />
      </Section>
    );

    const instanceButtonBlock = (
      <Section className="_xs text-center">
        <Button className="_primary _block _lg">Button block lg</Button>
      </Section>
    );

    const instanceButtonSizes = (
      <Section className="_xs text-center">
        <Button className="_lg">Button lg</Button>
        <Button className="_sm">Button sm</Button>
        <Button className="_xs">Button xs</Button>
      </Section>
    );

    return (
      <section>
        <AsideLayout>
          {instanceLeftAside}
          {instanceJumbotron}
          {instanceJumbotronV1}
          {instanceJumbotronV2}
          {instanceJumbotronV3}
          {instanceJumbotronV4}
          {instanceJumbotronV5}
          {instanceJumbotronV6}
          {instanceJumbotronV7}
          {instanceJumbotronV8}
          {instanceJumbotronV9}
          {instanceFlexContainer}
          <br />
          <br />
          {instanceSection}
          <br />
          <br />
          {instanceMediaqueries}
          <br />
          <br />
          {instanceButton}
          <br />
          {instanceButtonBlock}
          <br />
          {instanceButtonSizes}
          <br />
          <br />
          <br />
        </AsideLayout>
      </section>
    );
  }
}

//<BaseWrapper data={landingpagedata} />
render(
  <BaseWrapper />,
  document.getElementById( 'app' )
);
