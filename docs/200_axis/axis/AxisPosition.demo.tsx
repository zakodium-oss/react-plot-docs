import React from 'react';
import { Plot, Axis, ScatterSeries } from 'react-plot';

export default function Series() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Plot width={300} height={300}>
        <ScatterSeries
          data={[
            { x: 1, y: 100 },
            { x: 2, y: 50 },
            { x: 3, y: 300 },
            { x: 4, y: 350 },
            { x: 5, y: 200 },
            { x: 6, y: 100 },
            { x: 7, y: 250 },
            { x: 8, y: 200 },
            { x: 9, y: 150 },
          ]}
        />
        <Axis min={0} max={400} position="left" label="Left Axis" />
        <Axis min={0} max={10} position="bottom" label="Bottom Axis" />
      </Plot>
      <Plot width={300} height={300}>
        <ScatterSeries
          data={[
            { x: 1, y: 100 },
            { x: 2, y: 50 },
            { x: 3, y: 300 },
            { x: 4, y: 350 },
            { x: 5, y: 200 },
            { x: 6, y: 100 },
            { x: 7, y: 250 },
            { x: 8, y: 200 },
            { x: 9, y: 150 },
          ]}
        />
        <Axis min={0} max={400} position="right" label="Right Axis" />
        <Axis min={0} max={10} position="top" label="Top Axis" />
      </Plot>
    </div>
  );
}
