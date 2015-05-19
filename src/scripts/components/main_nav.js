'use strict';

var React = require('react/addons');

var SearchBox = require('./search_box');

var MainNav = React.createClass({
  render: function () {
    return (
      <header className="ui-main__header">
        <nav className="ui-breadcrumbs pull-left">
          <a className="ui-breadcrumbs__item icon-app-insights">
            Vendor Analysis
          </a>
          <small className="network__description">Find and compare government vendors</small>
        </nav>
        <div className="pull-right">
          <SearchBox/>
        </div>
      </header>
    );
  }
});

module.exports = MainNav; 

