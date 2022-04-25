import React from 'react';
import { Plot, Axis, ParallelAxis } from 'react-plot';

export default function Series() {
  return (
    <Plot width={600} height={100}>
      <Axis id="x" min={0} max={6} position="bottom" label="Base Axis" />
      <ParallelAxis id="x" label="Parallel Axis" />
      {/** hidden axis */}
      <Axis min={0} max={1} position="left" hidden />
    </Plot>
  );
}
