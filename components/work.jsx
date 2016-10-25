var React = require('react');

module.exports = React.createClass({
	workItems: [],

	componentWillMount: function(){
		console.log(this.props.work)
		this.workItems = this.props.work.map(function(item, index){
			return <li className='row' key={index}>
				<div className='col-1'>
					<h4>{item.company}</h4>
					<p className='plain'>
						{item.startDate} &mdash; {item.endDate}
					</p>
				</div>
				<div className='col-2'>
				</div>
			</li>
		})
	},

	render: function(){
		return <ul className='work'>
			{this.workItems}
		</ul>
	}
})
