import React from 'react';
import { Plot, LineSeries, Axis } from 'react-plot';

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
      {/* todo: ajouter secondaryGridLine */}
      <Axis
        position="left"
        displayPrimaryGridLines
        primaryGridLineStyle={{ fill: 'red' }}
      />
    </Plot>
  );
}
