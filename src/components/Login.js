import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Login() {
	const history = useHistory();

	function submit(e) {
		e.preventDefault();
		history.push('/userpage');
	}

	return (
		<div style={{textAlign: "center"}}>
			<h1>Login</h1>
			<form onSubmit={submit}>
				<p><input type="text" name="email" placeholder="email"/></p>
				<p><input type="password" name="password" placeholder="password"/></p>
				<p><input type="submit"/></p>
			</form>
			<Link to="/signup">Don't have an account?</Link>
		</div>
	);
}

export default Login;