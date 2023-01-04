import React from 'react';
import { Axis, LineSeries, Plot, PlotObject } from 'react-plot';

export default function PlotObjectDemo() {
  return (
    <PlotObject
      plot={{
        axes: [
          { type: 'main', position: 'bottom' },
          { type: 'main', position: 'left' },
        ],
        content: [
          {
            type: 'line',
            data: [
              { x: 1, y: 1 },
              { x: 2, y: 2 },
              { x: 3, y: 3 },
              { x: 4, y: 2 },
              { x: 5, y: 1 },
            ],
          },
        ],
        dimensions: {
          width: 300,
          height: 300,
        },
        seriesViewportStyle: {
          stroke: 'black',
          strokeWidth: 1,
        },
      }}
    />
  );
}
