import React from 'react'
import { Link } from 'react-router';

import Jumbotron from '../components/Jumbotron';
import ContainerMedia from '../elements/ContainerMedia';
import Section from '../elements/Section';
import Button from '../elements/Button';

import AsideLayout from '../layout/AsideLayout';

export default React.createClass({
  render() {

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

    return (
      <AsideLayout>
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
      </AsideLayout>
    );

  }
})
