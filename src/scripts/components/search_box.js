'use strict';

var React = require('react/addons');

var SearchBox = React.createClass({
  render: function () {
    return (
  	  <div className="ui-search">
  	    <span className="icon-search-1"></span>
  	    <input type="search" placeholder="search for vendor"/>
  	  </div>
    );
  }
});

module.exports = SearchBox; 

