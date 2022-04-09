import React from 'react';
import { Plot, Axis } from 'react-plot';

export default function Series() {
  return (
    <Plot width={600} height={50}>
      <Axis
        tickPosition="center"
        min={0}
        max={6}
        position="bottom"
        label="Axis Label"
      />

      {/** hidden axis */}
      <Axis min={0} max={1} position="left" label="Axis Label" hidden />
    </Plot>
  );
}
