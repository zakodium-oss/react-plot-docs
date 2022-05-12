import React from 'react';

import {
  Annotations,
  Heading,
  LineSeries,
  Plot,
  PlotController,
  useRectangularZoom,
} from 'react-plot';

function ZoomablePlot() {
  const zoom = useRectangularZoom();
  return (
    <Plot width={300} height={300}>
      <Heading title="Draw a rectangle" />
      <LineSeries
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 2 },
          { x: 5, y: 1 },
        ]}
      />
      <Annotations>{zoom.annotations}</Annotations>
    </Plot>
  );
}

export default function UseRectangularZoom() {
  return (
    <PlotController>
      <ZoomablePlot />
    </PlotController>
  );
}
