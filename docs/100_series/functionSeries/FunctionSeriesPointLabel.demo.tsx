import React from 'react';
import { Plot, FunctionSeries, Axis } from 'react-plot';

export default function Series() {
  return (
    <Plot width={800} height={300}>
      <FunctionSeries
        // todo : remove display marker
        displayMarker
        pointLabel="5"
        pointLabelStyle={{
          fill: ({ x }) => (x > 2 ? 'green' : 'blue'),
          fontWeight: 'bolder',
        }}
        getY={(x) => Math.sin(x)}
      />
      <FunctionSeries
        // todo : remove display marker
        displayMarker
        pointLabel={({ x, y }) => `(${x},${y})`}
        pointLabelStyle={{
          transform: 'translate(3px, -4px)',
        }}
        getY={(x) => Math.cos(x)}
      />
      <Axis min={0} max={20} position="bottom" />
    </Plot>
  );
}
