require('./style.scss');
var Resume = require('json!./resume.json');
var React = require('react');
var ReactDOM = require('react-dom');
var Title = require('./components/title');
var Contact = require('./components/contact');
var About = require('./components/about');
var Profiles = require('./components/profiles');
var Work = require('./components/work');

var App = React.createClass({

	render: function(){
		console.log(this.props.Resume);
		return (<div className='container'>
			<Title
				name={this.props.Resume.basics.name}
				label={this.props.Resume.basics.label}
				picture={this.props.Resume.basics.pictureSmall}
			/>
			<div className='basics'>
				<Contact
					phone={this.props.Resume.basics.phone}
					email={this.props.Resume.basics.email}
					website={this.props.Resume.basics.website}
					location={this.props.Resume.basics.location}
				/>

				<About
					summary={this.props.Resume.basics.summary}
				/>

				<Profiles
					profiles={this.props.Resume.basics.profiles}
				/>
			</div>

			<div className='work-container'>
				<h2>Work</h2>
				<Work
					work={this.props.Resume.work}
				/>
			</div>
		</div>);
	}
});

var element = React.createElement(App, {Resume});
ReactDOM.render(element, document.querySelector('#root'));
