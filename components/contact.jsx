var React = require('react');

module.exports = React.createClass({
	render: function(){
		return <div className='sub-section row contact'>
			<div className='col-1'>
				<h2>Contact</h2>
			</div>
			<div className='col-2'>
				Email: {this.props.email} <br/>
				Phone: {this.props.phone} <br/>
				Website: {this.props.website} <br/>
				Location: {this.props.location.countryCode}, {this.props.location.city}, {this.props.location.postalCode}
			</div>
		</div>;
	}
})
