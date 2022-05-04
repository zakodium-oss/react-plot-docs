# Introduction

import SeriesDemo from './Series.demo.tsx';

There are currently 5 different kind of series that can be added in a plot:

- **[ScatterSeries](./100_scatterSeries.md)**
- **[LineSeries](./200_lineSeries.md)**
- **[BarSeries](./300_barSeries.md)**
- **[FunctionSeries](./400_functionSeries.md)**
- **[RangeSeries](./500_rangeSeries.md)**

Series are direct children of the `Plot` component and you may have as many Series as you which on the same plot.

## Data

The main purpose of `react-plot` is displaying different data in many ways.
Data is an array of points that differ from serie to another

## Base Props

They are the props that all series have:

#### <u>Mandatory</u>

- **data:** displayed serie's data<br/>
  type: [`Data`](../500_types/data.md)

#### <u>Optional</u>

- **id:** serie id<br/>
  type: `string`
  default: generated automatically
- **xAxis:** series horizontal axis id <br />
  type: `string`<br/>
  default: `"x"`
- **yAxis:** series vertical axis id <br />
  type: `string`<br/>
  default: `"y"`
- **label:** label of the serie that can be displayed in legends<br />
  type: `string`<br/>
- **hidden:** hide serie<br />
  type: `boolean`<br/>
  default: `false`
- **xShift:** "number or string"<br />
  type: `number or string`<br/>
  default: `0`
- **yShift:** "number or string"<br />
  type: `number or string`<br/>
  default: `0`

## Example

<SeriesDemo />
