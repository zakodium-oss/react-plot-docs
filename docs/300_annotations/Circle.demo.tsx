import React from 'react';
import { Annotations, Annotation, Plot, Axis } from 'react-plot';
export default function PlotAnnotations() {
  const Explanation = [
    <Annotation.Line
      x1={5}
      x2={5}
      y1={5}
      y2={5.05}
      style={{ strokeWidth: '5px' }}
      stroke-linecap="round"
      color="red"
    />,
    <Annotation.Text x={5} y={5.3} text-anchor="end">
      (x,y)
    </Annotation.Text>,
    <Annotation.Text x={6.5} y={5.2} text-anchor="end">
      r
    </Annotation.Text>,
    <Annotation.Line
      x1={5}
      y1={5}
      x2={8}
      y2={5}
      style={{ strokeWidth: '3px' }}
      color="green"
    />,
  ];
  return (
    <Plot width={300} height={200}>
      <Annotations>
        <Annotation.Circle x={5} y={5} r={3} color="violet" />

        {/* Props explication */}
        {Explanation}
      </Annotations>
      <Axis min={0} max={10} position="bottom" />
      <Axis min={0} max={10} position="left" />
    </Plot>
  );
}
