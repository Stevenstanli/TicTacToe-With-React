import React from "react";
import PropTypes from "prop-types";
//---------------------------------------------Form Players----------------
const Form = ({ setFirstName, setSecondName }) => {
	const getFirstName = e => {
		setFirstName(e.target.value);
	};
	const getSecondName = e => {
		setSecondName(e.target.value);
	};

	return (
		<div className="form">
			<form>
				<div>
					<input
						onChange={getFirstName}
						type="text"
						placeholder="Players 1 name"></input>
				</div>
				<div>
					<input
						onChange={getSecondName}
						type="text"
						placeholder="Players 2 name"></input>
				</div>
			</form>
		</div>
	);
};
//----------------------proptypes---------------------
Form.propTypes = {
	setFirstName: PropTypes.function,
	setSecondName: PropTypes.function
};
export default Form;
