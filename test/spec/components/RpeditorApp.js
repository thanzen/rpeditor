'use strict';

describe('RpeditorApp', function () {
  var React = require('react/addons');
  var RpeditorApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    RpeditorApp = require('components/RpeditorApp.js');
    component = React.createElement(RpeditorApp);
  });

  it('should create a new instance of RpeditorApp', function () {
    expect(component).toBeDefined();
  });
});
