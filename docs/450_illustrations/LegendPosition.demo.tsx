import React from 'react';
import {
  Axis,
  BarSeries,
  Heading,
  Legend,
  Plot,
  RangeSeries,
} from 'react-plot';

export default function Illustrations() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: '30px 10px',
      }}
    >
      <Plot
        width={250}
        height={300}
        plotViewportStyle={{
          stroke: 'black',
          strokeWidth: 1,
        }}
        seriesViewportStyle={{
          stroke: 'red',
          strokeWidth: 3,
        }}
        margin={{ right: 20, left: 10, top: 20 }}
      >
        <Heading title="embeded" />
        <Legend position="embedded" />

        <BarSeries
          data={[
            { x: 5, y: 20 },
            { x: 1, y: 22 },
            { x: 2, y: 24 },
            { x: 3, y: 26 },
            { x: 4, y: 28 },
          ]}
          lineStyle={{
            stroke: 'green',
          }}
          displayMarkers
          label="Label Bar series"
        />
        <RangeSeries
          data={[
            { x: 0, y1: 11, y2: 10 },
            { x: 1, y1: 6, y2: 3 },
            { x: 3, y1: 25, y2: 20 },
            { x: 4.5, y1: 11, y2: 9 },
            { x: 6, y1: 14, y2: 11 },
          ]}
          lineStyle={{ fill: 'grey', stroke: 'black' }}
          label="Label Range series"
        />
        <Axis position="left" paddingEnd="20%" />
      </Plot>
      <Plot
        width={250}
        height={300}
        plotViewportStyle={{
          stroke: 'black',
          strokeWidth: 1,
        }}
        seriesViewportStyle={{
          stroke: 'red',
          strokeWidth: 3,
        }}
        margin={{ right: 20, left: 10, top: 20 }}
      >
        <Heading title="top" />
        <Legend position="top" />

        <BarSeries
          data={[
            { x: 5, y: 20 },
            { x: 1, y: 22 },
            { x: 2, y: 24 },
            { x: 3, y: 26 },
            { x: 4, y: 28 },
          ]}
          lineStyle={{
            stroke: 'green',
          }}
          displayMarkers
          label="Label Bar series"
        />
        <RangeSeries
          data={[
            { x: 0, y1: 11, y2: 10 },
            { x: 1, y1: 6, y2: 3 },
            { x: 3, y1: 25, y2: 20 },
            { x: 4.5, y1: 11, y2: 9 },
            { x: 6, y1: 14, y2: 11 },
          ]}
          lineStyle={{ fill: 'grey', stroke: 'black' }}
          label="Label Range series"
        />
        <Axis position="left" paddingEnd="20%" />
      </Plot>
      <Plot
        width={250}
        height={300}
        plotViewportStyle={{
          stroke: 'black',
          strokeWidth: 1,
        }}
        seriesViewportStyle={{
          stroke: 'red',
          strokeWidth: 3,
        }}
        margin={{ right: 20, left: 10, top: 20 }}
      >
        <Heading title="bottom" />
        <Legend position="bottom" />

        <BarSeries
          data={[
            { x: 5, y: 20 },
            { x: 1, y: 22 },
            { x: 2, y: 24 },
            { x: 3, y: 26 },
            { x: 4, y: 28 },
          ]}
          lineStyle={{
            stroke: 'green',
          }}
          displayMarkers
          label="Label Bar series"
        />
        <RangeSeries
          data={[
            { x: 0, y1: 11, y2: 10 },
            { x: 1, y1: 6, y2: 3 },
            { x: 3, y1: 25, y2: 20 },
            { x: 4.5, y1: 11, y2: 9 },
            { x: 6, y1: 14, y2: 11 },
          ]}
          lineStyle={{ fill: 'grey', stroke: 'black' }}
          label="Label Range series"
        />
        <Axis position="left" paddingEnd="20%" />
      </Plot>
      <Plot
        width={387}
        height={300}
        plotViewportStyle={{
          stroke: 'black',
          strokeWidth: 1,
        }}
        seriesViewportStyle={{
          stroke: 'red',
          strokeWidth: 3,
        }}
        margin={{ right: 20, left: 10, top: 20 }}
      >
        <Heading title="left" />
        <Legend position="left" />

        <BarSeries
          data={[
            { x: 5, y: 20 },
            { x: 1, y: 22 },
            { x: 2, y: 24 },
            { x: 3, y: 26 },
            { x: 4, y: 28 },
          ]}
          lineStyle={{
            stroke: 'green',
          }}
          displayMarkers
          label="Label Bar series"
        />
        <RangeSeries
          data={[
            { x: 0, y1: 11, y2: 10 },
            { x: 1, y1: 6, y2: 3 },
            { x: 3, y1: 25, y2: 20 },
            { x: 4.5, y1: 11, y2: 9 },
            { x: 6, y1: 14, y2: 11 },
          ]}
          lineStyle={{ fill: 'grey', stroke: 'black' }}
          label="Label Range series"
        />
        <Axis position="left" paddingEnd="20%" />
      </Plot>
      <Plot
        width={387}
        height={300}
        plotViewportStyle={{
          stroke: 'black',
          strokeWidth: 1,
        }}
        seriesViewportStyle={{
          stroke: 'red',
          strokeWidth: 3,
        }}
        margin={{ right: 20, left: 10, top: 20 }}
      >
        <Heading title="right" />
        <Legend position="right" />

        <BarSeries
          data={[
            { x: 5, y: 20 },
            { x: 1, y: 22 },
            { x: 2, y: 24 },
            { x: 3, y: 26 },
            { x: 4, y: 28 },
          ]}
          lineStyle={{
            stroke: 'green',
          }}
          displayMarkers
          label="Label Bar series"
        />
        <RangeSeries
          data={[
            { x: 0, y1: 11, y2: 10 },
            { x: 1, y1: 6, y2: 3 },
            { x: 3, y1: 25, y2: 20 },
            { x: 4.5, y1: 11, y2: 9 },
            { x: 6, y1: 14, y2: 11 },
          ]}
          lineStyle={{ fill: 'grey', stroke: 'black' }}
          label="Label Range series"
        />
        <Axis position="left" paddingEnd="20%" />
      </Plot>
    </div>
  );
}
