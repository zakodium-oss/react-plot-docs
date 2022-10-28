import React from 'react';
import { Annotations, Annotation, Plot, Axis } from 'react-plot';
export default function PlotAnnotations() {
  const Explanation = [
    <Annotation.Line
      x1={2}
      x2={2}
      y1={5}
      y2={5.05}
      style={{ strokeWidth: '5px' }}
      stroke-linecap="round"
      color="red"
    />,
    <Annotation.Line
      x1={8}
      x2={8}
      y1={5}
      y2={5.05}
      style={{ strokeWidth: '5px' }}
      stroke-linecap="round"
      color="red"
    />,
    <Annotation.Text x={1.8} y={5} text-anchor="end">
      (x1,y1)
    </Annotation.Text>,
    <Annotation.Text x={8.1} y={5}>
      (x2,y2)
    </Annotation.Text>,

    <Annotation.Text x={4.8} y={5} text-anchor="end">
      width
    </Annotation.Text>,

    <Annotation.Line
      x1={5}
      y1={3}
      x2={5}
      y2={7}
      style={{ strokeWidth: '3px' }}
      color="blue"
    />,
  ];
  return (
    <Plot width={300} height={200}>
      <Annotations>
        <Annotation.DirectedEllipse
          x1={2}
          y1={5}
          x2={8}
          y2={5}
          width={4}
          color="violet"
        />

        {/* Props explication */}
        {Explanation}
      </Annotations>
      <Axis min={0} max={10} position="bottom" />
      <Axis min={0} max={10} position="left" />
    </Plot>
  );
}
