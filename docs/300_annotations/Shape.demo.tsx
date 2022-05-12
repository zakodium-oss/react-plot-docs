import React from 'react';
import { Annotations, Annotation, Plot, Axis } from 'react-plot';
export default function PlotAnnotations() {
  return (
    <Plot width={300} height={200}>
      <Annotations>
        <Annotation.Shape x={2} y={2} size={15} shape="circle" color="blue" />
        <Annotation.Shape
          x={7}
          y={8}
          size={30}
          shape="triangle"
          color="green"
        />
        <Annotation.Shape x={3} y={5} size={20} shape="diamond" color="red" />
        <Annotation.Shape x={6} y={4} size={25} shape="square" color="violet" />
      </Annotations>
      <Axis min={0} max={10} position="bottom" />
      <Axis min={0} max={10} position="left" />
    </Plot>
  );
}
