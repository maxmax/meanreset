import React from 'react'
import { Link } from 'react-router';

import FlexContainer from '../components/FlexContainer';
import Section from '../elements/Section';
import Button from '../elements/Button';

import AsideLayout from '../layout/AsideLayout';

export default React.createClass({
  render() {

    const instanceMediaqueries = (
      <Section className="_xs">
        <FlexContainer className="_vertical">
          <div className="media-queries"></div>
        </FlexContainer>
      </Section>
    );

    return (
      <AsideLayout>
        {instanceMediaqueries}
      </AsideLayout>
    );

  }
})
