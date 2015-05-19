'use strict';

var React = require('react/addons');

var SearchBox = React.createClass({
  render: function () {
    return (
    	<div className="search__wrapper">
	   	  <div className="ui-search">
	  	    <span className="icon-search-1"></span>
	  	    <input type="search" placeholder="Search for vendor, product or service"/>
	  	  </div>
  	  </div>
    );
  }
});

module.exports = SearchBox; 

