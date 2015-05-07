'use strict';

var React = require('react/addons');

var MainNav = React.createClass({
  render: function () {
    return (
      <aside className="ui-main__nav">
        <nav>
        	<a className="ui-main__nav__item opengov-logo"/>
        	<a className="ui-main__nav__item">
        		<span className="icon-app-reports"/>
        		<span className="ui-main__nav__label">Reports</span>        	
        	</a>
      	  <a className="ui-main__nav__item">
      	    <span className="icon-app-insights"/>
      	    <span className="ui-main__nav__label">Compare</span>
      	  </a>
      	  <a className="ui-main__nav__item">
      	    <span className="icon-app-data"/>
      	    <span className="ui-main__nav__label">Data</span>
      	  </a>
      	  <a className="ui-main__nav__item">
      	    <span className="icon-app-manage"/>
      	    <span className="ui-main__nav__label">Settings</span>
      	  </a>
      	  <a className="ui-main__nav__item is-selected">
      	    <span className="icon-app-insights"/>
      	    <span className="ui-main__nav__label">Portal</span>
      	  </a>
        </nav>
      </aside>
    );
  }
});

module.exports = MainNav; 

