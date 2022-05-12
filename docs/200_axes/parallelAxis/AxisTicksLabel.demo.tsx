import React from 'react';
import { Plot, Axis, ParallelAxis } from 'react-plot';

export default function Series() {
  function celsiusToFahrenheit(x: number) {
    return (x * 9) / 5 + 32;
  }
  return (
    <Plot width={300} height={100}>
      <Axis id="x" max={20} min={0} position="bottom" label="Celsius" />
      <ParallelAxis
        id="x"
        label="Fahrenheit"
        tickLabelStyle={{ fill: 'blue' }}
        tickLabelFormat={(x: number) => `${celsiusToFahrenheit(x)}`}
      />
      {/** hidden axis */}
      <Axis min={0} max={1} position="left" hidden />
    </Plot>
  );
}
