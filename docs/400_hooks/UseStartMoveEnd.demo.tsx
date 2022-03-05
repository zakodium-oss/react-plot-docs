import React from 'react';
import { useState } from 'react';
import { ObjectInspector } from 'react-inspector';
import { LineSeries, Plot, PlotController, useStartMoveEnd } from 'react-plot';
import { TrackingResult } from 'react-plot/lib-esm/components/Tracking';

function TrackablePlot() {
  const [currentEvent, setCurrentEvent] =
    useState<{ kind: string; event: TrackingResult }>();
  useStartMoveEnd({
    onStart: (event) => {
      setCurrentEvent({ kind: 'onStart', event });
    },
    onMove: (event) => {
      setCurrentEvent({ kind: 'onMove', event });
    },
    onEnd: (event) => {
      setCurrentEvent({ kind: 'onEnd', event });
    },
  });
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
      </Plot>
      <ObjectInspector
        data={currentEvent}
        expandLevel={2}
        expandPaths={['$.event.coordinates', '$.event.clampedCoordinates']}
      />
    </div>
  );
}

export default function UseStartMoveEnd() {
  return (
    <PlotController>
      <TrackablePlot />
    </PlotController>
  );
}
