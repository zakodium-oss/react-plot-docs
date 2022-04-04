import React from 'react';
import { Plot, RangeSeries } from 'react-plot';

export default function Series() {
  return (
    <Plot width={300} height={300}>
      <RangeSeries
        data={[
          { x: 1, y1: 1, y2: 5 },
          { x: 2, y1: 2, y2: 4 },
          { x: 3, y1: 3, y2: 4 },
          { x: 4, y1: 2, y2: 4 },
          { x: 5, y1: 1, y2: 5 },
        ]}
      />
    </Plot>
  );
}
