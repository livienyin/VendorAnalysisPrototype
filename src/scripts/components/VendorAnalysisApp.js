'use strict';

var React = require('react/addons');

var MainNav = require('./main_nav');
var MainHeader = require('./main_header');
var SearchBox = require('./search_box');

// CSS
require('../../styles/index.scss');

var VendorAnalysisApp = React.createClass({
  render: function() {
    return (
      <div>
	      <MainNav/>
	      <MainHeader/>
	      <section className="main-content">
	      	<SearchBox/>
	      </section>
      </div>
    );
  }
});
React.render(<VendorAnalysisApp />, document.getElementById('content')); // jshint ignore:line

module.exports = VendorAnalysisApp;
