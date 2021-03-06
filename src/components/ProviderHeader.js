import React from 'react';
import { Link } from 'react-router-dom';

function AppHeader() {
	let location = window.location.pathname.slice(window.location.pathname.lastIndexOf("/")+1);
	let lightColorStyle = {color: '#A8C7BB'}
	

	return (
		<div id="app-header">
			<Link style={{color:'#D2A297', fontSize:'48px'}} to="/">
				<img style={{width:'100px'}} src="/image/logo.jpg" alt="Nona logo"/>
				<span style={{top:'-55px', position:'relative'}}>Nona</span>
			</Link>

			<div>
				<div className="app-nav">
					<Link style={location==="patients"?lightColorStyle:{}} to="/provider/patients">Patients</Link>
					<Link style={location==="feedback"?lightColorStyle:{}} to="/provider/feedback">Feedback</Link>
					<Link to="/">Log Out</Link>
				</div>
			</div>
		</div>
	);
}

export default AppHeader;