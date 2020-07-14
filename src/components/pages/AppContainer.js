import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../app_sections/Dashboard';
import Share from '../app_sections/Share';
import Journal from '../app_sections/Journal';

function AppContainer() {
	let [userData, setUserData] = useState([]);
	let [contacts, setContacts] = useState([]);
	let [journals, setJournals] = useState([]);

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
				feeling: journals[i].feeling,
				highlights: journals[i].highlights,
				appointments: journals[i].appointments
			});
		}

		newJournals.push(journal);
		setJournals(newJournals);
	}

	return(
		<div id="app-container">
			<Route path="/app/dashboard"><Dashboard userData={userData} addUserData={addUserData}/></Route>
			<Route path="/app/share"><Share contacts={contacts} addContact={addContact} editContact={editContact} deleteContact={deleteContact} /></Route>
			<Route path="/app/journal"><Journal journals={journals} addJournal={addJournal}/></Route>
		</div>
	);
}

export default AppContainer;