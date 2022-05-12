import React from 'react';
import { Plot, Axis } from 'react-plot';

export default function Series() {
  return (
    <Plot width={300} height={100}>
      <Axis max={20} min={0} position="bottom" hiddenLine label="Hidden Line" />
      <Axis
        max={20}
        min={0}
        position="top"
        lineStyle={{ stroke: 'red' }}
        label="Change line style"
      />

      {/** hidden axis */}
      <Axis min={0} max={1} position="left" hidden />
    </Plot>
  );
}
