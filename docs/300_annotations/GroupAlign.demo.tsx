import React from 'react';
import { Annotations, Annotation, Plot, Axis, Heading } from 'react-plot';
export default function PlotAnnotations() {
  const Explanation = [
    [
      <Annotation.Rectangle
        x1={4.7}
        x2={8}
        y1={0.5}
        y2={1.5}
        color="none"
        stroke="black"
      />,
      <Annotation.Shape x={5} y={1} size={10} shape="circle" color="blue" />,
      <Annotation.Text x={4.6} y={1} text-anchor="end" color="blue">
        (x,y)
      </Annotation.Text>,
    ],
    [
      <Annotation.Rectangle
        x1={3.4}
        x2={6.6}
        y1={0.5}
        y2={1.5}
        color="none"
        stroke="black"
      />,
      <Annotation.Shape x={5} y={1} size={10} shape="circle" color="blue" />,
      <Annotation.Text x={5.5} y={1.7} text-anchor="end" color="blue">
        (x,y)
      </Annotation.Text>,
    ],
    [
      <Annotation.Rectangle
        x1={2.2}
        x2={5.3}
        y1={0.5}
        y2={1.5}
        color="none"
        stroke="black"
      />,
      <Annotation.Shape x={5} y={1} size={10} shape="circle" color="blue" />,
      <Annotation.Text x={5.7} y={1} text-anchor="start" color="blue">
        (x,y)
      </Annotation.Text>,
    ],
  ];
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Plot
        width={200}
        height={100}
        seriesViewportStyle={{
          stroke: 'black',
          strokeWidth: 1,
        }}
      >
        <Annotations>
          <Heading title="horizontalAlign='none'" />
          <Annotation.Group x={5} y={1} horizontalAlign="none">
            <Annotation.Text x="0" y="0">
              Hello!
            </Annotation.Text>
            <Annotation.Arrow x1="0" x2="50" y1="10" y2="10" />
          </Annotation.Group>

          {/* Props explication */}
          {Explanation[0]}
        </Annotations>
        <Axis min={0} max={10} position="bottom" hidden />
        <Axis min={0} max={3} position="left" hidden />
      </Plot>
      <Plot
        width={200}
        height={100}
        seriesViewportStyle={{
          stroke: 'black',
          strokeWidth: 1,
        }}
      >
        <Annotations>
          <Heading title="horizontalAlign='start'" />
          <Annotation.Group x={5} y={1} horizontalAlign="start">
            <Annotation.Text x="0" y="0">
              Hello!
            </Annotation.Text>
            <Annotation.Arrow x1="0" x2="50" y1="10" y2="10" />
          </Annotation.Group>

          {/* Props explication */}
          {Explanation[0]}
        </Annotations>
        <Axis min={0} max={10} position="bottom" hidden />
        <Axis min={0} max={3} position="left" hidden />
      </Plot>
      <Plot
        width={200}
        height={100}
        seriesViewportStyle={{
          stroke: 'black',
          strokeWidth: 1,
        }}
      >
        <Annotations>
          <Heading title="horizontalAlign='middle'" />
          <Annotation.Group x={5} y={1} horizontalAlign="middle">
            <Annotation.Text x="0" y="0">
              Hello!
            </Annotation.Text>
            <Annotation.Arrow x1="0" x2="50" y1="10" y2="10" />
          </Annotation.Group>

          {/* Props explication */}
          {Explanation[1]}
        </Annotations>
        <Axis min={0} max={10} position="bottom" hidden />
        <Axis min={0} max={3} position="left" hidden />
      </Plot>
      <Plot
        width={200}
        height={100}
        seriesViewportStyle={{
          stroke: 'black',
          strokeWidth: 1,
        }}
      >
        <Annotations>
          <Heading title="horizontalAlign='end'" />
          <Annotation.Group x={5} y={1} horizontalAlign="end">
            <Annotation.Text x="0" y="0">
              Hello!
            </Annotation.Text>
            <Annotation.Arrow x1="0" x2="50" y1="10" y2="10" />
          </Annotation.Group>

          {/* Props explication */}
          {Explanation[2]}
        </Annotations>
        <Axis min={0} max={10} position="bottom" hidden />
        <Axis min={0} max={3} position="left" hidden />
      </Plot>
    </div>
  );
}
