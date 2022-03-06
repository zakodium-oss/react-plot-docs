import React from 'react';
import { xyToXYObject } from 'ml-spectra-processing';
import { useEffect, useState } from 'react';
import {
  Annotations,
  Axis,
  LineSeries,
  Plot,
  PlotController,
  SeriesPoint,
  useAxisZoom,
} from 'react-plot';
import { parseXY } from 'xy-parser';

function ZoomablePlot() {
  const [data, setData] = useState<SeriesPoint[]>([]);
  const zoom = useAxisZoom({ direction: 'horizontal' });

  useEffect(() => {
    fetch('/data/mass-peg1500.txt').then((response) => {
      response.text().then((text) => {
        setData(
          xyToXYObject(
            // @ts-expect-error
            parseXY(text),
          ),
        );
      });
    });
  }, []);

  return (
    <div>
      <Plot width={800} height={300}>
        <LineSeries data={data} xAxis="x" yAxis="y" />
        <Axis id="x" position="bottom" label="m/z" displayPrimaryGridLines />
        <Axis position="left" label="Relative intensity" paddingStart={0.03} />
        <Annotations>{zoom.annotations}</Annotations>
      </Plot>
    </div>
  );
}

export default function MassPlot() {
  return (
    <PlotController>
      <ZoomablePlot />
    </PlotController>
  );
}
