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
import { convert as convertJcamp } from 'jcampconverter';

function ZoomablePlot() {
  const [data, setData] = useState<SeriesPoint[]>([]);
  const zoom = useAxisZoom({ direction: 'horizontal' });

  useEffect(() => {
    fetch('/data/nmr-1h.jdx').then((response) => {
      response.text().then((jcamp) => {
        const jcampData = convertJcamp(jcamp).flatten[0].spectra[0].data;
        const data = xyToXYObject(jcampData);
        setData(data);
      });
    });
  }, []);

  return (
    <div>
      <Plot width={800} height={300}>
        <LineSeries data={data} xAxis="x" yAxis="y" />
        <Axis
          id="x"
          position="bottom"
          label="Chemical shift (𝛅)"
          displayPrimaryGridLines
          flip={true}
        />
        <Axis position="left" hidden={true} paddingStart={0.03} />
        <Annotations>{zoom.annotations}</Annotations>
      </Plot>
    </div>
  );
}

export default function NMR1HPlot() {
  return (
    <PlotController>
      <ZoomablePlot />
    </PlotController>
  );
}
