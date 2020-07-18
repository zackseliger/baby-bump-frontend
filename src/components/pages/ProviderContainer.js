import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Patients from '../provider_sections/Patients';

const startingPatients = [
	{
		name: 'Naomi Robinson',
		dob: '03/14/1992',
		userData: [
			{name: 'systolic blood pressure', data: [122, 125, 120]},
			{name: 'diastolic blood pressure', data: [80, 83, 81]},
			{name: 'weight', data: [120, 118, 115]},
			{name: 'anxiety', data: [2, 3, 2]},
			{name: 'kicks', data: [12, 14, 5]},
			{name: 'fetal heart tones', data: [127, 144, 155]}
		],
		journals: [
			{craving:'salty', symptoms:'fatigue', mood:'sleepy', highlights:'put highlight here', notes:'N/A'},
			{craving:'spicy', symptoms:'none', mood:'calm', highlights:'put highlight here', notes:'N/A'}
		]
	},
	{
		name: 'Adriana Gutierrez',
		dob: '06/11/1999',
		userData: [
			{name: 'systolic blood pressure', data: [124, 213, 123]},
			{name: 'diastolic blood pressure', data: [48, 68, 89]},
			{name: 'weight', data: [100, 118, 115]},
			{name: 'anxiety', data: [1, 1, 2]},
			{name: 'kicks', data: [10, 11, 12]},
			{name: 'fetal heart tones', data: [123, 141, 112]}
		],
		journals: [
			{craving:'salty', symptoms:'fatigue', mood:'sleepy', highlights:'put highlight here', notes:'N/A'},
			{craving:'spicy', symptoms:'none', mood:'calm', highlights:'put highlight here', notes:'N/A'}
		]
	},
	{
		name: 'Vanessa Jones',
		dob: '1/26/1984',
		userData: [
			{name: 'systolic blood pressure', data: [124, 123, 213, 123]},
			{name: 'diastolic blood pressure', data: [48, 45, 68, 89]},
			{name: 'weight', data: [100, 120, 118, 115]},
			{name: 'anxiety', data: [1, 4, 5, 4]},
			{name: 'kicks', data: [10, 8, 11, 9]},
			{name: 'fetal heart tones', data: [123, 160, 141, 112]}
		],
		journals: [
			{craving:'salty', symptoms:'fatigue', mood:'sleepy', highlights:'put highlight here', notes:'N/A'}
		]
	},
	{
		name: 'Li Xiong',
		dob: '08/31/1997',
		userData: [
			{name: 'systolic blood pressure', data: [213, 123]},
			{name: 'diastolic blood pressure', data: [68, 89]},
			{name: 'weight', data: [120, 115]},
			{name: 'anxiety', data: [1, 2, 1]},
			{name: 'kicks', data: [10, 9]},
			{name: 'fetal heart tones', data: [123, 112]}
		],
		journals: [
			{craving:'salty', symptoms:'fatigue', mood:'sleepy', highlights:'put highlight here', notes:'N/A'},
			{craving:'spicy', symptoms:'none', mood:'calm', highlights:'put highlight here', notes:'N/A'}
		]
	},
	{
		name: 'Amy Nelson',
		dob: '11/02/1988',
		userData: [
			{name: 'systolic blood pressure', data: [124, 213, 123]},
			{name: 'diastolic blood pressure', data: [48, 68, 89]},
			{name: 'weight', data: [100, 118, 115]},
			{name: 'anxiety', data: [1, 1, 2]},
			{name: 'kicks', data: [10, 11, 12]},
			{name: 'fetal heart tones', data: [123, 141, 112]}
		],
		journals: [
			{craving:'salty', symptoms:'fatigue', mood:'sleepy', highlights:'put highlight here', notes:'N/A'},
			{craving:'spicy', symptoms:'none', mood:'calm', highlights:'put highlight here', notes:'N/A'},
			{craving:'salty', symptoms:'fatigue', mood:'sleepy', highlights:'put highlight here', notes:'N/A'},
			{craving:'spicy', symptoms:'none', mood:'calm', highlights:'put highlight here', notes:'N/A'}
		]
	},
	{
		name: 'Jessica Martinez',
		dob: '12/23/1994',
		userData: [
			{name: 'systolic blood pressure', data: [122, 125, 120]},
			{name: 'diastolic blood pressure', data: [80, 83, 81]},
			{name: 'weight', data: [120, 118, 115]},
			{name: 'anxiety', data: [2, 3, 2]},
			{name: 'kicks', data: [12, 14, 5]},
			{name: 'fetal heart tones', data: [127, 144, 155]}
		],
		journals: [
			{craving:'salty', symptoms:'fatigue', mood:'sleepy', highlights:'put highlight here', notes:'N/A'},
			{craving:'spicy', symptoms:'none', mood:'calm', highlights:'put highlight here', notes:'N/A'},
			{craving:'spicy', symptoms:'none', mood:'calm', highlights:'put highlight here', notes:'N/A'}
		]
	}
]

function AppContainer() {
	let [patients, setPatients] = useState(startingPatients);
	let [activePatient, setActivePatient] = useState(null);

	return(
		<div id="app-container">
			<Route path="/provider/patients"><Patients activePatient={activePatient} patients={patients} setActivePatient={setActivePatient}/></Route>
			{/* <Route path="/app/dashboard"><Dashboard userData={userData} addUserData={addUserData}/></Route>
			<Route path="/app/share"><Share contacts={contacts} addContact={addContact} editContact={editContact} deleteContact={deleteContact} /></Route>
			<Route path="/app/journal"><Journal journals={journals} addJournal={addJournal} editJournal={editJournal}/></Route>
			<Route path="/app/feedback"><Feedback/></Route> */}
		</div>
	);
}

export default AppContainer;