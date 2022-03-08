import React from 'react';
import { Annotations, Annotation, LineSeries, Plot, Axis } from 'react-plot';
export default function PlotAnnotations() {
  return (
    <Plot width={300} height={300}>
      <LineSeries
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 2 },
          { x: 5, y: 1 },
        ]}
      />
      <Annotations>
        <Annotation.Line
          x1="10"
          y1="10"
          x2="100"
          y2="100"
          color="yellow"
          strokeWidth="4"
        />
        <Annotation.Arrow
          x1="10"
          y1="30"
          x2="100"
          y2="130"
          color="yellow"
          strokeWidth="4"
        />
        <Annotation.Circle
          r="20"
          x="200"
          y="20"
          color="blue"
        ></Annotation.Circle>
        <Annotation.Ellipse
          rx="20"
          ry="10"
          x="200"
          y="100"
          color="green"
        ></Annotation.Ellipse>
        <Annotation.Rectangle
          x1="20"
          y1="100"
          x2="50"
          y2="150"
          color="violet"
        ></Annotation.Rectangle>
        <Annotation.Text
          x="150"
          y="200"
          fontSize="30"
          fontFamily="monospace"
          fontWeight="bold"
          textAnchor="middle"
          color="orange"
        >
          Hello world
        </Annotation.Text>
      </Annotations>
      <Axis position="bottom" />
      <Axis position="left" />
    </Plot>
  );
}
