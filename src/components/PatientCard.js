import React from 'react';

function PatientCard(props) {
	return (
		<div className="patient-card" onClick={() => props.setActivePatient(props.patient)}>
			<span>{props.patient.name}</span><br/>
			<span>{props.patient.dob}</span>
		</div>
	)
}

export default PatientCard;