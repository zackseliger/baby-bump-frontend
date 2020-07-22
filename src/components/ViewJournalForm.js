import React from 'react';

const selectStyle = {
	width: '200px'
}

const cravings = ['salty', 'spicy', 'sour', 'bitter'];
const symptoms = ['none', 'fatigue', 'frequent urination', 'headache', 'lower back pain', 'mood swings', 'nausea', 'swollen breast', 'other'];
const moods = ['calm', 'happy', 'sad', 'nervous', 'angry', 'upset', 'sleepy', 'sick']

function ViewJournalForm(props) {
	return (
		<div className="popup-background">
			<div className="popup same-rows" id="journal-popup">
				<span style={{fontWeight:'bold', color:'#3D6053'}}>Journal entry for week {props.weekNum}</span>

				<p>
					cravings:
					<span>{props.journal.craving}</span>
				</p>

				<p>
					symptoms:
					<span>{props.journal.symptoms}</span>
				</p>

				<p>
					mood:
					<span>{props.journal.mood}</span>
				</p>

				<p>highlights</p>
				<p><textarea disabled defaultValue={props.journal.notes}></textarea></p>

				<p>notes for physician</p>
				<p><textarea disabled defaultValue={props.journal.notes}></textarea></p>

				<p style={{display:'block', margin:'0 auto'}}>
					<button onClick={() => props.setVisibility(false)}>back</button>
				</p>
			</div>
		</div>
	)
}

export default ViewJournalForm;