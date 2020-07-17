import React from 'react';

const selectStyle = {
	width: '200px'
}

function JournalForm(props) {

	function submit() {
		let selects = document.getElementById('journal-popup').getElementsByTagName('select');
		let textareas = document.getElementById('journal-popup').getElementsByTagName('textarea');

		let journal = {
			craving: selects[0].options[selects[0].selectedIndex].text,
			symptoms: selects[1].options[selects[1].selectedIndex].text,
			mood: selects[2].options[selects[2].selectedIndex].text,
			highlights: textareas[0].value,
			notes: textareas[1].value
		}
		props.addJournal(journal);

		props.setVisible(false);
	}

	function cancel() {
		props.setVisible(false);
	}

	return (
		<div className="popup-background">
			<div className="popup same-rows" id="journal-popup">
				<span style={{fontWeight:'bold', color:'#3D6053'}}>Add a journal entry</span>

				<p style={{display: 'block'}}>week 1</p>

				<p>
					cravings
					<select style={selectStyle}>
						<option>salty</option>
						<option>spicy</option>
						<option>sour</option>
						<option>bitter</option>
					</select>
				</p>

				<p>
					symptoms
					<select style={selectStyle}>
						<option>none</option>
						<option>fatigue</option>
						<option>frequent urination</option>
						<option>headache</option>
						<option>lower back pain</option>
						<option>mood swings</option>
						<option>nausea</option>
						<option>swollen breast</option>
						<option>other</option>
					</select>
				</p>

				<p>
					mood
					<select style={selectStyle}>
						<option>calm</option>
						<option>happy</option>
						<option>sad</option>
						<option>nervous</option>
						<option>angry</option>
						<option>upset</option>
						<option>sleepy</option>
						<option>sick</option>
					</select>
				</p>

				<p>highlights</p>
				<p><textarea></textarea></p>

				<p>notes for physician</p>
				<p><textarea></textarea></p>

				<div style={{display:'flex', justifyContent:'space-evenly'}}>
						<button onClick={() => submit()}>submit</button>
						<button onClick={() => cancel()} className="inverted">cancel</button>
				</div>
			</div>
		</div>
	);
}

export default JournalForm;