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

			<div className="signup-form" style={{marginBottom:'100px'}}>
				<p style={{color: "#3D6053"}}>To get started, we just need a bit of information from you. We use this information to create your profile. Nona will never share your information without your express permission.</p>

				<form onSubmit={submit}>
					<p>
						your first name<br/>
						<input type="text" name="name"/>
					</p>
					<p>
						your last name<br/>
						<input type="text" name="name"/>
					</p>
					<p>
						your email<br/>
						<input type="email" name="email"/>
					</p>
					<p>
						your due date<br/>
						<input style={{color:'#3D6053'}} type="date" name="dueDate"/>
					</p>
					<p>
						your starting weight<br/>
						<input style={{width:'100px'}} type="text" name="weight"/>
						<input style={{width:'100px', marginLeft:'30px'}} type="text" name="units" placeholder="lbs / kgs"/>
					</p>
					<p>
						your birth date<br/>
						<input style={{color:'#3D6053'}} type="date" name="birthDate"/>
					</p>
					<p>
						your race / ethnicity<br/>
						<input type="text" name="race"/>
					</p>
					<p>
						password<br/>
						<input type="password" name="password"/>
					</p>
					<p><input style={{width:'20px', boxShadow:'none'}} type="checkbox"/> I have read and acknowledge the privacy policy.</p>
					<p><button type="submit">submit</button></p>
				</form>
			</div>
		</div>
	);
}

export default Signup;