import React, { useState } from 'react';

function SharePersonForm(props) {
	let [shareMetrics, setShareMetrics] = useState(true);
	let [shareJournals, setShareJournals] = useState(true);
	let [readPolicy, setReadPolicy] = useState(false);

	function submit() {
		let inputs = document.getElementById('share-popup').getElementsByTagName('input');
		let relationshipSelect = document.getElementById('share-popup').getElementsByTagName('select')[0];

		let contact = {
			firstName: inputs[0].value,
			lastName: inputs[1].value,
			email: inputs[2].value,
			relationship: relationshipSelect.options[relationshipSelect.selectedIndex].text,
			shareMetrics: shareMetrics,
			shareJournals: shareJournals,
			readPolicy: readPolicy
		};

		console.log(contact);
		
		props.setVisible(false);
		props.addContact(contact);
	}

	function cancel() {
		props.setVisible(false);
	}

	return (
		<div className="popup-background">
			<div className="popup" id="share-popup" style={{textAlign:'left'}}>
				<span style={{fontWeight:'bold', color:'#3D6053'}}>Add a support person or healthcare provider</span>
				<p className="row">
					<span>First Name<br/><input type="text"/></span>
					<span>Last Name<br/><input type="text"/></span>
				</p>
				<p className="row">
					<span>Email<br/><input type="text"/></span>
					<span>
						Relationship to you<br/>
						<select>
							<option>spouse / partner</option>
							<option>physician</option>
						</select>
					</span>
				</p>

				<p>
					Share your metrics
					<input type="checkbox" className="oval" id="share-metrics-checkbox" checked={shareMetrics} onChange={() => setShareMetrics(!shareMetrics)}/>
					<label className="oval-toggler" htmlFor="share-metrics-checkbox"></label>
				</p>
				<p>
					Share your journal entries
					<input type="checkbox" className="oval" id="share-journals-checkbox" checked={shareJournals} onChange={() => setShareJournals(!shareJournals)}/>
					<label className="oval-toggler" htmlFor="share-journals-checkbox"></label>
				</p>
				
				<p>
					<input type="checkbox" style={{boxShadow:'none'}} checked={readPolicy} onChange={() => setReadPolicy(!readPolicy)}/>
					I have read and acknowledge the privacy policy.
				</p>

				<div style={{display:'flex', justifyContent:'space-evenly'}}>
					<button onClick={() => submit()}>submit</button>
					<button onClick={() => cancel()} className="inverted">cancel</button>
				</div>
			</div>
		</div>
	);
}

export default SharePersonForm;