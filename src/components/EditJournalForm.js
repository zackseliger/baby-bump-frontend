import React from 'react';

const selectStyle = {
	width: '200px'
}

const cravings = ['salty', 'spicy', 'sour', 'bitter'];
const symptoms = ['none', 'fatigue', 'frequent urination', 'headache', 'lower back pain', 'mood swings', 'nausea', 'swollen breast', 'other'];
const moods = ['calm', 'happy', 'sad', 'nervous', 'angry', 'upset', 'sleepy', 'sick']

function EditJournalForm(props) {

	function save() {
		let selects = document.getElementById('journal-popup').getElementsByTagName('select');
		let textareas = document.getElementById('journal-popup').getElementsByTagName('textarea');

		let journal = {
			craving: selects[0].options[selects[0].selectedIndex].text,
			symptoms: selects[1].options[selects[1].selectedIndex].text,
			mood: selects[2].options[selects[2].selectedIndex].text,
			highlights: textareas[0].value,
			notes: textareas[1].value
		}

		props.editJournal(props.weekNum-1, journal);
		props.setVisibility(false);
	}

	return (
		<div className="popup-background">
			<div className="popup same-rows" id="journal-popup">
				<span style={{fontWeight:'bold', color:'#3D6053'}}>Journal entry for week {props.weekNum}</span>

				<p>
					cravings
					<select style={selectStyle}>
						{cravings.map((val) => <option selected={props.journal.craving===val?true:false}>{val}</option>)}
					</select>
				</p>

				<p>
					symptoms
					<select style={selectStyle}>
						{symptoms.map((val) => <option selected={props.journal.symptoms===val?true:false}>{val}</option>)}
					</select>
				</p>

				<p>
					mood
					<select style={selectStyle}>
						{moods.map((val) => <option selected={props.journal.mood===val?true:false}>{val}</option>)}
					</select>
				</p>

				<p>highlights</p>
				<p><textarea>{props.journal.highlights}</textarea></p>

				<p>notes for physician</p>
				<p><textarea>{props.journal.notes}</textarea></p>

				<p style={{width:'75%', margin:'0 auto'}}>
					<button onClick={save}>save</button>
					<button className="inverted" onClick={() => props.setVisibility(false)}>cancel</button>
				</p>
			</div>
		</div>
	);
}

export default EditJournalForm;