import React from 'react';
import { Axis, LineSeries, Plot, ScatterSeries } from 'react-plot';

export default function Series() {
  return (
    <Plot width={600} height={50}>
      <ScatterSeries
        data={[
          { x: 2, y: 0 },
          { x: 4, y: 0 },
          { x: 6, y: 0 },
          { x: 7, y: 0 },
          { x: 10, y: 0 },
          { x: 14, y: 0 },
          { x: 20, y: 0 },
        ]}
      />
      <Axis min={0} max={30} position="bottom" label="Domain [0,30]" />
      {/** hidden axis */}
      <Axis position="left" hidden />
    </Plot>
  );
}
