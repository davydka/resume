var React = require('react');

module.exports = React.createClass({

	render: function(){
		return <div className='title'>
			<h1>{this.props.name}</h1>
			<p className='plain'>{this.props.label}</p>
		</div>
	}
});
