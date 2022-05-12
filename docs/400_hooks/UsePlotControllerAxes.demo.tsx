import React, { useEffect } from 'react';
import { useState } from 'react';
import { ObjectInspector } from 'react-inspector';
import {
  Annotations,
  Axis,
  LineSeries,
  Plot,
  PlotController,
  usePlotControllerAxes,
  useRectangularZoom,
} from 'react-plot';
import { PlotAxesOverrides } from 'react-plot/lib-esm/contexts/plotController/usePlotOverrides';

function TrackablePlot() {
  const [axis, setAxis] = useState<PlotAxesOverrides>();
  const zoom = useRectangularZoom();
  const x = usePlotControllerAxes();
  useEffect(() => {
    setAxis(x);
  }, [x]);
  return (
    <div style={{ display: 'flex' }}>
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
        <Axis position="left" id="y" />
        <Axis position="bottom" id="x" />
        <Annotations>{zoom.annotations}</Annotations>
      </Plot>
      <ObjectInspector data={axis} expandLevel={2} />
    </div>
  );
}

export default function UsePlotControllerAxes() {
  return (
    <PlotController>
      <TrackablePlot />
    </PlotController>
  );
}
