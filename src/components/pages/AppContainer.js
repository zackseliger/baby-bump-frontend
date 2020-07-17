import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../app_sections/Dashboard';
import Share from '../app_sections/Share';
import Journal from '../app_sections/Journal';
import Feedback from '../app_sections/Feedback';

const startingUserData = [
	{
		name: 'systolic blood pressure',
		data: [122, 125, 120]
	},
	{
		name: 'diastolic blood pressure',
		data: [80, 83, 81]
	},
	{
		name: 'weight',
		data: [120, 118, 115]
	},
	{
		name: 'anxiety',
		data: [2, 3, 2]
	},
	{
		name: 'kicks',
		data: [12, 14, 5]
	},
	{
		name: 'fetal heart tones',
		data: [127, 144, 155]
	}
];

const startingJournals = [
	{
		craving: 'salty',
		symptoms: 'fatigue',
		mood: 'sleepy',
		highlights: 'put highlight here',
		notes: 'N/A'
	},
	{
		craving: 'spicy',
		symptoms: 'none',
		mood: 'calm',
		highlights: 'put highlight here',
		notes: 'N/A'
	}
]

function AppContainer() {
	let [userData, setUserData] = useState(startingUserData);
	let [journals, setJournals] = useState(startingJournals);
	let [contacts, setContacts] = useState([]);

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

	function addContact(contact) {
		let newContacts = [...contacts];
		newContacts.push(contact);
		setContacts(newContacts);
	}

	function editContact(contact) {
		console.log("edit "+contact.firstName);
	}

	function deleteContact(contact) {
		if (contacts.indexOf(contact) !== -1) {
			contacts.splice(contacts.indexOf(contact), 1);
			setContacts([...contacts]);
		}
	}

	function addJournal(journal) {
		let newJournals = [];
		for (let i = 0; i < journals.length; i++) {
			newJournals.push({
				craving: journals[i].craving,
				symptoms: journals[i].symptoms,
				mood: journals[i].mood,
				highlights: journals[i].highlights,
				notes: journals[i].notes
			});
		}

		newJournals.push(journal);
		setJournals(newJournals);
	}

	function editJournal(index, newJournal) {
		let newJournals = [];
		for (let i = 0; i < journals.length; i++) {
			if (i === index) {
				newJournals[i] = newJournal;
				continue;
			}

			newJournals.push({
				craving: journals[i].craving,
				symptoms: journals[i].symptoms,
				mood: journals[i].mood,
				highlights: journals[i].highlights,
				notes: journals[i].notes
			});
		}

		setJournals(newJournals);
	}

	return(
		<div id="app-container">
			<Route path="/app/dashboard"><Dashboard userData={userData} addUserData={addUserData}/></Route>
			<Route path="/app/share"><Share contacts={contacts} addContact={addContact} editContact={editContact} deleteContact={deleteContact} /></Route>
			<Route path="/app/journal"><Journal journals={journals} addJournal={addJournal} editJournal={editJournal}/></Route>
			<Route path="/app/feedback"><Feedback/></Route>
		</div>
	);
}

export default AppContainer;