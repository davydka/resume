var React = require('react');

module.exports = React.createClass({
	profileItems: [],

	componentWillMount: function(){
		this.profileItems = this.props.profiles.map(function(item, index){
			return <p key={index}>{item.network}</p>
		});
	},

	render: function(){
		return (<div className='section row profiles'>
			<div className='col-1'>
				<h2>Profiles</h2>
			</div>
			<div className='col-2'>
				{this.profileItems}
			</div>
		</div>)
	}
})
