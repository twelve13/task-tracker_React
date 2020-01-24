import React from 'react';

class Item extends React.Component {
	render() {

		let { date, itemName, indexPage, developer, flag } = this.props.details;

		let className = "item";
		if (flag=="priority") {
			className += " priority";
		} else if (flag=="same-day") {
			className += " same-day";
		}

		return (
			<div className={className}>
				<div>{date}</div>
				<div className="itemname">{itemName}</div>
				<div>Index Page: {indexPage}</div>
				<div>{developer}</div>
			</div>
		)
	}
}

export default Item;