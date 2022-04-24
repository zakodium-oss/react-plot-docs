import React from 'react';
import { Plot, Axis } from 'react-plot';

export default function Series() {
  return (
    <div>
      <Plot width={600} height={50}>
        <Axis min={0} max={6} position="top" label="Normal Axis" />
        {/** hidden axis */}
        <Axis min={0} max={1} position="left" hidden />
      </Plot>
      <Plot width={600} height={50}>
        <Axis
          min={0}
          max={6}
          tickLabelStyle={{ fill: 'red', fontWeight: 'bold' }}
          position="bottom"
          label="Flipped Axis"
          flip
        />
        {/** hidden axis */}
        <Axis min={0} max={1} position="left" hidden />
      </Plot>
    </div>
  );
}
