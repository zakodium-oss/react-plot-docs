import React from 'react';
import { Plot, BarSeries } from 'react-plot';

export default function Series() {
  return (
    <Plot width={300} height={300}>
      <BarSeries
        // todo : remove display marker
        displayMarker
        pointLabel="5"
        pointLabelStyle={{
          fill: ({ x }) => (x > 2 ? 'red' : 'grey'),
          fontWeight: 'bolder',
        }}
        data={[
          { x: 2, y: 2 },
          { x: 4, y: 3 },
          { x: 6, y: 1 },
        ]}
      />
      <BarSeries
        // todo : remove display marker
        displayMarker
        pointLabel={({ x, y }) => `(${x},${y})`}
        pointLabelStyle={{
          transform: 'translate(3px, -4px)',
        }}
        data={[
          { x: 1, y: 0 },
          { x: 3, y: 5 },
          { x: 5, y: 2 },
        ]}
      />
    </Plot>
  );
}
