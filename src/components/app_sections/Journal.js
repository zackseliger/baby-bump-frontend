import React, { useState } from 'react';
import JournalForm from '../JournalForm';
import JournalCard from '../JournalCard';

function Journal(props) {
	let [showingAddForm, setShowingAddForm] = useState(false);

	function showAddForm() {
		setShowingAddForm(true);
	}

	return (
		<div style={{padding:'50px 100px'}}>
			<h1 style={{fontWeight:'normal', marginBottom:'0'}}>Note Your Progress</h1>
			<p style={{marginTop:'0', fontSize:'23px'}}>Keep journals to track your progress as you remember it.</p>

			<div className="notification">
				<p>You don't have any journals yet. Click <a onClick={showAddForm} href="#">here</a> to add an entry.</p>
			</div>

			<div style={{marginTop: '25px'}}>
				{props.journals.map((journal, index) => {
					return (
						<JournalCard key={index} weekNum={index+1} journal={journal} editJournal={props.editJournal}/>
					);
				})}
			</div>

			{(showingAddForm)?<JournalForm addJournal={props.addJournal} setVisible={setShowingAddForm}/>:[]}
		</div>
	);
}

export default Journal;