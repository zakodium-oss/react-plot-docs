import React from 'react';
import { Axis, FunctionSeries, Legend, Plot } from 'react-plot';

export default function Series() {
  return (
    <Plot width={800} height={300}>
      <FunctionSeries
        getY={(x) => Math.sin(x)}
        label="y=4*sin(x)"
        lineStyle={{ stroke: 'blue' }}
      />
      <FunctionSeries
        getY={(x) => Math.cos(x)}
        label="y=4*cos(x)"
        lineStyle={{ stroke: 'red' }}
      />
      <Legend position="embedded" />
      <Axis min={0} max={20} id="x" position="bottom" />
      <Axis min={-2} max={2} id="y" position="left" />
    </Plot>
  );
}
