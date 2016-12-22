/*
 *  Button with progress spinned support
 *
 */

import React, { PropTypes }  from 'react';
//import PropTypes from './../PropTypes/PropTypes';

export default class PreCode extends React.Component {

  constructor(props) {
    super(props);
  }

  _renderWrapper () {
    if (!this.props.value) { return null; }
    //
    if (!library)
      var library = {};
    library.json = {
      replacer: function(match, pIndent, pKey, pVal, pEnd) {
        var key = '<span class=json-key>';
        var val = '<span class=json-value>';
        var str = '<span class=json-string>';
        var r = pIndent || '';
        if (pKey)
          r = r + key + pKey.replace(/[": ]/g, '') + '</span>: ';
        if (pVal)
          r = r + (pVal[0] == '"' ? str : val) + pVal + '</span>';
        return r + (pEnd || '');
      },
      prettyPrint: function(obj) {
        var jsonLine = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg;
        return JSON.stringify(obj, null, 3)
          .replace(/&/g, '&amp;').replace(/\\"/g, '&quot;')
          .replace(/</g, '&lt;').replace(/>/g, '&gt;')
          .replace(jsonLine, library.json.replacer);
      }
    };

    console.log(this.props.value);
    //var waccount = { active: true, codes: [48348, 28923, 39080], city: "London" };
    var codeint = library.json.prettyPrint(this.props.value);

    return <code dangerouslySetInnerHTML={{__html: codeint}} />;
  }

  render() {

    return (
      <div className="pre-code">
        <pre>{this._renderWrapper()}</pre>
      </div>
    );

  }
}

//<pre><code id="account" data-language={this.props.language}>{this.props.data}</code></pre>

//PreCode.propTypes = {
//  data: PropTypes.string,
//  language: PropTypes.string
//};

//PreCode.defaultProps = {
//  data: null,
//  language: ""
//};
