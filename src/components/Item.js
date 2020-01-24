import React from 'react';

class Item extends React.Component {
	handleReviewClick = () => {
		this.props.moveToReview(this.props.index, this.props.details);
	};

	handleCompletedClick = () => {
		this.props.moveToCompleted(this.props.index, this.props.details);
	};

	render() {

		let { date, itemName, indexPage, developer, flag } = this.props.details;

		let className = "item";
		if (flag=="priority") {
			className += " priority";
		} else if (flag=="same-day") {
			className += " same-day";
		}

		if (this.props.chosenDev == developer) {
			className += " highlight"
		}

		return (
			<div className={className}>
				<div>{date}</div>
				<div className="itemname">{itemName}</div>
				<div>Index Page: {indexPage}</div>
				<div>{developer}</div>
				<button className={this.props.status} onClick={this.props.status=="inReview"? this.handleCompletedClick : this.handleReviewClick}>{this.props.status=="inReview"? "Completed" : "In Review"}</button>
			</div>
		)
	}
}

export default Item;