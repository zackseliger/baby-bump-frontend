import React from 'react';
import { Chart } from 'react-charts';

function ChartCard(props) {
	let showTop = props.showTop;
	let showBottom = props.showBottom;
	if (showTop === undefined) showTop = true;
	if (showBottom === undefined) showBottom = true;

	const data = React.useMemo(
    () => [
      {
        label: 'KPI',
        data: [
          [0, 1],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      }
    ],
    []
	)
	const series = React.useMemo(
    () => ({
      type: 'area',
    }),
    []
	)
	const tooltip = React.useMemo(
    () => ({
      align: 'top',
      anchor: 'top'
    }),
    []
  )
	const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom', show: showBottom },
      { type: 'linear', position: 'left', show: showTop }
    ],
    []
  )

	return (
		<div className="chart-card">
			<div className="chart-container">
				<Chart data={data} series={series} axes={axes} tooltip={tooltip}/>
			</div>
		</div>
	);
}

export default ChartCard;