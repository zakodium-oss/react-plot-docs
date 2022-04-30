import React from 'react';
import { Annotations, Annotation, Plot, Axis } from 'react-plot';
export default function PlotAnnotations() {
  const Explication = [
    <Annotation.Shape size={8} shape="circle" x={2} y={2} color="red" />,
    <Annotation.Text x={1} y={1}>
      (x1,y1)
    </Annotation.Text>,
    <Annotation.Shape size={8} shape="circle" x={9} y={8} color="red" />,
    <Annotation.Text x={8} y={8.5}>
      (x2,y2)
    </Annotation.Text>,
  ];
  return (
    <Plot width={300} height={200}>
      <Annotations>
        <Annotation.Rectangle x1={2} y1={2} x2={9} y2={8} color="violet" />

        {/* Props explication */}
        {Explication}
      </Annotations>
      <Axis min={0} max={10} position="bottom" />
      <Axis min={0} max={10} position="left" />
    </Plot>
  );
}
