import React, { useState } from 'react';
import SharePersonForm from '../SharePersonForm';

function Share() {
	let [showingAddForm, setShowingAddForm] = useState(false);
	let [contacts, setContacts] = useState([]);

	function showAddForm() {
		setShowingAddForm(true);
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

	return (
		<div style={{padding:'50px 100px'}}>
			<h1 style={{fontWeight:'normal', marginBottom:'0'}}>Share Your Progress</h1>
			<p style={{marginTop:'0', fontSize:'23px'}}>You can invite a loved one or healthcare provider to securely view your progress.</p>

			{contacts.length==0 ?
			<div className="notification">
				<p>You're not currently sharing your progress with anyone. Click <a href="#" onClick={showAddForm}>here</a> to start sharing.</p>
			</div>
			:
			<div className="notification">
				<p>You're sharing your progress with {contacts.length} people. Click <a href="#" onClick={showAddForm}>here</a> to add more.</p>
			</div>}

			{contacts.map((contact, index) => {
				return (
					<div key={index} style={{display:'inline-block', margin:'30px'}}>
						<span style={{fontWeight:'bold'}}>{contact.firstName+" "+contact.lastName}</span><br/>
						<span>{contact.email}</span><br/>
						<span>{contact.relationship}</span><br/>

						<div style={{marginTop:'10px'}}>
							<button style={{marginRight: '20px'}} onClick={() => editContact(contact)}>edit</button>
							<button onClick={() => deleteContact(contact)} className="inverted">delete</button>
						</div>
					</div>
				);
			})}

			{(showingAddForm)?<SharePersonForm addContact={addContact} setVisible={setShowingAddForm}/>:[]}
		</div>
	);
}

export default Share;