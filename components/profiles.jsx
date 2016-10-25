var React = require('react');

module.exports = React.createClass({
	profileItems: [],

	componentWillMount: function(){
		this.profileItems = this.props.profiles.map(function(item, index){
			return <li key={index}>
				<a href={item.url}>{item.network}</a>
			</li>
		});
	},

	render: function(){
		return (<div className='sub-section row profiles'>
			<div className='col-1'>
				<h2>Profiles</h2>
			</div>
			<ul className='col-2'>
				{this.profileItems}
			</ul>
		</div>)
	}
})
