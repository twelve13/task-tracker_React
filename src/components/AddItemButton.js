import React from "react";

class AddItemButton extends React.Component {
	toggleForm = this.props.toggleForm;

	render() {
		return (
			<div className="add-item" onClick={this.toggleForm}><div>{this.props.buttonText? "Close" : "+ Add Item"}</div></div>
		)
	}
}


export default AddItemButton;