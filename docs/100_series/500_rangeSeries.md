# RangeSeries

import RangeSeriesDemo from './rangeSeries/RangeSeries.demo.tsx';
import RangeSeriesLines from './rangeSeries/RangeSeriesLines.demo.tsx';

## Display

<RangeSeriesDemo/>

## Data

point type must extend from **[`RangeSeriesPoint`](../500_types/data.md#2-rangeseriespoint)**

## Props

Like all other series, range series have **[Base props](./000_intro.md/#base-props)**, and one more additional prop:

- **lineStyle:** style of range serie<br />
  type: `CSSProperties`<br/>
  default: `''`

<RangeSeriesLines/>
