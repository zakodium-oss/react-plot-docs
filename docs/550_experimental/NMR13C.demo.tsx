import { xyToXYObject } from 'ml-spectra-processing';
import React, { useEffect, useState } from 'react';
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
  const [data, setData] = useState<SeriesPoint[]>();
  const zoom = useAxisZoom({ direction: 'horizontal' });
  useEffect(() => {
    fetch('/data/nmr-13c.jdx').then((response) => {
      response.text().then((jcamp) => {
        const jcampData = convertJcamp(jcamp).flatten[0].spectra[0].data;
        const data = xyToXYObject(jcampData);
        setData(data);
      });
    });
  }, []);

  return (
    <div>
      {data ? (
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
      ) : undefined}
    </div>
  );
}

export default function NMR13CPlot() {
  return (
    <PlotController>
      <ZoomablePlot />
    </PlotController>
  );
}
