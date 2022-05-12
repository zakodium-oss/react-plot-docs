import React from 'react';
import { Plot, Axis, ScatterSeries, Heading } from 'react-plot';

export default function Series() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Plot width={250} height={200}>
        <ScatterSeries
          data={[
            { x: 12, y: 1 },
            { x: 14, y: 2 },
            { x: 16, y: 3 },
            { x: 18, y: 4 },
          ]}
        />
        <Axis
          paddingStart={0.1}
          paddingEnd={0.1}
          position="bottom"
          label="Linear Axis"
          scale="linear"
        />
        <Axis min={0} max={5} position="left" />
      </Plot>
      <Plot width={250} height={200}>
        <ScatterSeries
          data={[
            { x: 10, y: 1 },
            { x: 100, y: 2 },
            { x: 1000, y: 3 },
            { x: 10000, y: 4 },
          ]}
          markerStyle={{ fill: 'green', stroke: 'none' }}
        />
        <Axis
          paddingStart={0.0005}
          paddingEnd={0.5}
          position="bottom"
          label="Log Axis"
          scale="log"
        />
        <Axis min={0} max={5} position="left" />
      </Plot>
      <Plot width={250} height={200}>
        <ScatterSeries
          data={[
            { x: new Date(2002, 11, 24, 7, 30).getTime(), y: 1 },
            { x: new Date(2002, 11, 24, 8, 30).getTime(), y: 2 },
            { x: new Date(2002, 11, 24, 9, 30).getTime(), y: 3 },
            { x: new Date(2002, 11, 24, 10, 30).getTime(), y: 4 },
          ]}
          markerStyle={{ fill: 'blue', stroke: 'none' }}
        />
        <Axis
          paddingStart={0.1}
          paddingEnd={0.1}
          position="bottom"
          label="Time Axis"
          scale="time"
        />
        <Axis min={0} max={5} position="left" />
      </Plot>
    </div>
  );
}
