import React, { useState } from 'react';
import UpdateVitalsForm from '../UpdateVitalsForm';
import ChartCard from '../ChartCard';

function Dashboard(props) {
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

			{props.userData.length>0?
			<div style={{marginTop:'50px'}}>
				{props.userData.map((data, index) => 
					<ChartCard key={index} name={data.name} data={data.data}/>
				)}
			</div>
			:[]}

			{(showPopup)?<UpdateVitalsForm addData={props.addUserData} setVisible={setShowPopup}/>:[]}
		</div>
	);
}

export default Dashboard;