'use strict';

var React = require('react/addons');

var VendorFilters = require('./vendor_filters');

var Sidebar = React.createClass({
  render: function () {
    return (
      <aside className="ui-main__sidebar">
        <div className="ui-mainpanel">
          <VendorFilters/>
        </div>
      </aside>
    );
  }
});

module.exports = Sidebar; 

