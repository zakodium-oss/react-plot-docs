import React from 'react';
import { Axis, LineSeries, Plot } from 'react-plot';

export default function Series() {
  return (
    <Plot width={300} height={300}>
      <LineSeries
        data={[
          { x: 1, y: 1, xError: 0.2 },
          { x: 2, y: 2, yError: 0.05 },
          { x: 3, y: 3, xError: [0.1, 0.2], yError: [0.2, 0.3] },
          { x: 4, y: 2 },
          { x: 5, y: 1 },
        ]}
        lineStyle={{ stroke: 'blue' }}
        displayErrorBars={true}
        errorBarsCapSize={5}
        errorBarsStyle={{ strokeWidth: 1 }}
        errorBarsCapStyle={{ stroke: 'blue' }}
      />
      <Axis min={0} max={6} id="x" position="bottom" />
      <Axis min={0} max={4} id="y" position="left" />
    </Plot>
  );
}
