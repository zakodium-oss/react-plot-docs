# Introduction

import SeriesDemo from './Series.demo.tsx';
import SeriesWithErrorDemo from './SeriesWithError.demo.tsx';
import ScatterSeriesDemo from './ScatterSeries.demo.tsx';
import FunctionSeriesDemo from './FunctionSeries.demo.tsx';
import BarSeriesDemo from './BarSeries.demo.tsx';
import RangeSeriesDemo from './RangeSeries.demo.tsx';

There are currently 5 different kind of series that can be added in a plot:

- LineSeries
- ScatterSeries
- FunctionSeries
- BarSeries
- RangeSeries

Series are direct children of the `Plot` component and you may have as many Series as you which on the same plot.

## BaseSeriesProps

they are the props that all series have:

#### Mandatory

- **data:** displayed serie's data<br/>
  type: `Array of points`

#### Optional

- **id:** "string"<br/>
  serie id
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

## Examples

<SeriesDemo />
