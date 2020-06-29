import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div id="header">
			<div style={{width:"95vw", margin:"0 auto", height:"45px"}}>
				<div className="nav">
					<Link to="/login">Login</Link>
					<Link to="/" style={{fontSize:"32px"}}>Baby Bump</Link>
					<span style={{width:"97px"}}></span>
				</div>
			</div>
		</div>
	)
}

export default Header;