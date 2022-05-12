import React from 'react';
import { Plot, Axis } from 'react-plot';

export default function Series() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <Plot width={300} height={50}>
        <Axis
          max={20}
          min={0}
          position="bottom"
          label="Inner Ticks"
          tickPosition="inner"
        />
        {/** hidden axis */}
        <Axis min={0} max={1} position="left" hidden />
      </Plot>
      <Plot width={300} height={50}>
        <Axis
          max={20}
          min={0}
          position="bottom"
          label="Outer Ticks"
          tickPosition="outer"
        />
        {/** hidden axis */}
        <Axis min={0} max={1} position="left" hidden />
      </Plot>
      <Plot width={300} height={50}>
        <Axis
          max={20}
          min={0}
          position="bottom"
          label="Center Ticks"
          tickPosition="center"
        />
        {/** hidden axis */}
        <Axis min={0} max={1} position="left" hidden />
      </Plot>
    </div>
  );
}
