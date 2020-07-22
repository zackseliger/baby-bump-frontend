import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div id="header">
			<div style={{width:"95vw", margin:"0 auto", height:"45px"}}>
				<div className="nav">
					<Link to="/" style={{marginLeft: 'auto'}}>Home</Link>
					<Link to="/learnmore">Learn More</Link>
					<Link to="/login2">Provider Login</Link>
					<Link to="/login">Patient Login</Link>
				</div>
			</div>
		</div>
	)
}

export default Header;