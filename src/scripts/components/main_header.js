'use strict';

var React = require('react/addons');

var MainHeader = React.createClass({
  render: function () {
    return (
      <header className="ui-main__header">
      	<nav className="ui-breadcrumbs pull-left">
      		<a className="ui-breadcrumbs__item icon-app-insights">
      			Vendor Analysis
      		</a>
      	</nav>
      </header>
    );
  }
});

module.exports = MainHeader; 

