import { xAbsolute } from 'ml-spectra-processing';
import React from 'react';
import { Plot, ScatterSeries } from 'react-plot';

export default function Series() {
  return (
    <Plot width={300} height={300}>
      <ScatterSeries
        displayErrorBars
        errorBarsStyle={{ stroke: 'green', strokeWidth: '5px' }}
        errorBarsCapSize={10}
        errorBarsCapStyle={{ stroke: 'blue', strokeWidth: '2px' }}
        data={[
          { x: 1, y: 1, xError: 0.2 },
          { x: 2, y: 2, yError: 0.05 },
          { x: 3, y: 3, xError: [0.1, 0.2], yError: [0.2, 0.3] },
          { x: 4, y: 2, xError: [0.6, 0.2], yError: [0.2, 0.3] },
          { x: 5, y: 1 },
        ]}
      />
    </Plot>
  );
}
