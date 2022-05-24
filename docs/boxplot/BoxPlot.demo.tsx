import React from 'react';
import {
  AnnotationBoxPlotProps,
  Plot,
  Annotations,
  Annotation,
  SeriesPoint,
} from 'react-plot';
import { ScatterSeries, Axis } from 'react-plot';

import random from 'random';

import { median, quartiles, max, min } from 'ml-stat/array';

export default function BoxPlotExample() {
  // dynamically generate some normally distributed data about the arbritary value of 300
  const generator = random.normal(300, 100);
  const jitter = random.normal(0, 0.1);
  const data: number[] = new Array(50).fill(null).map((_, i) => generator());
  const points: SeriesPoint[] = data.map((value) => {
    return { x: jitter(), y: value };
  });

  const quarts = quartiles(data);

  const props: AnnotationBoxPlotProps = {
    max: max(data),
    min: min(data),
    q1: quarts.q3,
    median: median(data),
    q3: quarts.q1,
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
    <Plot width={300} height={700}>
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
