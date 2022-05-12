import React from 'react';
import { Plot, BarSeries } from 'react-plot';

export default function Series() {
  return (
    <Plot width={300} height={300}>
      <BarSeries
        lineStyle={{ stroke: 'green' }}
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 2 },
          { x: 5, y: 1 },
        ]}
      />
    </Plot>
  );
}
