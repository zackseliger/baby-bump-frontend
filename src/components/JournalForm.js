import React from 'react';

function JournalForm(props) {
	function submit() {
		let selects = document.getElementById('journal-popup').getElementsByTagName('select');
		let textareas = document.getElementById('journal-popup').getElementsByTagName('textarea');

		let journal = {
			craving: selects[0].options[selects[0].selectedIndex].text,
			feeling: selects[1].options[selects[1].selectedIndex].text,
			highlights: textareas[0].value,
			appointments: textareas[1].value
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

				<p>
					Cravings:
					<select style={{width:'auto'}}>
						<option>Salty</option>
						<option>Spicy</option>
						<option>Sour</option>
						<option>Bitter</option>
					</select>
				</p>

				<p>
					How I feel:
					<select style={{width:'auto'}}>
						<option>Fatigued</option>
						<option>Headache</option>
						<option>Nausea</option>
						<option>Mood Swings</option>
						<option>Other</option>
					</select>
				</p>

				<p>Highlights:</p>
				<p><textarea></textarea></p>

				<p>Appointments:</p>
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