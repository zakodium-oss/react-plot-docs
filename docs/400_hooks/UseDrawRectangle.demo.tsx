import React from 'react';
import {
  Annotations,
  LineSeries,
  Plot,
  PlotController,
  useDrawRectangle,
} from 'react-plot';

function DrawRectanglePlot() {
  const drawRectangle = useDrawRectangle();
  return (
    <Plot width={300} height={300}>
      <LineSeries
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 2 },
          { x: 5, y: 1 },
        ]}
      />
      <Annotations>{drawRectangle.annotations}</Annotations>
    </Plot>
  );
}

export default function UseDrawRectangle() {
  return (
    <PlotController>
      <DrawRectanglePlot />
    </PlotController>
  );
}
