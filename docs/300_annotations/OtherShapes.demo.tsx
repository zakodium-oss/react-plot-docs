import React from 'react';
import { Annotations, Annotation, LineSeries, Plot, Axis } from 'react-plot';
export default function PlotAnnotations() {
  return (
    <Plot width={300} height={200}>
      <Annotations>
        <Annotation.Line
          x1="10"
          y1={9}
          x2="100"
          y2="100"
          width="50"
          color="red"
          strokeWidth={3}
        />
        <Annotation.Arrow
          x1="20"
          y1="100"
          x2="200"
          y2="150"
          endPoint="triangle"
          color="violet"
          strokeWidth={3}
        />
        <Annotation.Polyline
          points={[
            { x: '100', y: '80' },
            { x: '200', y: '50' },
            { x: '130', y: '8' },
            { x: '120', y: '10' },
            { x: '120', y: '40' },
          ]}
          color="orange"
          strokeWidth={3}
        />
      </Annotations>
      <Axis min={0} max={10} position="bottom" />
      <Axis min={0} max={10} position="left" />
    </Plot>
  );
}
