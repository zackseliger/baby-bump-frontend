import React from 'react';
import ChartCard from './ChartCard';
import JournalCard from './JournalCard';

function PatientView(props) {
	return (
		<React.Fragment>
			<div className="card" style={{float:'right', color:'#3D6053', fontWeight:'bold', marginTop:'35px'}}>
				<span>{props.patient.name}</span><br/>
				<span>{props.patient.dob}</span>
			</div>
			<h1 style={{fontWeight:'normal', marginBottom:'0'}}>
				Here's how <strong>{props.patient.name.substring(0, props.patient.name.indexOf(" "))}</strong> is progressing
			</h1>

			{/*METRICS*/}
			<h1 style={{marginTop:'50px'}}>Metrics</h1>
			<div>
				{props.patient.userData.length>0?
				<React.Fragment>
					{props.patient.userData.map((data, index) => 
						<ChartCard key={index} name={data.name} data={data.data}/>
					)}
				</React.Fragment>
				:null}
			</div>

			{/*JOURNALS*/}
			<h1 style={{marginTop:'50px'}}>Journal Entries</h1>
			<div>
				{props.patient.journals.map((journal, index) => {
					return (
						<JournalCard key={index} readOnly={true} weekNum={index+1} journal={journal} editJournal={props.editJournal}/>
					);
				})}
			</div>

			{/*INFO*/}
			<h1 style={{marginTon:'50px'}}>Profile Info</h1>
			<div style={{display:'flex', justifyContent:'space-between'}}>
				<div style={{display:'inline-block', verticalAlign:'top'}}>
					<p className="profile-title">first name</p>
					<p>{props.patient.name.substring(0, props.patient.name.indexOf(' '))}</p>

					<p className="profile-title">last name</p>
					<p>{props.patient.name.substring(props.patient.name.indexOf(' ')+1)}</p>

					<p className="profile-title">email</p>
					<p>{props.patient.email}</p>
				</div>
				<div style={{display:'inline-block'}}>
					<p className="profile-title">due date</p>
					<p>{props.patient.dueDate}</p>

					<p className="profile-title">starting weight</p>
					<p>{props.patient.userData[2][0]+" lbs."}</p>

					<p className="profile-title">birth date</p>
					<p>{props.patient.dob}</p>

					<p className="profile-title">race / ethnicity</p>
					<p>{props.patient.race}</p>
				</div>
			</div>

			<p style={{textAlign:'center'}}>
				<button onClick={() => props.goBack()}>back</button>
			</p>
		</React.Fragment>
	)
}

export default PatientView;