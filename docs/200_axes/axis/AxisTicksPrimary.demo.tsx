import React from 'react';
import { Plot, Axis } from 'react-plot';

export default function Series() {
  return (
    <Plot width={300} height={100}>
      <Axis
        max={20}
        min={0}
        position="top"
        label="hidden primary ticks"
        primaryTickLength={0}
      />
      <Axis
        max={20}
        min={0}
        position="bottom"
        label="personalized primary ticks"
        primaryTickLength={12}
        primaryTickStyle={{ stroke: 'red' }}
      />
      {/** hidden axis */}
      <Axis min={0} max={1} position="left" hidden />
    </Plot>
  );
}
