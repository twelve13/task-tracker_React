import React from 'react';

class SelectDevForm extends React.Component {
	devRef = React.createRef();

	selectDev = (event) => {
		event.preventDefault();

		const chosenDev = this.devRef.current.value;

		this.props.selectDev(chosenDev);

		//refresh the form
		event.currentTarget.reset();
	}
	render() {
		return (
			<form className="select-dev-form" onSubmit={this.selectDev}>
				<select name="developer" ref={this.devRef}>
					<option value="">--Select Dev</option>
					<option value="Bob">Bob</option>
					<option value="Linda">Linda</option>
					<option value="Tina">Tina</option>
					<option value="Gene">Gene</option>
					<option value="Louise">Louise</option>
					<option value="Teddy">Teddy</option>
					<option value="Gayle">Gayle</option>
				</select>
				<button type="submit">Select</button>
			</form>
		)
	}
};

export default SelectDevForm;