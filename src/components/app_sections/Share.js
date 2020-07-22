import React, { useState } from 'react';
import SharePersonForm from '../SharePersonForm';
import EditContactForm from '../EditContactForm';

function Share(props) {
	let [showingAddForm, setShowingAddForm] = useState(false);
	let [editContact, setEditContact] = useState(null);

	function showAddForm() {
		setShowingAddForm(true);
	}

	return (
		<div style={{padding:'50px 100px'}}>
			<h1 style={{fontWeight:'normal', marginBottom:'0'}}>Share your progress</h1>
			<p style={{marginTop:'0', fontSize:'23px'}}>You can invite a loved one or healthcare provider to securely view your progress.</p>

			{props.contacts.length===0 ?
			<div className="notification">
				<p>You're not currently sharing your progress with anyone. Click <a href="#" onClick={showAddForm}>here</a> to start sharing.</p>
			</div>
			:
			<div className="notification">
				<p>You're sharing your progress. Click <a href="#" onClick={showAddForm}>here</a> to add more.</p>
			</div>}

			{props.contacts.map((contact, index) => {
				return (
					<div key={index} style={{display:'inline-block', margin:'30px'}}>
						<span style={{fontWeight:'bold'}}>{contact.firstName+" "+contact.lastName}</span><br/>
						<span>{contact.email}</span><br/>
						<span>{contact.relationship}</span><br/>

						<div style={{marginTop:'10px'}}>
							<button style={{marginRight: '20px'}} onClick={() => setEditContact(index)}>edit</button>
							<button onClick={() => props.deleteContact(contact)} className="inverted">delete</button>
						</div>
					</div>
				);
			})}

			{(showingAddForm)?<SharePersonForm addContact={props.addContact} setVisible={setShowingAddForm}/>:[]}
			{(editContact !== null)?<EditContactForm contact={props.contacts[editContact]} contactIndex={editContact} editContact={props.editContact} close={() => setEditContact(null)}/>:[]}
		</div>
	);
}

export default Share;