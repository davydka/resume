var React = require('react');

module.exports = React.createClass({

	render: function(){
		return <div className='section title'>
			<h1>{this.props.name}</h1>
			<p className='plain'>{this.props.label}</p>
			<img src={this.props.picture} />
		</div>
	}
});
