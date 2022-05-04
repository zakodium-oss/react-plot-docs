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
  useRectangularZoom,
} from 'react-plot';

import { convert as convertJcamp } from 'jcampconverter';

export default function InfraredZoomablePlot() {
  return (
    <PlotController>
      <ZoomablePlot />
    </PlotController>
  );
}

function ZoomablePlot() {
  const [data, setData] = useState<SeriesPoint[]>([]);
  const zoom = useRectangularZoom();

  useEffect(() => {
    fetch('/data/ir.jdx').then((response) => {
      response.text().then((jcamp) => {
        const jcampData = convertJcamp(jcamp).flatten[0].spectra[0].data;
        const xyData = xyToXYObject(jcampData).map((point) => ({
          x: point.x,
          y: point.y * 100,
        }));
        setData(xyData);
      });
    });
  }, []);

  return (
    <Plot width={800} height={300}>
      <LineSeries data={data} xAxis="x" yAxis="y" />
      <Axis
        id="x"
        position="bottom"
        label="Wavenumber (cm-1)"
        displayPrimaryGridLines
        flip={true}
      />
      <Axis
        id="y"
        position="left"
        label="Transmitance (%)"
        displayPrimaryGridLines
      />
      <Annotations>{zoom.annotations}</Annotations>
    </Plot>
  );
}
