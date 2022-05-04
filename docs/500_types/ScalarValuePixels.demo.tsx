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
        <Annotation.Shape size={5} shape="circle" x="100" y={0} color="red" />
        <Annotation.Text x="100" y={0}>
          100px
        </Annotation.Text>
        <Annotation.Shape size={5} shape="circle" x="200" y={0} color="red" />
        <Annotation.Text x="200" y={0}>
          200px
        </Annotation.Text>
        <Annotation.Shape size={5} shape="circle" x="400" y={0} color="red" />
        <Annotation.Text x="400" y={0}>
          400px
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
