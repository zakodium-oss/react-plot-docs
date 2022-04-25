import React from 'react';
import { Axis, LineSeries, Plot, ScatterSeries } from 'react-plot';

export default function Series() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
      }}
    >
      <Plot width={600} height={50}>
        <ScatterSeries
          data={[
            { x: 2, y: 0 },
            { x: 4, y: 0 },
            { x: 6, y: 0 },
            { x: 7, y: 0 },
            { x: 10, y: 0 },
            { x: 14, y: 0 },
            { x: 20, y: 0 },
          ]}
        />
        <Axis paddingStart="10%" position="bottom" label="paddingStart='10%'" />
        {/** hidden axis */}
        <Axis position="left" hidden />
      </Plot>
      <Plot width={600} height={50}>
        <ScatterSeries
          data={[
            { x: 2, y: 0 },
            { x: 4, y: 0 },
            { x: 6, y: 0 },
            { x: 7, y: 0 },
            { x: 10, y: 0 },
            { x: 14, y: 0 },
            { x: 20, y: 0 },
          ]}
        />
        <Axis paddingEnd="30%" position="bottom" label="paddingEnd='30%'" />
        {/** hidden axis */}
        <Axis position="left" hidden />
      </Plot>
      <Plot width={600} height={50}>
        <ScatterSeries
          data={[
            { x: 2, y: 0 },
            { x: 4, y: 0 },
            { x: 6, y: 0 },
            { x: 7, y: 0 },
            { x: 10, y: 0 },
            { x: 14, y: 0 },
            { x: 20, y: 0 },
          ]}
        />
        <Axis paddingEnd="100" position="bottom" label="paddingEnd='100'" />
        {/** hidden axis */}
        <Axis position="left" hidden />
      </Plot>
      <Plot width={600} height={50}>
        <ScatterSeries
          data={[
            { x: 2, y: 0 },
            { x: 4, y: 0 },
            { x: 6, y: 0 },
            { x: 7, y: 0 },
            { x: 10, y: 0 },
            { x: 14, y: 0 },
            { x: 20, y: 0 },
          ]}
        />
        <Axis paddingEnd={10} position="bottom" label="paddingEnd=10" />
        {/** hidden axis */}
        <Axis position="left" hidden />
      </Plot>
    </div>
  );
}
