import React from 'react';
import { LineSeries, Plot, ScatterSeries, BarSeries } from 'react-plot';

export default function Series() {
  return (
    <Plot width={300} height={300}>
      <LineSeries
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
        // todo: in next release
        // xShift={2}
        // yShift={5}
      />
      <BarSeries
        hidden
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 0 },
          { x: 3, y: 2 },
          { x: 5, y: 1 },
          { x: 6, y: 2 },
        ]}
      />
    </Plot>
  );
}
