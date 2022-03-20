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

## Examples

### LineSeries

<SeriesDemo />

### LineSeries with error bars

<SeriesWithErrorDemo />

### ScatterSeries

<ScatterSeriesDemo />

### FunctionSeries

<FunctionSeriesDemo />

### BarSeries

<BarSeriesDemo />

### RangeSeries

<RangeSeriesDemo />
