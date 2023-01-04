# BarSeries

import BarSeriesDemo from './barSeries/BarSeries.demo.tsx';
import BarSeriesMarkerDemo from './barSeries/BarSeriesMarker.demo.tsx';
import BarSeriesPointLabel from './barSeries/BarSeriesPointLabel.demo.tsx';
import BarSeriesError from './barSeries/BarSeriesError.demo.tsx';
import BarSeriesLines from './barSeries/BarSeriesLines.demo.tsx';

## Display

<BarSeriesDemo/>

## Data

point type must extend from **[`SeriesPoint`](../500_types/000_data.md#1-seriespoint)**

## Props

Like all other series, bar series have **[Base props](./000_intro.md/#base-props)**`<br/>`
They also have other props that we can class into the following categories :

### 1. Markers

- **displayMarkers:** displays scatter points markers`<br />`
  type: `boolean<br/>`
  default: `false`
- **markerShape:** serie's markers shape`<br />`
  type: `Shape<br/>`
  default: `'circle'`
- **markerSize:** changes size of serie's markers`<br />`
  type: `number<br/>`
  default: `8`
- **markerStyle:**changes style of serie's markers. Can be dynamic or static`<br />`
  type: `CSSFuncProps<br/>`
  default: `{}`

<BarSeriesMarkerDemo/>

### 2. Point Label

- **pointLabel:** serie's point label that can be static or dynamic depending on kind of points`<br />`
  type: `LabelFuncProps<point><br/>`
  default: `''`
- **pointLabelStyle:** serie's point label style, static or dynamic depending on kind of points`<br />`
  type: `CSSFuncProps<point><br/>`
  default: `{}`

<BarSeriesPointLabel/>

### 3. ErrorBars

- **displayErrorBars:** displays error bars in the series`<br />`
  type: `boolean<br/>`
  default: `false`
- **errorBarsStyle:** changes error bars style`<br />`
  type: `SVGAttributes<SVGLineElement><br/>`
- **errorBarsCapSize:** changes size of error bars cap`<br />`
  type: `number<br/>`
- **errorBarsCapStyle:** changes error bars cap's style`<br />`
  type: `SVGAttributes<SVGLineElement><br/>`

<BarSeriesError/>

### 4. Lines

- **lineStyle:** styling of the serie's path static or dynamic that depends on series id`<br />`
  type: `CSSFuncProps<{id}><br/>`
  default: `false`

<BarSeriesLines/>
