'use strict';

var React = require('react/addons');
var ReactQuill = require('react-quill');
// CSS
require('../styles/quill.base.css');
require('../styles/quill.snow.css');

module.exports = React.createClass({
  getInitialState: function () {
      return   {value:""};
  },
  render: function() {
    return (
        <ReactQuill theme="snow" value={this.state.value}/>
    );
  }
});
