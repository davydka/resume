require('./style.scss');
var Resume = require('json!./resume.json');
var React = require('react');
var ReactDOM = require('react-dom');
var Title = require('./components/title');
var Contact = require('./components/contact');

var App = React.createClass({

	render: function(){
		console.log(this.props);
		return (<div className='container'>
			<Title
			name={this.props.Resume.basics.name}
			label={this.props.Resume.basics.label}
			/>
			<Contact
			/>

		</div>);
	}
});

var element = React.createElement(App, {Resume});
ReactDOM.render(element, document.querySelector('#root'));
