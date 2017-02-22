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
        <Section className="_md">
          <h1>h1. Base heading</h1>
          <h2>h2. Base heading</h2>
          <h3>h3. Base heading</h3>
          <h4>h4. Base heading</h4>
          <h5>h5. Base heading</h5>
          <h6>h6. Base heading</h6>
          <br />
          <h1>h1. Base heading <small>Secondary text</small></h1>
          <h2>h2. Base heading <small>Secondary text</small></h2>
          <br />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <br />
          <p>You can use the mark tag to <mark>highlight</mark> text.</p>
          <p><del>This line of text is meant to be treated as deleted text.</del></p>
          <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
          <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
          <p><u>This line of text will render as underlined</u></p>
          <p><small>This line of text is meant to be treated as fine print.</small></p>
          <p><strong>rendered as bold text</strong></p>
          <p><em>rendered as italicized text</em></p>
          <br />
          <p className="text-left">Left aligned text.</p>
          <p className="text-center">Center aligned text.</p>
          <p className="text-right">Right aligned text.</p>
          <p className="text-justify">Justified text.</p>
          <p className="text-nowrap">No wrap text.</p>
          <br />
          <p className="text-lowercase">Lowercased text.</p>
          <p className="text-uppercase">Uppercased text.</p>
          <p className="text-capitalize">Capitalized text.</p>
          <br />
          <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr></p>
          <br />
          <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
          </blockquote>
          <blockquote className="blockquote-reverse">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
          </blockquote>
          <br />
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>Nulla volutpat aliquam velit</li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
          </ul>
          <br />
          <ol>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>Nulla volutpat aliquam velit</li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
          </ol>
          <br />
          <ul className="list-inline">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>Nulla volutpat aliquam velit</li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
          </ul>
          <br />
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
