import React from 'react';
import { Annotations, Annotation, LineSeries, Plot, Axis } from 'react-plot';
export default function PlotAnnotations() {
  return (
    <Plot width={300} height={200}>
      <Annotations>
        <Annotation.Group x={2} y={1}>
          <Annotation.Text x="0" y="0">
            Hello, World!
          </Annotation.Text>
          <Annotation.Arrow x1="0" x2="100" y1="10" y2="10" />
        </Annotation.Group>
      </Annotations>
      <Axis min={0} max={8} position="bottom" />
      <Axis min={0} max={2} position="left" />
    </Plot>
  );
}
