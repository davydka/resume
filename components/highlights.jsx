var React = require('react');

module.exports = React.createClass({
	highlightItems: [],

	componentWillMount: function(){
		this.highlightItems = this.props.highlights.map(function(item, index){
			return <li className='row' key={index}>
				<h4>
					<a href={item.link} target='_blank'>
						{item.title}
					</a>
				</h4>
				<div className='col-1'>
					<h5>{item.position}</h5>
					<p className='plain'>
						<a href={item.link} target='_blank'>
							{item.link}
						</a>
					</p>
				</div>
				<div className='col-2'>
					{item.summary}
				</div>
			</li>
		})
	},

	render: function(){
		return <ul className='highlights'>
			{this.highlightItems}
		</ul>
	}
})
