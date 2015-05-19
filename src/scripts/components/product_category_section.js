'use strict';

var React = require('react/addons');

var Sidebar = require('./sidebar');

var ProductCategorySection = React.createClass({
  render: function () {
    return (
      <div>
      	<Sidebar/>
      	<div className="ui-main__content">
	        <h1>PoliceOne Apparel</h1>
        </div>
      </div>
    );
  }
});

module.exports = ProductCategorySection; 

