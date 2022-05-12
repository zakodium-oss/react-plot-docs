import React from 'react';
import {
  Annotations,
  Heading,
  LineSeries,
  Plot,
  PlotController,
  useCrossHair,
} from 'react-plot';

function CrossHairPlot() {
  const crossHair = useCrossHair();
  return (
    <Plot width={300} height={300}>
      <Heading title="Move the mouse inside" />
      <LineSeries
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 2 },
          { x: 5, y: 1 },
        ]}
      />
      <Annotations>{crossHair.annotations}</Annotations>
    </Plot>
  );
}

export default function UseCrossHair() {
  return (
    <PlotController>
      <CrossHairPlot />
    </PlotController>
  );
}
