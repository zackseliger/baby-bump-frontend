import React, { useState } from 'react';
import PatientSearch from '../PatientSearch';
import PatientView from '../PatientView';

function Patients(props) {
	
	return (
		<div style={{padding:'50px 100px'}}>
			{
				(props.activePatient===null)
				?
				<PatientSearch patients={props.patients} setActivePatient={props.setActivePatient}/>
				:
				<PatientView patient={props.activePatient} goBack={() => props.setActivePatient(null)}/>
			}
		</div>
	)
}

export default Patients;