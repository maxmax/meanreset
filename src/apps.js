import React from 'react';
import { render } from 'react-dom';

import './Base/global.less';

export default class BaseWrapper extends React.Component {
  render() {

    var codeSnippetsTest = {
      active: true,
      codes: [48348, 28923, 39080],
      city: "London"
    };

    return (
      <section>
        <h1 className="text-center">BaseWrapper</h1>
      </section>
    );
  }
}

//<BaseWrapper data={landingpagedata} />
render(
  <BaseWrapper />,
  document.getElementById( 'app' )
);
