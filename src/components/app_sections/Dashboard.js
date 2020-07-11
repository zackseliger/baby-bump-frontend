import React, { useState } from 'react';
import UpdateVitalsForm from '../UpdateVitalsForm';
import ChartCard from '../ChartCard';

function Dashboard() {
	let [showPopup, setShowPopup] = useState(false);

	function showVitalsPopup() {
		setShowPopup(true);
	}

	return (
		<div style={{padding:'50px 100px'}}>
			<h1 style={{fontWeight:'normal', marginBottom:'0'}}>Welcome Back, <strong>Naomi</strong></h1>
			<p style={{marginTop:'0', fontSize:'23px'}}>Here's how you're progressing.</p>

			<div className="notification">
				<p>
					You haven't updated your vitals in a while. Click
					<a href="#" onClick={showVitalsPopup}> here </a>
					to update them
				</p>
			</div>

			<div style={{marginTop:'50px'}}>
				<ChartCard showBottom={false} showTop={false}/>
				<ChartCard showBottom={false}/>
				<ChartCard showTop={false}/>
				<ChartCard/>
				<ChartCard/>
				<ChartCard/>
			</div>

			{(showPopup)?<UpdateVitalsForm setVisible={setShowPopup}/>:[]}
		</div>
	);
}

export default Dashboard;