# Introduction

import SeriesDemo from './Series.demo.tsx';

There are currently 5 different types of series that can be added to a plot:

- **[ScatterSeries](./100_scatterSeries.md)**
- **[LineSeries](./200_lineSeries.md)**
- **[BarSeries](./300_barSeries.md)**
- **[FunctionSeries](./400_functionSeries.md)**
- **[RangeSeries](./500_rangeSeries.md)**

Series are direct children of the `Plot` component and you may have as many Series as you wish on the same plot.

## Data

The main purpose of `react-plot` is to display different data in different ways.
Data is an array of points that differ from one serie to another

## Base Props

Base props are the props that all series have:

#### <u>Mandatory</u>

- **data:** displays serie's data<br/>
  type: [`Data`](../500_types/data.md)

#### <u>Optional</u>

- **id:** serie id<br/>
  type: `string`
  default: generated automatically
- **xAxis:** series horizontal axis id `<br />`
  type: `string`<br/>
  default: `"x"`
- **yAxis:** series vertical axis id `<br />`
  type: `string`<br/>
  default: `"y"`
- **label:** label of the serie that can be displayed in legends`<br />`
  type: `string`<br/>
- **hidden:** hides serie`<br />`
  type: `boolean`<br/>
  default: `false`
- **xShift:** shifts the data relative to horizontal axis`<br />`
  type: `number or string`<br/>
  default: `0`
- **yShift:** shifts the data relative to vertical axis`<br />`
  type: `number or string`<br/>
  default: `0`

## Example

<SeriesDemo />
