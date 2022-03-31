import { xAbsolute } from 'ml-spectra-processing';
import React from 'react';
import { Plot, ScatterSeries } from 'react-plot';

export default function Series() {
  return (
    <Plot width={300} height={300}>
      <ScatterSeries
        pointLabel={'5'}
        pointLabelStyle={{
          fill: ({ x }) => (x > 2 ? 'red' : 'grey'),
          fontWeight: 'bolder',
        }}
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 2 },
          { x: 5, y: 1 },
        ]}
      />
      <ScatterSeries
        pointLabel={({ x, y }) => `(${x},${y})`}
        pointLabelStyle={{
          transform: 'translate(3px, -4px)',
        }}
        data={[
          { x: 1, y: 0 },
          { x: 2, y: 1 },
          { x: 3, y: 2 },
          { x: 4, y: 1 },
          { x: 5, y: 2 },
          { x: 6, y: 3 },
        ]}
      />
    </Plot>
  );
}
