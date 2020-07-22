import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Patients from '../provider_sections/Patients';
import Feedback from '../provider_sections/Feedback';

const startingPatients = [
	{
		name: 'Naomi Robinson',
		email: 'naomi.robinson@email.com',
		dueDate: '02/10/2021',
		dob: '03/14/1992',
		race: 'African American',
		userData: [
			{name: 'systolic blood pressure', data: [122, 125, 120]},
			{name: 'diastolic blood pressure', data: [80, 83, 81]},
			{name: 'weight', data: [122, 118, 115]},
			{name: 'anxiety', data: [2, 3, 2]},
			{name: 'kicks', data: [12, 14, 5]},
			{name: 'fetal heart tones', data: [127, 144, 155]}
		],
		journals: [
			{craving:'salty', symptoms:'fatigue', mood:'sleepy', highlights:'put highlight here', notes:'N/A'},
			{craving:'spicy', symptoms:'none', mood:'calm', highlights:'put highlight here', notes:'N/A'},
			{craving:'salty', symptoms:'fatigue', mood:'sleepy', highlights:'put highlight here', notes:'N/A'},
			{craving:'spicy', symptoms:'none', mood:'calm', highlights:'put highlight here', notes:'N/A'},
			{craving:'salty', symptoms:'fatigue', mood:'sleepy', highlights:'put highlight here', notes:'N/A'},
			{craving:'spicy', symptoms:'none', mood:'calm', highlights:'put highlight here', notes:'N/A'},
			{craving:'salty', symptoms:'fatigue', mood:'sleepy', highlights:'put highlight here', notes:'N/A'},
			{craving:'spicy', symptoms:'none', mood:'calm', highlights:'put highlight here', notes:'N/A'},
			{craving:'salty', symptoms:'fatigue', mood:'sleepy', highlights:'put highlight here', notes:'N/A'},
			{craving:'spicy', symptoms:'none', mood:'calm', highlights:'put highlight here', notes:'N/A'},
			{craving:'salty', symptoms:'fatigue', mood:'sleepy', highlights:'put highlight here', notes:'N/A'},
			{craving:'spicy', symptoms:'none', mood:'calm', highlights:'put highlight here', notes:'N/A'},
			{craving:'salty', symptoms:'fatigue', mood:'sleepy', highlights:'put highlight here', notes:'N/A'},
			{craving:'spicy', symptoms:'none', mood:'calm', highlights:'put highlight here', notes:'N/A'},
			{craving:'salty', symptoms:'fatigue', mood:'sleepy', highlights:'put highlight here', notes:'N/A'},
			{craving:'spicy', symptoms:'none', mood:'calm', highlights:'put highlight here', notes:'N/A'},
		]
	},
	{
		name: 'Adriana Gutierrez',
		email: 'adriana.gutierrez@email.com',
		dueDate: '02/10/2021',
		dob: '06/11/1999',
		race: 'Hispanic or Latino',
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
		email: 'vanessa.jones@email.com',
		dueDate: '02/10/2021',
		dob: '1/26/1984',
		race: 'White',
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
		email: 'li.xiong@email.com',
		dueDate: '08/04/2021',
		dob: '08/31/1997',
		race: 'Asian',
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
		email: 'amy.nelson@email.com',
		dueDate: '09/14/2021',
		dob: '11/02/1988',
		race: 'White',
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
		email: 'jess.martinez@email.com',
		dueDate: '02/10/2021',
		dob: '12/23/1994',
		race: 'Hispanic or Latino',
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
			<Route path="/provider/feedback"><Feedback/></Route>
		</div>
	);
}

export default AppContainer;