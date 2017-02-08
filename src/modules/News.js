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
      <Jumbotron className="text-center _blue">
        <Section className="_xs _center">
          <h2>News</h2>
          <p>Head description...</p>
        </Section>
      </Jumbotron>
    );

    return (
      <AsideLayout>
        {instanceJumbotron}
      </AsideLayout>
    );

  }
})
