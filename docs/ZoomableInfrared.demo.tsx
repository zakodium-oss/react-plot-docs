import { xyToXYObject } from 'ml-spectra-processing';
import React, { useEffect, useState } from 'react';
import { convert as convertJcamp } from 'jcampconverter';
import {
  Annotations,
  Axis,
  LineSeries,
  Plot,
  PlotController,
  SeriesPoint,
  useRectangularZoom,
} from 'react-plot';

function ZoomablePlot() {
  const [data, setData] = useState<SeriesPoint[]>([]);

  useEffect(() => {
    fetch('/data/ir.jdx').then((response) => {
      response.text().then((jcamp) => {
        const spectraData = convertJcamp(jcamp).flatten[0].spectra[0].data;
        const data = xyToXYObject(spectraData).map((point) => ({
          x: point.x,
          y: point.y * 100,
        }));
        setData(data);
      });
    });
  }, []);

  const zoom = useRectangularZoom();
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

export default function ZoomableInfraredSpectrum() {
  return (
    <PlotController>
      <ZoomablePlot />
    </PlotController>
  );
}
