import React from 'react';
import { Axis, BarSeries, Plot } from 'react-plot';

export default function Series() {
  return (
    <Plot width={300} height={300}>
      <BarSeries
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 2 },
          { x: 5, y: 1 },
        ]}
        lineStyle={{ stroke: 'rgba(255,0,0,0.5)', strokeWidth: '10' }}
      />
      <BarSeries
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 1 },
          { x: 3, y: 2 },
          { x: 4, y: 1 },
          { x: 5, y: 2 },
        ]}
        lineStyle={{ stroke: 'rgba(0,255,0,0.5)', strokeWidth: '30' }}
      />
      <Axis min={0} max={6} id="x" position="bottom" />
      <Axis min={0} id="y" position="left" />
    </Plot>
  );
}
