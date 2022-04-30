import React from 'react';
import { Axis, LineSeries, Plot } from 'react-plot';

export default function DrainVoltage() {
  const Explication = (
    <div>
      <text
        style={{
          marginTop: '10px',
          display: 'block',
          color: 'green',
        }}
      >
        Plot viewport
      </text>
      <text
        style={{
          position: 'absolute',
          top: '80px',
          left: '50px',
          color: 'blue',
        }}
      >
        Series viewport
      </text>
      <svg
        style={{
          position: 'absolute',
          left: '0',
          top: '0',
        }}
      >
        <text x="120" y="15" fill="brown">
          Width
        </text>
        <line
          x1={0}
          x2={300}
          y1={24}
          y2={24}
          stroke="brown"
          stroke-width="4"
        ></line>
        <line
          x1={0}
          x2={0}
          y1={18}
          y2={30}
          stroke="brown"
          stroke-width="4"
        ></line>
        <line
          x1={300}
          x2={300}
          y1={18}
          y2={30}
          stroke="brown"
          stroke-width="4"
        ></line>
      </svg>
      <svg
        style={{
          position: 'absolute',
          left: '300',
          top: '56',
        }}
        height={300}
      >
        <text
          x="110"
          y="160"
          transform="rotate(90,100,100)"
          dominant-baseline="central"
          fill="brown"
        >
          Height
        </text>
        <line
          x1={10}
          x2={10}
          y1={0}
          y2="300"
          stroke="brown"
          stroke-width="4"
        ></line>
        <line
          x1={5}
          x2={15}
          y1={0}
          y2={0}
          stroke="brown"
          stroke-width="4"
        ></line>
        <line
          x1={5}
          x2={15}
          y1={300}
          y2={300}
          stroke="brown"
          stroke-width="4"
        ></line>
      </svg>
      <svg
        style={{
          position: 'absolute',
          top: '56px',
          left: '200px',
        }}
      >
        <line
          x1={4}
          x2={4}
          y1={0}
          y2={50}
          stroke="black"
          stroke-width="4"
        ></line>
        <text x="9" y="28">
          Margin
        </text>
        <line
          x1={0}
          x2={8}
          y1={2}
          y2={2}
          stroke-width="2"
          stroke="black"
        ></line>
        <line
          x1={0}
          x2={8}
          y1={48}
          y2={48}
          stroke-width="2"
          stroke="black"
        ></line>
      </svg>
    </div>
  );
  return (
    <div
      style={{ position: 'relative', paddingTop: '20px', paddingRight: '20px' }}
    >
      {Explication}
      <Plot
        width={300}
        height={300}
        margin={{ top: 50, right: 25, left: 20 }}
        seriesViewportStyle={{
          stroke: 'blue',
          strokeWidth: 3,
        }}
        plotViewportStyle={{
          stroke: 'green',
          strokeWidth: 3,
        }}
      >
        <LineSeries
          data={[
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 3 },
            { x: 4, y: 2 },
            { x: 5, y: 1 },
          ]}
          label="Line Serie"
        />
        <Axis position="bottom" />
        <Axis position="left" />
      </Plot>
    </div>
  );
}
