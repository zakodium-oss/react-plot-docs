import React from 'react';
import { Plot, FunctionSeries, LineSeries } from 'react-plot';

export default function Series() {
  return (
    <Plot width={800} height={300}>
      <FunctionSeries getY={(x) => 5 * Math.sin(x)} />
      <LineSeries
        data={[
          { x: 0, y: 2 },
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 2 },
          { x: 5, y: -3 },
          { x: 6, y: 4 },
          { x: 7, y: 2 },
          { x: 8, y: 5 },
        ]}
      />
    </Plot>
  );
}
