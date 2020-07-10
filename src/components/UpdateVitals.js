import React from 'react';

function UpdateVitals(props) {
	function submit() {
		let inputs = document.getElementById('vitals-popup').getElementsByTagName('input');
		let anxietySelect = document.getElementById('vitals-popup').getElementsByTagName('select')[0];

		let bloodPressure = inputs[0].value + "/" + inputs[1].value;
		let weight = inputs[2].value;
		let anxiety = anxietySelect.options[anxietySelect.selectedIndex].text;
		let something1 = inputs[3].value;
		let something2 = inputs[4].value;

		console.log(bloodPressure);
		console.log(weight);
		console.log(anxiety);
		console.log(something1);
		console.log(something2);

		props.setVisible(false);
	}
	function cancel() {
		props.setVisible(false);
	}

	return (
		<div className="popup-background">
			<div className="popup" id="vitals-popup">
				<span style={{fontWeight:'bold', color:'#3D6053'}}>Update your vitals here:</span>
				<p>
					blood pressure:
					<input style={{width:'40px'}} type="text"/>
					<span style={{margin: '0 10px'}}>/</span>
					<input style={{width:'40px'}} type="text"/>
				</p>
				<p>weight: <input type="text"/></p>
				<p>
					anxiety:
					<select>
						<option>good</option>
						<option>bad</option>
					</select>
				</p>
				<p>something 1: <input type="text"/></p>
				<p>something 2: <input type="text"/></p>
				<div style={{display:'flex', justifyContent:'space-evenly'}}>
					<button onClick={() => submit()}>submit</button>
					<button onClick={() => cancel()} className="inverted">cancel</button>
				</div>
			</div>
		</div>
	);
}

export default UpdateVitals