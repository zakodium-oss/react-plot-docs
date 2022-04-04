import React from 'react';
import { Plot, FunctionSeries, Axis } from 'react-plot';

export default function Series() {
  return (
    <Plot width={800} height={300}>
      <FunctionSeries
        lineStyle={{ stroke: 'green' }}
        getY={(x) => Math.sin(x)}
      />
      <Axis min={0} max={20} position="bottom" />
    </Plot>
  );
}
