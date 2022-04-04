# Introduction

There are currently 5 different kind of series that can be added in a plot:

- LineSeries
- ScatterSeries
- FunctionSeries
- BarSeries
- RangeSeries

Series are direct children of the `Plot` component and you may have as many Series as you which on the same plot.

## Data

The main purpose of `react-plot` is displaying different data in many ways.
Data is an array of points that differ from serie to another <br/>

#### <u>Example</u>

`data=[{ x: 1, y: 1 }, { x: 2, y: 5 }, { x: 3, y: 3 }, { x: 4, y: 2 }, { x: 5, y: 1 }] `

## Base Props

They are the props that all series have:

#### <u>Mandatory</u>

- **data:** displayed serie's data<br/>
  type: `Array of points`

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

<!--
  todo: in next release

 - **xShift:** "number or string"<br />
  type: `number or string`<br/>
  default: `0`
- **yShift:** "number or string"<br />
  type: `number or string`<br/>
  default: `0`
  -->

## Example

<SeriesDemo />
