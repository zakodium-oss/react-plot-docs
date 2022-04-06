# RangeSeries

import RangeSeriesDemo from './rangeSeries/RangeSeries.demo.tsx';
import RangeSeriesLines from './rangeSeries/RangeSeriesLines.demo.tsx';

## Display

<RangeSeriesDemo/>

## Data

point type must extand from **[RangeSeriesPoint](./000_intro.md)**

## Props

Like all other series, range series have **[Base props](./000_intro.md)**, and one more additional prop:

- **lineStyle:** style of range serie<br />
  type: `CSSProperties`<br/>
  default: `''`

<RangeSeriesLines/>
