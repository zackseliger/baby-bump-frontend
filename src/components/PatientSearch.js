import React, { useState } from 'react';
import PatientCard from './PatientCard';

function PatientSearch(props) {
	let [searchTerm, setSearchTerm] = useState("");

	function handleChange(e) {
		setSearchTerm(e.target.value);
	}

	//see how many people are matched by our search
	let numMatched = 0;
	for (let i = 0; i < props.patients.length; i++) {
		if (props.patients[i].name.toLowerCase().indexOf(searchTerm) !== -1) {
			numMatched++;
			break;
		}
	}

	return (
		<React.Fragment>
			<h1 style={{fontWeight:'normal', marginBottom:'0'}}>Welcome back, <strong>Dr. LeBlanc</strong></h1>
			<p style={{marginTop:'0', fontSize:'23px'}}>See how your patients are progressing.</p>

			<p>
				<input style={{marginTop:'50px', marginLeft:'10px'}} type="text" placeholder="search" onChange={handleChange}/>
			</p>

			{
				props.patients.map((pat) =>
				(pat.name.toLowerCase().indexOf(searchTerm)!==-1)
				?
				<PatientCard setActivePatient={props.setActivePatient} patient={pat}/>
				:
				null)
			}

			{numMatched===0?<p style={{fontSize:'23px'}}>No patients found.</p>:null}
		</React.Fragment>
	)
}

export default PatientSearch;