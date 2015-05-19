'use strict';

var React = require('react/addons');

var MainNav = require('./main_nav');
var Home = require('./home');
var VendorProfileSection = require('./vendor_profile_section');
var ProductCategorySection = require('./product_category_section');

// CSS
require('../../styles/index.scss');

var VendorAnalysisApp = React.createClass({
  getInitialState: function() {
    return {
      currentSection: "Product Category"
    };
  },

  render: function() {
    return (
      <div>
        <MainNav/>
        <section>
          {this.state.currentSection === "Home" ? <Home/> : null}
          {this.state.currentSection === "Vendor Profile" ? <VendorProfileSection/> : null}
          {this.state.currentSection === "Product Category" ? <ProductCategorySection/> : null}
        </section>
      </div>
    );
  }
});
React.render(<VendorAnalysisApp />, document.getElementById('content')); // jshint ignore:line

module.exports = VendorAnalysisApp;
