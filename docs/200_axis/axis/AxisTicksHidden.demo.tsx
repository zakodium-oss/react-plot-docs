import React from 'react';
import { Plot, Axis } from 'react-plot';

export default function Series() {
  return (
    <Plot width={300} height={20}>
      <Axis
        max={20}
        min={0}
        position="bottom"
        label="Hidden Ticks"
        hiddenTicks
      />
      {/** hidden axis */}
      <Axis min={0} max={1} position="left" hidden />
    </Plot>
  );
}
