import React from 'react';
import { Plot, FunctionSeries, Axis } from 'react-plot';

export default function Series() {
  return (
    <Plot width={300} height={300}>
      <FunctionSeries getY={(x) => Math.sin(x)} />
    </Plot>
  );
}
