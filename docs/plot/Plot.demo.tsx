import React from 'react';
import { Axis, Heading, Legend, LineSeries, Plot } from 'react-plot';

export default function DrainVoltage() {
  return (
    <Plot
      width={300}
      height={300}
      seriesViewportStyle={{
        stroke: 'black',
        strokeWidth: 1,
      }}
    >
      <LineSeries
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 2 },
          { x: 5, y: 1 },
        ]}
        label="Line Serie"
      />
      <Axis position="bottom" />
      <Axis position="left" />
    </Plot>
  );
}
