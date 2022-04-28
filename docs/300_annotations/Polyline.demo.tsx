import React from 'react';
import { Annotations, Annotation, Plot, Axis } from 'react-plot';
export default function PlotAnnotations() {
  const Explication = [
    <Annotation.Line
      x1={1}
      x2={1}
      y1={1}
      y2={1.05}
      style={{ strokeWidth: '5px' }}
      stroke-linecap="round"
      color="red"
    />,
    <Annotation.Line
      x1={2}
      x2={2}
      y1={3}
      y2={3.05}
      style={{ strokeWidth: '5px' }}
      stroke-linecap="round"
      color="red"
    />,
    <Annotation.Line
      x1={3}
      x2={3}
      y1={7}
      y2={7.05}
      style={{ strokeWidth: '5px' }}
      stroke-linecap="round"
      color="red"
    />,
    <Annotation.Line
      x1={4}
      x2={4}
      y1={5}
      y2={5.05}
      style={{ strokeWidth: '5px' }}
      stroke-linecap="round"
      color="red"
    />,
    <Annotation.Line
      x1={5}
      x2={5}
      y1={1}
      y2={1.05}
      style={{ strokeWidth: '5px' }}
      stroke-linecap="round"
      color="red"
    />,
    <Annotation.Text x={1} y={1.3} text-anchor="end">
      P1
    </Annotation.Text>,
    <Annotation.Text x={2} y={3.3} text-anchor="end">
      P2
    </Annotation.Text>,
    <Annotation.Text x={3} y={7.3} text-anchor="end">
      P3
    </Annotation.Text>,
    <Annotation.Text x={4} y={5.3} text-anchor="start">
      P4
    </Annotation.Text>,
    <Annotation.Text x={5} y={1.3} text-anchor="start">
      P5
    </Annotation.Text>,
  ];
  return (
    <Plot width={300} height={200}>
      <Annotations>
        <Annotation.Polyline
          points={[
            { x: 1, y: 1 },
            { x: 2, y: 3 },
            { x: 3, y: 7 },
            { x: 4, y: 5 },
            { x: 5, y: 1 },
          ]}
          strokeWidth={4}
          color="blue"
        />

        {/* Props explication */}
        {Explication}
      </Annotations>
      <Axis min={0} max={10} position="bottom" />
      <Axis min={0} max={10} position="left" />
    </Plot>
  );
}
