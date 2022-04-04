import React from 'react';
import { Plot, FunctionSeries, Axis } from 'react-plot';

export default function Series() {
  return (
    <Plot width={800} height={300}>
      <FunctionSeries
        // todo : change displayMarkers in the next release
        displayMarker
        markerShape="diamond"
        markerSize={15}
        markerStyle={{
          fill: ({ x }) => (x > 3 ? 'blue' : 'red'),
          stroke: 'black',
        }}
        getY={(x) => Math.sin(x)}
      />
      <Axis min={0} max={20} position="bottom" />
    </Plot>
  );
}
