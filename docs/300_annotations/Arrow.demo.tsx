import React from 'react';
import { Annotations, Annotation, Plot, Axis } from 'react-plot';
export default function PlotAnnotations() {
  const Explanation = [
    <Annotation.Text x={3.3} y={1.7} text-anchor="start">
      startPoint="circle"
    </Annotation.Text>,
    <Annotation.Text x={7} y={7.3} text-anchor="end">
      endPoint="triangle"
    </Annotation.Text>,
  ];
  return (
    <Plot width={300} height={200}>
      <Annotations>
        <Annotation.Arrow
          x1={3}
          y1={2}
          x2={7}
          y2={7}
          endPoint="triangle"
          startPoint="circle"
          strokeWidth={2}
          color="blue"
        />

        {/* Props explication */}
        {Explanation}
      </Annotations>
      <Axis min={0} max={10} position="bottom" />
      <Axis min={0} max={10} position="left" />
    </Plot>
  );
}
