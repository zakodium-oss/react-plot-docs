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
        <Annotation.Shape size={5} shape="circle" x={2} y={0} color="red" />
        <Annotation.Text x={2} y={0}>
          2
        </Annotation.Text>
        <Annotation.Shape size={5} shape="circle" x={6} y={0} color="red" />
        <Annotation.Text x={6} y={0}>
          6
        </Annotation.Text>
        <Annotation.Shape size={5} shape="circle" x={16} y={0} color="red" />
        <Annotation.Text x={16} y={0}>
          16
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
