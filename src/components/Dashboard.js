import React from 'react';

function Dashboard() {
	return (
		<div style={{padding:'100px'}}>
			<h1 style={{fontWeight:'normal', marginBottom:'0'}}>Welcome Back, <strong>Naomi</strong></h1>
			<p style={{marginTop:'0', fontSize:'23px'}}>Here's how you're progressing.</p>

			<div className="notification">
				<p>You haven't updated your vitals in a while. Click here to update them</p>
			</div>
		</div>
	);
}

export default Dashboard;