import React from 'react';
import { Plot, Axis, ParallelAxis } from 'react-plot';

export default function Series() {
  return (
    <Plot width={300} height={80}>
      <Axis id="x" max={20} min={0} position="bottom" label="Base Axis" />
      <ParallelAxis id="x" label="Parallel Axis Hidden Ticks" hiddenTicks />
      {/** hidden axis */}
      <Axis min={0} max={1} position="left" hidden />
    </Plot>
  );
}
