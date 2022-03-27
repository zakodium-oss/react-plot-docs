import React from 'react';
import { Annotations, Axis, LineSeries, Plot } from 'react-plot';
import { Line } from 'react-plot/lib-esm/components/Annotations/Line';

export default function SimpleExample() {
  return (
    <Plot width={300} height={300}>
      <LineSeries
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 5 },
          { x: 3, y: 1 },
          { x: 4, y: 8 },
          { x: 5, y: 3 },
        ]}
      />
      <Axis position="bottom" />
      <Axis position="left" />
      <Annotations>
        <Line x1={2} y1={3} x2={6} y2={5} />
      </Annotations>
    </Plot>
  );
}
