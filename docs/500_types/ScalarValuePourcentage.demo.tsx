import React from 'react';
import {
  Annotation,
  Annotations,
  Axis,
  LineSeries,
  Plot,
  PlotController,
  ScatterSeries,
  useAxisZoom,
} from 'react-plot';

function Series() {
  const zoom = useAxisZoom();
  return (
    <Plot width={600} height={80}>
      <Annotations>
        {zoom.annotations}
        <Annotation.Shape size={5} shape="circle" x="10%" y={0} color="red" />
        <Annotation.Text x="10%" y={0}>
          10%
        </Annotation.Text>
        <Annotation.Shape size={5} shape="circle" x="20%" y={0} color="red" />
        <Annotation.Text x="200" y={0}>
          20%
        </Annotation.Text>
        <Annotation.Shape size={5} shape="circle" x="50%" y={0} color="red" />
        <Annotation.Text x="50%" y={0}>
          50%
        </Annotation.Text>
      </Annotations>
      <Axis min={0} max={20} position="bottom" label="Number ScalarValue" />
      {/** hidden axis */}
      <Axis min={-2} max={1} position="left" hidden />
    </Plot>
  );
}

export default function withZoom() {
  return (
    <PlotController>
      <Series />
    </PlotController>
  );
}
