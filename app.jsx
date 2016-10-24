require('./style.scss');
var Resume = require('json!./resume.json');
var React = require('react');
var ReactDOM = require('react-dom');
var Title = require('./components/title');

var App = React.createClass({

	render: function(){
		console.log(this.props);
		return <Title
			name={this.props.Resume.basics.label}
			label={this.props.Resume.basics.label}
			/>;
	}
});

var element = React.createElement(App, {Resume});
ReactDOM.render(element, document.querySelector('.container'));
