import React from 'react';
import { Line } from 'react-chartjs-2'

function MetricPopup(props) {
	let title = props.name;
	let labels = [];
	let borderColors = [];
	let dataPoints = props.data;

	let blurbs = {
		'systolic blood pressure': 'Systolic blood pressure is an measure of blood pressure - an important metric for monitoring your health. A high value means something bad, while a low value generally means something good.',
		'diastolic blood pressure': 'Diastolic blood pressure is a measure of the pressure your blood exerts on your body when something happens. Different values mean different things, and it can give doctors a good insight into x or y.',
		'weight': 'Weight is an important metric to follow for pregnant women. If you gain weight too quickly or too slowly, it has implications on your health.',
		'anxiety': 'Anxiety is a metric used to check on the mental health of a pregnant mother.'
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