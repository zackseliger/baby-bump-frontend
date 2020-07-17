import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function ProviderLogin() {
	const history = useHistory();

	function submit(e) {
		e.preventDefault();
		history.push('/provider/dashboard');
	}

	return (
		<div style={{textAlign: "center"}}>
			<h1>Log in with your email and password:</h1>
			<form onSubmit={submit}>
				<div style={{display:'inline-block', textAlign:'left'}}>
					<p style={{marginBottom: '0'}}>email</p>
					<input type="text" name="email"/>
					<p style={{marginBottom: '0'}}>password</p>
					<input type="password" name="password"/><br/>
					<Link to="/forgot-password" style={{fontSize:'16px'}}>forgot password</Link>
				</div>

				<div style={{display: 'flex', width: '250px', margin: '0 auto', justifyContent: 'space-evenly', marginTop: '20px'}}>
					<button type="submit">log in</button>
					<button className="inverted">cancel</button>
				</div>
			</form>
		</div>
	);
}

export default ProviderLogin;