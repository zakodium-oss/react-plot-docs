import React from 'react';
import { Plot, Axis, ParallelAxis } from 'react-plot';

export default function Series() {
  return (
    <Plot width={600} height={300}>
      <Axis min={0} max={5} position="left" label="Left Axis" />
      <Axis min={0} max={10} id="x" position="bottom" label="Bottom Axis" />
      <ParallelAxis id="x" label="Parallel Axis" />
    </Plot>
  );
}
