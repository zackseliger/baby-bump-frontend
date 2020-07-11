import React, { useState } from 'react';
import UpdateVitalsForm from '../UpdateVitalsForm';
import ChartCard from '../ChartCard';

function Dashboard() {
	let [showPopup, setShowPopup] = useState(false);
	let [userData, setUserData] = useState([]);

	function showVitalsPopup() {
		setShowPopup(true);
	}

	//adds user data from keys of the data object
	function addUserData(data) {
		//make a deep copy of the userData object
		let newData = [];
		for (let i = 0; i < userData.length; i++) {
			newData.push({name: userData[i].name, data: []});
			for (let j = 0; j < userData[i].data.length; j++) {
				newData[i].data.push(userData[i].data[j]);
			}
		}

		let keys = Object.keys(data);
		for (let i = 0; i < keys.length; i++) {
			let found = false;

			//search for already-existing data and insert our data point there
			for (let j = 0; j < newData.length; j++) {
				if (newData[j].name === keys[i]) {
					newData[j].data.push(data[keys[i]]);
					found = true;
					break;
				}
			}

			//if we couldn't find the data, create a new entry
			if (!found) {
				newData.push({
					name: keys[i],
					data: [data[keys[i]]]
				});
			}
		}

		setUserData(newData);
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

			{userData.length>0?
			<div style={{marginTop:'50px'}}>
				{userData.map((data, index) => 
					<ChartCard key={index} name={data.name} data={data.data}/>
				)}
			</div>
			:[]}

			{(showPopup)?<UpdateVitalsForm addData={addUserData} setVisible={setShowPopup}/>:[]}
		</div>
	);
}

export default Dashboard;