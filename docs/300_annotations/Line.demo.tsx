import React from 'react';
import { Annotations, Annotation, Plot, Axis } from 'react-plot';
export default function PlotAnnotations() {
  const Explanation = [
    <Annotation.Shape size={5} shape="circle" x={3} y={2} color="red" />,
    <Annotation.Shape size={5} shape="circle" x={7} y={7} color="red" />,
    <Annotation.Text x={3} y={2.3} text-anchor="end">
      (x1,y1)
    </Annotation.Text>,
    <Annotation.Text x={7} y={7.3} text-anchor="start">
      (x2,y2)
    </Annotation.Text>,
  ];
  return (
    <Plot width={300} height={200}>
      <Annotations>
        <Annotation.Line x1={3} y1={2} x2={7} y2={7} color="violet" />

        {/* Props explication */}
        {Explanation}
      </Annotations>
      <Axis min={0} max={10} position="bottom" />
      <Axis min={0} max={10} position="left" />
    </Plot>
  );
}
