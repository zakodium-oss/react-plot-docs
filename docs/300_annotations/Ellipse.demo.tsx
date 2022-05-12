import React from 'react';
import { Annotations, Annotation, Plot, Axis } from 'react-plot';
export default function PlotAnnotations() {
  const Explication = [
    <Annotation.Line
      x1={5}
      x2={5}
      y1={5}
      y2={5.05}
      style={{ strokeWidth: '5px' }}
      stroke-linecap="round"
      color="red"
    />,
    <Annotation.Text x={4.8} y={4.5} text-anchor="end">
      (x,y)
    </Annotation.Text>,
    <Annotation.Text x={6.5} y={5.2} text-anchor="end">
      rx
    </Annotation.Text>,
    <Annotation.Text x={4.8} y={6} text-anchor="end">
      ry
    </Annotation.Text>,
    <Annotation.Line
      x1={5}
      y1={5}
      x2={8}
      y2={5}
      style={{ strokeWidth: '3px' }}
      color="green"
    />,
    <Annotation.Line
      x1={5}
      y1={5}
      x2={5}
      y2={7}
      style={{ strokeWidth: '3px' }}
      color="blue"
    />,
  ];
  return (
    <Plot width={300} height={200}>
      <Annotations>
        <Annotation.Ellipse x={5} y={5} rx={3} ry={2} color="violet" />

        {/* Props explication */}
        {Explication}
      </Annotations>
      <Axis min={0} max={10} position="bottom" />
      <Axis min={0} max={10} position="left" />
    </Plot>
  );
}
