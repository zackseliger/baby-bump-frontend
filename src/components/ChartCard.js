import React from 'react';
import { Line, Bar, defaults } from 'react-chartjs-2';

defaults.global.defaultFontFamily = "'Muli', 'Roboto', 'Helvetica', sans-serif"

function ChartCard(props) {
	let title = props.name;
	let labels = [];
	let borderColors = [];
	let dataPoints = props.data;

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
		<div className="chart-card">
			<Line data={data} options={options}/>
		</div>
	);
}

export default ChartCard;