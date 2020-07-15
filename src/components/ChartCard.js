import React, { useState } from 'react';
import { Line, Bar, defaults } from 'react-chartjs-2';
import BadIcon from './icons/BadIcon';
import MediumIcon from './icons/MediumIcon';
import GoodIcon from './icons/GoodIcon';
import MetricPopup from './MetricPopup';

defaults.global.defaultFontFamily = "'Muli', 'Roboto', 'Helvetica', sans-serif"

function ChartCard(props) {
	let [status, setStatus] = useState('medium');
	let [color, setColor] = useState('#AAA');
	let [showingPopup, setShowingPopup] = useState(false);
	let title = props.name;
	let labels = [];
	let borderColors = [];
	let dataPoints = props.data;

	function updateStatus(newStatus) {
		if (status === newStatus) return;

		setStatus(newStatus);

		if (newStatus === 'good') {
			setColor('#3E6');
		}
		else if (newStatus === 'medium') {
			setColor('#AAA');
		}
		else if (newStatus === 'bad') {
			setColor('#F33');
		}
	}

	//see if we're good or bad, or maybe don't change status
	let lastData = props.data[props.data.length-1];
	if (props.name === 'systolic blood pressure') {
		if (lastData >= 140) {
			updateStatus('bad');
		}
		else if (lastData >= 130) {
			updateStatus('medium');
		}
		else {
			updateStatus('good');
		}
	}
	else if (props.name === 'diastolic blood pressure') {
		if (lastData >= 90) {
			updateStatus('bad');
		}
		else if (lastData >= 80) {
			updateStatus('medium');
		}
		else {
			updateStatus('good');
		}
	}
	else if (props.name === 'weight') {
		if (lastData >= 400) {
			updateStatus('bad');
		}
		else if (lastData >= 300) {
			updateStatus('medium');
		}
		else {
			updateStatus('good');
		}
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
		<React.Fragment>
			<div className="chart-card" onClick={() => setShowingPopup(true)}>
				{status==='good'?<GoodIcon width="20px" height="20px" color={color} />:[]}
				{status==='medium'?<MediumIcon width="20px" height="20px" color={color} />:[]}
				{status==='bad'?<BadIcon width="20px" height="20px" color={color} />:[]}
				<Line data={data} options={options}/>
			</div>
			{showingPopup?<MetricPopup name={props.name} data={props.data} setVisibility={setShowingPopup}/>:[]}
		</React.Fragment>
	);
}

export default ChartCard;