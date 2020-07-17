import React, { useState } from 'react';
import EditJournalForm from './EditJournalForm';

function JournalCard(props) {
	let [showingPopup, setShowingPopup] = useState(false);

	function showPopup() {
		setShowingPopup(true);
	}

	return (
		<React.Fragment>
			<div className="journal-card" onClick={showPopup}>
				<span>week {props.weekNum}</span>
			</div>

			{showingPopup?<EditJournalForm journal={props.journal} editJournal={props.editJournal} weekNum={props.weekNum} setVisibility={setShowingPopup}/>:[]}
		</React.Fragment>
	);
}

export default JournalCard;