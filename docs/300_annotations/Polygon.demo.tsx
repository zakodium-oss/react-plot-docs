import React from 'react';
import { Annotations, Annotation, Plot, Axis, Heading } from 'react-plot';
export default function PlotAnnotations() {
  const Explanation = [
    <Annotation.Shape size={5} shape="circle" x={1} y={1} color="red" />,
    <Annotation.Shape size={5} shape="circle" x={2} y={3} color="red" />,
    <Annotation.Shape size={5} shape="circle" x={3} y={7} color="red" />,
    <Annotation.Shape size={5} shape="circle" x={4} y={5} color="red" />,
    <Annotation.Shape size={5} shape="circle" x={5} y={1} color="red" />,
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
    <div style={{ display: 'flex' }}>
      <Plot width={300} height={200}>
        <Annotations>
          <Annotation.Polygon
            points={[
              { x: 1, y: 1 },
              { x: 2, y: 3 },
              { x: 3, y: 7 },
              { x: 4, y: 5 },
              { x: 5, y: 1 },
            ]}
            color="blue"
          />

          {/* Props explication */}
          {Explanation}
        </Annotations>
        <Axis min={0} max={10} position="bottom" />
        <Axis min={0} max={10} position="left" />
      </Plot>
    </div>
  );
}
