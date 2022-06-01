import React from 'react';
import {
	AnnotationBoxPlotProps,
	Plot,
	Annotations,
	Annotation,
	SeriesPoint,
} from 'react-plot';
import { ScatterSeries, Axis } from 'react-plot';
import { xBoxPlot, createRandomArray } from 'ml-spectra-processing';

export default function BoxPlotExample() {
	// dynamically generate some normally distributed data about the arbritrary value of 300
	const seed1 = 2359;
	const seed2 = 787486;
	const numPoints = 100;

	const data = createRandomArray({
		distribution: 'normal',
		seed: seed1,
		mean: 300,
		standardDeviation: 100,
		length: numPoints,
	});

	const jitter = createRandomArray({
		distribution: 'normal',
		seed: seed2,
		mean: 0,
		standardDeviation: 0.1,
		length: numPoints,
	});

	var points: SeriesPoint[] = [];
	data.forEach((value, i) => {
		points.push({ x: jitter[i], y: value });
	});

	const boxPlotStats = xBoxPlot(data);

	const props: AnnotationBoxPlotProps = {
		max: boxPlotStats.max,
		min: boxPlotStats.min,
		q1: boxPlotStats.q1,
		median: boxPlotStats.median,
		q3: boxPlotStats.q3,
		width: 1.0,
		y: 0,
		xAxis: 'y',
		yAxis: 'x',
		medianColor: 'orange',
		medianStyle: { strokeWidth: 4 },
		minMaxStyle: { strokeWidth: 2 },
		minMaxColor: 'blue',
	};

	return (
		<Plot width={300} height={300}>
			<Annotations>
				<Annotation.BoxPlot {...props} />
			</Annotations>
			<ScatterSeries
				data={points}
				markerStyle={{ opacity: 0.3, fill: 'green' }}
			/>
			<Axis id="x" position="bottom" min={-2} max={2} />
			<Axis id="y" position="left" min={0} max={600} />
		</Plot>
	);
}
