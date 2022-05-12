import React from 'react';
import { Plot, Axis } from 'react-plot';

export default function Series() {
  return (
    <Plot width={300} height={80}>
      <Axis
        max={20}
        min={0}
        position="bottom"
        label="Custom ticks label"
        tickLabelStyle={{ fill: 'blue' }}
        tickLabelFormat={(x: number) => `${x}c°`}
      />
      <Axis
        max={20}
        min={0}
        position="top"
        label="Hidden tick label"
        tickLabelFormat={() => ''}
      />
      {/** hidden axis */}
      <Axis min={0} max={1} position="left" hidden />
    </Plot>
  );
}
