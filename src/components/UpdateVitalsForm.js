import React from 'react';

function UpdateVitalsForm(props) {
	function submit() {
		let inputs = document.getElementById('vitals-popup').getElementsByTagName('input');
		let anxietySelect = document.getElementById('vitals-popup').getElementsByTagName('select')[0];

		let data = {
			'systolic blood pressure': parseInt(inputs[0].value),
			'diastolic blood pressure': parseInt(inputs[1].value),
			weight: parseInt(inputs[2].value),
			anxiety: parseInt(anxietySelect.options[anxietySelect.selectedIndex].text[0])
		}

		props.setVisible(false);
		props.addData(data);
	}

	function cancel() {
		props.setVisible(false);
	}

	return (
		<div className="popup-background">
			<div className="popup same-rows" id="vitals-popup">
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
					<select style={{width:'auto'}}>
						<option>1 - low</option>
						<option>2 - mild</option>
						<option>3 - moderate</option>
						<option>4 - high</option>
						<option>5 - extreme</option>
					</select>
				</p>
				<div style={{display:'flex', justifyContent:'space-evenly'}}>
					<button onClick={() => submit()}>submit</button>
					<button onClick={() => cancel()} className="inverted">cancel</button>
				</div>
			</div>
		</div>
	);
}

export default UpdateVitalsForm