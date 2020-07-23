import React from 'react';

function UpdateVitalsForm(props) {
	function submit() {
		let inputs = document.getElementById('vitals-popup').getElementsByTagName('input');
		let anxietySelect = document.getElementById('vitals-popup').getElementsByTagName('select')[0];

		let data = {
			'systolic blood pressure': parseInt(inputs[0].value) || Math.round(Math.random()*30+120),
			'diastolic blood pressure': parseInt(inputs[1].value) || Math.round(Math.random()*10+80),
			weight: parseInt(inputs[2].value) || Math.round(Math.random()*30+100),
			anxiety: parseInt(anxietySelect.options[anxietySelect.selectedIndex].text[0]),
			kicks: parseInt(inputs[3].value) || Math.round(Math.random()*5+7),
			'fetal heart tones': parseInt(inputs[4].value) || Math.round(Math.random()*50+120)
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
				<p>
					kicks:
					<input type="text"/>
				</p>
				<p>
					fetal heart tones:
					<input type="text"/>
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