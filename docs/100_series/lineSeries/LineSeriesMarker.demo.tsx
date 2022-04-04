import React from 'react';
import { Plot, LineSeries } from 'react-plot';

export default function Series() {
  return (
    <Plot width={300} height={300}>
      <LineSeries
        // todo : change displayMarkers in the next release
        displayMarker
        markerShape="diamond"
        markerSize={15}
        markerStyle={{
          fill: ({ x }) => (x > 3 ? 'blue' : 'red'),
          stroke: 'black',
        }}
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 2 },
          { x: 5, y: 1 },
        ]}
      />
    </Plot>
  );
}
