import React from 'react';
import { Plot, Axis, ParallelAxis } from 'react-plot';

export default function Series() {
  return (
    <Plot width={300} height={100}>
      <Axis id="x" max={20} min={0} position="bottom" label="Base Axis" />

      <ParallelAxis
        id="x"
        label="Parallel Axis Label"
        labelStyle={{ fill: 'green', fontSize: '25px', fontWeight: 'bold' }}
      />
      {/** hidden axis */}
      <Axis min={0} max={1} position="left" hidden />
    </Plot>
  );
}
