import React from 'react';
import {
  Annotations,
  Heading,
  LineSeries,
  Plot,
  PlotController,
  usePan,
  useRectangularZoom,
} from 'react-plot';

function PanPlot() {
  usePan();
  return (
    <Plot width={300} height={300}>
      <Heading title="Press SHIFT & Grab and drag" />
      <LineSeries
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

export default function UseDrawRectangle() {
  return (
    <PlotController>
      <PanPlot />
    </PlotController>
  );
}
