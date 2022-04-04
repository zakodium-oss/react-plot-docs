import React from 'react';
import { Plot, FunctionSeries, Axis } from 'react-plot';

const f = (x: number) => Math.sqrt(x);
export default function Series() {
  return (
    <Plot width={800} height={300}>
      <FunctionSeries getY={f} />
      <Axis min={0} max={20} position="bottom" />
    </Plot>
  );
}
