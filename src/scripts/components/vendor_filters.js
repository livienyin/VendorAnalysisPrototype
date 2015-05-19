'use strict';

var React = require('react/addons');

var VendorFilters = React.createClass({
  render: function () {
    return (
      <div className="ui-mainpanel__section">
        <div className="ui-mainpanel__section-header">Rank Vendors By</div>
        <ul className="ui-form">
          <li>
            <label className="ui-form__checkbox-label">
              <input type="checkbox" checked/>Lowest Cost
            </label>
          </li>
          <li>
            <label className="ui-form__checkbox-label">
              <input type="checkbox" is-checked/># of Customers
            </label>
          </li>
          <li>
            <label className="ui-form__checkbox-label">
              <input type="checkbox" is-checked/># of Purchase Orders
            </label>
          </li>
          <li>
            <label className="ui-form__checkbox-label">
              <input type="checkbox" is-checked/>Highest Revenue
            </label>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = VendorFilters; 

