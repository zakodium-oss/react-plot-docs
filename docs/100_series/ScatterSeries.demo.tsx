import React from 'react';
import { Plot, ScatterSeries } from 'react-plot';

export default function Series() {
  return (
    <Plot width={300} height={300}>
      <ScatterSeries
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 2 },
          { x: 5, y: 1 },
        ]}
      />
      <ScatterSeries
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 1 },
          { x: 3, y: 2 },
          { x: 4, y: 1 },
          { x: 5, y: 2 },
        ]}
      />
    </Plot>
  );
}
