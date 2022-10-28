import React from 'react';
import { Heading, LineSeries, Plot } from 'react-plot';

export default function Illustrations() {
  return (
    <Plot width={300} height={200}>
      <Heading title="Title" subtitle="Subtitle" />
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
    </Plot>
  );
}
