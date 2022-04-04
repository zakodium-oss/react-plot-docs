import { xAbsolute } from 'ml-spectra-processing';
import React from 'react';
import { Plot, ScatterSeries } from 'react-plot';

export default function Series() {
  return (
    <Plot width={300} height={300}>
      <ScatterSeries
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
      <ScatterSeries
        markerShape={({ y }) => (y > 1 ? 'cross' : 'star')}
        markerStyle={{
          stroke: 'green',
        }}
        data={[
          { x: 1, y: 0 },
          { x: 2, y: 1 },
          { x: 3, y: 2 },
          { x: 4, y: 1 },
          { x: 5, y: 2 },
          { x: 6, y: 3 },
        ]}
      />
      <ScatterSeries
        // todo: next release
        // displayMarkers={false}
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 0 },
          { x: 3, y: 0 },
          { x: 5, y: 1 },
          { x: 6, y: 2 },
        ]}
      />
    </Plot>
  );
}
