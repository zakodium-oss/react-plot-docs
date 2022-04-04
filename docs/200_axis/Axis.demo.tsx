import React from 'react';
import { Plot, LineSeries, Axis, FunctionSeries } from 'react-plot';

export default function Series() {
  return (
    <Plot width={300} height={100}>
      <Axis min={0} max={20} position="bottom" />
    </Plot>
  );
}
