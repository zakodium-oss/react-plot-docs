# LineSeries

import LineSeriesDemo from './lineSeries/LineSeries.demo.tsx';
import LineSeriesMarkerDemo from './lineSeries/LineSeriesMarker.demo.tsx';
import LineSeriesPointLabel from './lineSeries/LineSeriesPointLabel.demo.tsx';
import LineSeriesError from './lineSeries/LineSeriesError.demo.tsx';
import LineSeriesLines from './lineSeries/LineSeriesLines.demo.tsx';

## Display

<LineSeriesDemo/>

## Data

point type must extend from **[`SeriesPoint`](../500_types/data.md#1-seriespoint)**

## Props

Like all other series, line series have **[Base props](./000_intro.md/#base-props)**<br/>
They also have many other props that we can class into following categories :

### 1. Markers

- **displayMarkers:** displays scatter points markers<br />
  type: `boolean`<br/>
  default: `true`
- **markerShape:** shape of serie's markers<br />
  type: `Shape`<br/>
  default: `'circle'`
- **markerSize:** size of serie's markers<br />
  type: `number`<br/>
  default: `8`
- **markerStyle:** serie's markers style that can be dynamic or static<br />
  type: `CSSFuncProps`<br/>
  default: `{}`

<LineSeriesMarkerDemo/>

### 2. Point Label

- **pointLabel:** serie's point label that can be dynamic or static, depending on kind of points<br />
  type: `LabelFuncProps<point>`<br/>
  default: `''`
- **pointLabelStyle:** serie's point label style, dynamic or static, depending on kind of points<br />
  type: `CSSFuncProps<point>`<br/>
  default: `{}`

<LineSeriesPointLabel/>

### 3. ErrorBars

- **displayErrorBars:** displays error bars in the series<br />
  type: `boolean`<br/>
  default: `false`
- **errorBarsStyle:** changes error bars' style<br />
  type: `SVGAttributes<SVGLineElement>`<br/>
- **errorBarsCapSize:** changes size of error bars' cap<br />
  type: `number`<br/>
- **errorBarsCapStyle:** changes error bars cap's style<br />
  type: `SVGAttributes<SVGLineElement>`<br/>

<LineSeriesError/>

### 4. Lines

- **lineStyle:** styling of the serie's path dynamic or static, depending on series' id<br />
  type: `CSSFuncProps<{id}>`<br/>
  default: `false`

<LineSeriesLines/>
