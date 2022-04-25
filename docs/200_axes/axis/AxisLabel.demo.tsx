import React from 'react';
import { Plot, Axis } from 'react-plot';

export default function Series() {
  return (
    <Plot width={300} height={50}>
      <Axis
        max={20}
        min={0}
        position="bottom"
        label="Axis Label"
        labelStyle={{ fill: 'green', fontSize: '25px', fontWeight: 'bold' }}
      />

      {/** hidden axis */}
      <Axis min={0} max={1} position="left" hidden />
    </Plot>
  );
}
