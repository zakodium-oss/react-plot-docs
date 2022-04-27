import React from 'react';
import { Annotations, Annotation, LineSeries, Plot, Axis } from 'react-plot';
export default function PlotAnnotations() {
  return (
    <Plot width={300} height={100}>
      <Annotations>
        <Annotation.Text
          x="150"
          y={5}
          color="orange"
          // text svg props
          fontSize="30"
          fontFamily="monospace"
          fontWeight="bold"
          textAnchor="middle"
        >
          Hello world
        </Annotation.Text>
      </Annotations>
      <Axis min={0} max={10} position="bottom" />
      <Axis min={0} max={10} position="left" />
    </Plot>
  );
}
