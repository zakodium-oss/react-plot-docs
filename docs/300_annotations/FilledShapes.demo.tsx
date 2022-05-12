import React from 'react';
import { Annotations, Annotation, LineSeries, Plot, Axis } from 'react-plot';
export default function PlotAnnotations() {
  return (
    <Plot width={300} height={200}>
      <Annotations>
        <Annotation.DirectedEllipse
          x1="10"
          y1={9}
          x2="100"
          y2="100"
          width="50"
          color="red"
        />
        <Annotation.Circle r="20" x="90%" y="20" color="blue" />
        <Annotation.Ellipse rx="20" ry="10" x="200" y="100" color="green" />
        <Annotation.Rectangle
          x1="20"
          y1="100"
          x2="50"
          y2="150"
          color="violet"
        />
        <Annotation.Polygon
          points={[
            { x: '200', y: '50' },
            { x: '130', y: '8' },
            { x: '120', y: '10' },
            { x: '120', y: '40' },
          ]}
          color="orange"
        />
        <Annotation.Shape
          x="240"
          y="60"
          shape="diamond"
          size={50}
          color="brown"
        />
      </Annotations>
      <Axis min={0} max={10} position="bottom" />
      <Axis min={0} max={10} position="left" />
    </Plot>
  );
}
