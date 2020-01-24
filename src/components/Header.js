import React from "react";

//stateless functional component
const Header = props => (
	<header className="header">
		<h1>Upcoming Publications</h1>
		<h3>{props.tagline}</h3>
	</header>
)

export default Header;