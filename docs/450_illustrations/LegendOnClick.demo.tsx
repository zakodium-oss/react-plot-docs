import React, { useState } from 'react';
import { Plot, Legend, LineSeries, Axis, Heading } from 'react-plot';

export default function WithHiddenSerie() {
  const [highlightSeries, setHighlightSeries] = useState<
    Record<string, boolean>
  >({});
  const updateHightlight = (id: string) => {
    setHighlightSeries((highlightSeries) => ({
      ...highlightSeries,
      [id]: !highlightSeries[id],
    }));
  };
  const lineStyle = {
    strokeWidth: ({ id }: { id: string }) => (highlightSeries[id] ? '5' : ''),
  };
  return (
    <Plot width={600} height={300}>
      <Heading title="Click on legend series" />
      <Legend
        labelStyle={{
          fontWeight: ({ id }) => (highlightSeries[id] ? 'bold' : 'normal'),
          cursor: 'hand',
        }}
        onClick={({ id }) => updateHightlight(id)}
        lineStyle={lineStyle}
        position="right"
      />
      <LineSeries
        data={[
          { x: 0, y: 10 },
          { x: 1, y: 12 },
          { x: 2, y: 6 },
          { x: 3, y: 3 },
          { x: 4, y: 18 },
        ]}
        lineStyle={lineStyle}
        xAxis="x"
        yAxis="y"
        label="Label line series"
      />
      <LineSeries
        data={[
          { x: 0, y: 20 },
          { x: 1, y: 22 },
          { x: 2, y: 24 },
          { x: 3, y: 26 },
          { x: 4, y: 28 },
        ]}
        markerStyle={{ fill: 'green' }}
        lineStyle={{
          stroke: 'blue',
          ...lineStyle,
        }}
        markerShape="square"
        displayMarkers
        xAxis="x"
        yAxis="y"
        label="Label line series 2"
      />
      <Axis id="x" position="bottom" label="X" />
      <Axis id="y" position="left" label="Y" />
    </Plot>
  );
}
