import React from 'react';
import {
  Axis,
  BarSeries,
  Heading,
  Legend,
  Plot,
  RangeSeries,
} from 'react-plot';

export default function Illustrations() {
  return (
    <Plot width={600} height={300}>
      <Heading title="Click on legend series" />
      <Legend showHide position="right" />

      <BarSeries
        data={[
          { x: 5, y: 20 },
          { x: 1, y: 22 },
          { x: 2, y: 24 },
          { x: 3, y: 26 },
          { x: 4, y: 28 },
        ]}
        lineStyle={{
          stroke: 'green',
        }}
        displayMarkers
        label="Label Bar series"
      />
      <RangeSeries
        data={[
          { x: 0, y1: 11, y2: 10 },
          { x: 1, y1: 6, y2: 3 },
          { x: 3, y1: 25, y2: 20 },
          { x: 4.5, y1: 11, y2: 9 },
          { x: 6, y1: 14, y2: 11 },
        ]}
        lineStyle={{ fill: 'grey', stroke: 'black' }}
        label="Label Range series"
      />
      <Axis position="left" paddingEnd="20%" />
    </Plot>
  );
}
