import React, { useState } from 'react';
import EditJournalForm from './EditJournalForm';
import ViewJournalForm from './ViewJournalForm';

function JournalCard(props) {
	let [showingPopup, setShowingPopup] = useState(false);

	function showPopup() {
		setShowingPopup(true);
	}

	let form = <EditJournalForm journal={props.journal} editJournal={props.editJournal} weekNum={props.weekNum} setVisibility={setShowingPopup}/>;
	if (props.readOnly) {
		form = <ViewJournalForm journal={props.journal} weekNum={props.weekNum} setVisibility={setShowingPopup}/>;
	}

	return (
		<React.Fragment>
			<div className="journal-card" onClick={showPopup}>
				<span>week {props.weekNum}</span>
			</div>

			{showingPopup?form:null}
		</React.Fragment>
	);
}

export default JournalCard;