import React from 'react';
import { Plot, Axis, ParallelAxis } from 'react-plot';

export default function Series() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px 90px',
        justifyContent: 'center',
      }}
    >
      <Plot width={300} height={100}>
        <Axis id="x" max={20} min={0} position="bottom" label="Base Axis" />
        <ParallelAxis
          id="x"
          label="Parallel Inner Ticks"
          tickPosition="inner"
        />
        {/** hidden axis */}
        <Axis min={0} max={1} position="left" hidden />
      </Plot>
      <Plot width={300} height={100}>
        <Axis id="x" max={20} min={0} position="bottom" label="Base Axis" />
        <ParallelAxis
          id="x"
          label="Parallel Outer Ticks"
          tickPosition="outer"
        />
        {/** hidden axis */}
        <Axis min={0} max={1} position="left" hidden />
      </Plot>
      <Plot width={300} height={100}>
        <Axis id="x" max={20} min={0} position="bottom" label="Base Axis" />
        <ParallelAxis
          id="x"
          label="Parallel Center Ticks"
          tickPosition="center"
        />
        {/** hidden axis */}
        <Axis min={0} max={1} position="left" hidden />
      </Plot>
    </div>
  );
}
