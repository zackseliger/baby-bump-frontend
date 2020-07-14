import React from 'react';

function JournalCard(props) {
	return (
		<div className="chart-card" style={{color:'#3D6053'}}>
			<p style={{textAlign:'center', fontWeight:'bold', color:'#3D6053'}}>A journal entry</p>
			<span>{props.journal.craving}</span>
		</div>
	);
}

export default JournalCard;