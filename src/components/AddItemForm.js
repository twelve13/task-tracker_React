import React from 'react';

class AddItemForm extends React.Component {

	dateRef = React.createRef();
	itemNameRef = React.createRef();
	indexPageRef = React.createRef();
	developerRef = React.createRef();
	flagRef = React.createRef();

	createItem = (event) => {
		event.preventDefault();

		const item = {
			date: this.dateRef.current.value,
			itemName: this.itemNameRef.current.value,
			indexPage: this.indexPageRef.current.value,
			developer: this.developerRef.current.value,
			flag: this.flagRef.current.value,
			status: "Upcoming",
		}

		this.props.addItem(item);

		//refresh the form
		event.currentTarget.reset();
	}
	render() {
		return (
			<form className="add-item-form" onSubmit={this.createItem}>
				<input name="date" ref={this.dateRef} type="text" placeholder="Date" required />
				<input name="itemName" ref={this.itemNameRef} type="text" placeholder="Publication Name" required />
				<input name="indexPage" ref={this.indexPageRef} type="number" placeholder="Index Page" required />
				<select name="developer" ref={this.developerRef} required>
					<option value="">--Select Dev--</option>
					<option value="Bob">Bob</option>
					<option value="Linda">Linda</option>
					<option value="Tina">Tina</option>
					<option value="Gene">Gene</option>
					<option value="Louise">Louise</option>
					<option value="Teddy">Teddy</option>
					<option value="Gayle">Gayle</option>
				</select>
				<select name="flag" ref={this.flagRef}>
					<option value="standard">Standard TAT</option>
					<option value="priority">Priority</option>
					<option value="same-day">Same Day</option>
				</select>
				<button type="submit">+ Add Item</button>
			</form>
		)
	}
}

export default AddItemForm;