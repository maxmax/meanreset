import React from 'react'
import { Link } from 'react-router';

import ContainerMedia from '../elements/ContainerMedia';
import Section from '../elements/Section';
import Button from '../elements/Button';

import AsideLayout from '../layout/AsideLayout';

export default React.createClass({
  render() {

    const instanceSection = (
      <div>
        <br />
        <br />
        <br />
        <br />
        <Section className="_test">
          <h2>Section Base</h2>
          <p>lorem ipsum</p>
        </Section>
        <br />
        <Section className="_md _test">
          <h2>Section md</h2>
          <p>lorem ipsum</p>
        </Section>
        <br />
        <Section className="_sm _test">
          <h2>Section sm</h2>
          <p>lorem ipsum</p>
        </Section>
        <br />
        <Section className="_xs _test">
          <h2>Section xs</h2>
          <p>lorem ipsum</p>
        </Section>
      </div>
    );

    return (
      <AsideLayout>
        {instanceSection}
      </AsideLayout>
    );

  }
})
