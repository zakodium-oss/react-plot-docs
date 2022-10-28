import React from 'react';
import { Heading, Legend, LineSeries, Plot, ScatterSeries } from 'react-plot';

export default function Illustrations() {
  return (
    <Plot width={300} height={300}>
      <Heading title="Graph Heading" subtitle="Subtitle" />
      <Legend />
      <LineSeries
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 2 },
          { x: 5, y: 1 },
        ]}
        label="Line"
      />
      <ScatterSeries
        data={[
          { x: 1, y: 5 },
          { x: 2, y: 1 },
          { x: 3, y: 7 },
          { x: 4, y: 4 },
          { x: 5, y: 5 },
        ]}
        label="Scatter"
      />
    </Plot>
  );
}
