var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (<div className='section row about'>
			<div className='col-1'>
				<h2>About</h2>
			</div>
			<div className='col-2'>
				{this.props.summary}
			</div>
		</div>)
	}
})
