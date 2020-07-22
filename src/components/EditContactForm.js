import React, { useState } from 'react';

let relationships = ["spouse / partner", "physician"];

function EditContactForm(props) {
	let [shareMetrics, setShareMetrics] = useState(props.contact.shareMetrics);
	let [shareJournals, setShareJournals] = useState(props.contact.shareJournals);

	function save() {
		let inputs = document.getElementById('share-popup').getElementsByTagName('input');
		let relationshipSelect = document.getElementById('share-popup').getElementsByTagName('select')[0];

		let contact = {
			firstName: inputs[0].value,
			lastName: inputs[1].value,
			email: inputs[2].value,
			relationship: relationshipSelect.options[relationshipSelect.selectedIndex].text,
			shareMetrics: shareMetrics,
			shareJournals: shareJournals
		};

		props.editContact(props.contactIndex, contact);
		props.close();
	}

	function cancel() {
		props.close();
	}

	return (
		<div className="popup-background">
			<div className="popup" id="share-popup" style={{textAlign:'left'}}>
				<span style={{fontWeight:'bold', color:'#3D6053'}}>Edit contact</span>
				<p className="row">
					<span>First Name<br/><input type="text" defaultValue={props.contact.firstName}/></span>
					<span>Last Name<br/><input type="text" defaultValue={props.contact.lastName}/></span>
				</p>

				<p className="row">
					<span>Email<br/><input type="text" defaultValue={props.contact.email}/></span>
					<span>
						Relationship to you<br/>
						<select>
							{relationships.map((val) => <option selected={props.contact.relationship===val?true:false}>{val}</option>)}
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

				<div style={{display:'flex', justifyContent:'space-evenly'}}>
					<button onClick={() => save()}>save</button>
					<button onClick={() => cancel()} className="inverted">cancel</button>
				</div>
			</div>
		</div>
	)
}

export default EditContactForm;