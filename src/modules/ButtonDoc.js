import React from 'react'
import { Link } from 'react-router';

import Section from '../elements/Section';
import Button from '../elements/Button';

import AsideLayout from '../layout/AsideLayout';

export default React.createClass({
  render() {

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
      <AsideLayout>
        {instanceButton}
        {instanceButtonBlock}
        {instanceButtonSizes}
      </AsideLayout>
    );

  }
})
