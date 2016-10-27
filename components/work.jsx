var React = require('react');

module.exports = React.createClass({
	workItems: [],

	componentWillMount: function(){
		this.workItems = this.props.work.map(function(item, index){
			return <li className='row' key={index}>
				<h4>
					<a href={item.website} target='_blank'>
						{item.company}
					</a>
				</h4>
				<div className='col-1'>
					<h5>{item.position}</h5>
					<p className='plain'>
						{item.startDate} &mdash; {item.endDate}
					</p>
				</div>
				<div className='col-2'>
					{item.summary}
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
