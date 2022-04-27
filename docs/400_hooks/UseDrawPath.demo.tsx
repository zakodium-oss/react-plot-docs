import React from 'react';
import {
  Annotations,
  Heading,
  LineSeries,
  Plot,
  PlotController,
  useDrawPath,
} from 'react-plot';

function DrawPathPlot() {
  const drawPath = useDrawPath();
  return (
    <Plot width={300} height={300}>
      <Heading title="Draw a path" />
      <LineSeries
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 2 },
          { x: 5, y: 1 },
        ]}
      />
      <Annotations>{drawPath.annotations}</Annotations>
    </Plot>
  );
}

export default function UseDrawPath() {
  return (
    <PlotController>
      <DrawPathPlot />
    </PlotController>
  );
}
