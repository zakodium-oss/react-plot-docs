import React from 'react';
import { Heading, LineSeries, Plot } from 'react-plot';

export default function Illustrations() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Plot width={300} height={200}>
        <Heading title="Top heading" position="top" />
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
      <Plot width={300} height={200}>
        <Heading title="Bottom heading" position="bottom" />
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
    </div>
  );
}
