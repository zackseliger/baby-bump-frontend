import React from 'react';
import { useHistory } from "react-router-dom";

function Signup() {
	const history = useHistory();

	function submit(e) {
		e.preventDefault();
		history.push("/login");
	}

	return (
		<div style={{textAlign: "center"}}>
			<h1>Signup</h1>

			<form onSubmit={submit}>
				<p><input type="text" name="name" placeholder="name"/></p>
				<p><input type="email" name="email" placeholder="email"/></p>
				<p>Due Date:<input type="date" name="dueDate"/></p>
				<p><input type="password" name="password" placeholder="password"/></p>
				<p><input type="password" name="passwordConfirm" placeholder="confirm password"/></p>
				<p><input type="submit"/></p>
			</form>
		</div>
	);
}

export default Signup;