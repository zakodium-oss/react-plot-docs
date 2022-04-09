import React from 'react';
import { Plot, Axis, ScatterSeries } from 'react-plot';

export default function Series() {
  return (
    <Plot width={600} height={400}>
      <ScatterSeries
        yAxis="y"
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 3 },
          { x: 3, y: 5 },
          { x: 5, y: 1 },
          { x: 6, y: 2 },
        ]}
        markerStyle={{ fill: 'red' }}
      />
      <ScatterSeries
        yAxis="z"
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 1 },
          { x: 3, y: 2 },
          { x: 4, y: 1 },
          { x: 5, y: 2 },
          { x: 6, y: 2.5 },
        ]}
        markerStyle={{ fill: 'blue' }}
      />

      <Axis min={0} max={7} id="x" position="bottom" />
      <Axis min={0} max={6} id="y" position="left" label="red" />
      <Axis min={0} max={3} id="z" position="right" label="blue" />
    </Plot>
  );
}
