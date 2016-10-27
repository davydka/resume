var React = require('react');

module.exports = React.createClass({
	render: function(){
		console.log(this.props.education);
		return (<div className='sub-section row education'>
			<div className='col-1'>
				<h2>Education</h2>
				<p className='plain'>
					{this.props.education[0].startDate} &mdash; {this.props.education[0].endDate}
				</p>
			</div>
			<div className='col-2'>
				{this.props.education[0].institution} <br/>
				{this.props.education[0].studyType} <br/>
				{this.props.education[0].area}
			</div>
		</div>)
	}
})
