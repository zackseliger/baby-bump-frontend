import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div id="header">
			<div style={{width:"95vw", margin:"0 auto", height:"45px"}}>
				<div className="nav">
					<Link to="/" style={{marginLeft: 'auto'}}>Home</Link>
					<Link to="/learnmore">Learn More</Link>
					<Link to="/invite">Send an Invite</Link>
					<Link to="/login" style={{marginLeft: '25px'}}>Log In</Link>
				</div>
			</div>
		</div>
	)
}

export default Header;