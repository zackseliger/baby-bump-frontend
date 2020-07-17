import React from 'react';
import { Line } from 'react-chartjs-2'

function MetricPopup(props) {
	let title = props.name;
	let labels = [];
	let borderColors = [];
	let dataPoints = props.data;

	let blurbs = {
		'systolic blood pressure': 'Systolic blood pressure ndicates how much pressure your blood is exerting against your artery walls when the heart beats.',
		'diastolic blood pressure': 'Diastolic blood pressure indicates how much pressure your blood is exerting against your artery walls while the heart is resting between beats.',
		'weight': 'While each pregnancy is different, having a high BMI during pregnancy increases the risk of complications and various health issues for your baby.',
		'anxiety': 'High anxiety can have negative effects on your pregnancy and baby but it is not uncommon. It is important that you address any anxiety that emerges during pregnancy.',
		'kicks': 'A general rule of thumb is to document 10 baby kicks within a 2 hour period daily. If you do not achieve this, try again later in the day. Upon your second attempt, if 10 kicks are not noted, please connect with a healthcare professional.',
		'fetal heart tones': 'Fetal heart rate monitoring measures the heart rate and rhythm of your baby. The average fetal heart rate is between 110 and 160 beats per minute. It can vary by 5 to 25 beats per minute.'
	}

	for (let i = 0; i < props.data.length; i++) {
		labels.push('');
		borderColors.push('rgba(20,105,200,0.2)');
	}

	const data = {
		labels: labels,
		datasets: [{
			label: title,
			data: dataPoints,
			backgroundColor: 'rgba(20,105,200,0.2)',
			borderColor: borderColors,
			borderWidth: 1
		}]
	}

	const options = {
		title: {
			display: true,
			text: title
		},
		legend: {
			display: false
		},
		tooltips: {
			mode: 'nearest'
		},
		scales:{
			xAxes: [{
					display: false //this will remove all the x-axis grid lines
			}]
		}
	}

	return (
		<div className="popup-background">
			<div className="popup" style={{maxWidth:'35%'}}>
				<p><span style={{fontWeight:'bold', color:'#3D6053'}}>{props.name}</span></p>

				<p>{blurbs[props.name]}</p>

				<Line style={{width:'550px'}} data={data} options={options}/>

				<p>
					<button onClick={() => props.setVisibility(false)}>Close</button>
				</p>
			</div>
		</div>
	);
}

export default MetricPopup;