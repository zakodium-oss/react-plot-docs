# ScatterSeries

import ScatterSeriesDemo from './scatterSeries/ScatterSeries.demo.tsx';
import ScatterSeriesMarkerDemo from './scatterSeries/ScatterSeriesMarker.demo.tsx';
import ScatterSeriesPointLabel from './scatterSeries/ScatterSeriesPointLabel.demo.tsx';
import ScatterSeriesError from './scatterSeries/ScatterSeriesError.demo.tsx';
import ScatterSeriesLines from './scatterSeries/ScatterSeriesLines.demo.tsx';

## Display

<ScatterSeriesDemo/>

## Data

point type must extend from **[`SeriesPoint`](../500_types/000_data.md#1-seriespoint)**

## Props

Like all other series, scatter series have **[Base props](./000_intro.md/#base-props)**, but in addition to that they also have many other props that we can class into the following categories :

### 1. Markers

- **displayMarkers:** display scatter points markers`<br />`
  type: `boolean<br/>`
  default: `true`
- **markerShape:** serie's shape of a marker. Can be either dynamic or static`<br />`
  type: `ShapeFuncProps<br/>`
  default: `'circle'`
- **markerSize:** serie's size of a marker`<br />`
  type: `number<br/>`
  default: `8`
- **markerStyle:** serie's markers style (static / dynamic)`<br />`
  type: `CSSFuncProps<br/>`
  default: `{}`

<ScatterSeriesMarkerDemo/>

### 2. Point Label

- **pointLabel:** serie's point label (static / dynamic)`<br />`
  type: `LabelFuncProps<br/>`
  default: `''`
- **pointLabelStyle:** serie's point label style (static / dynamic)`<br />`
  type: `CSSFuncProps<br/>`
  default: `{}`

<ScatterSeriesPointLabel/>

### 3. ErrorBars

- **displayErrorBars:** displays error bars in the serie`<br />`
  type: `boolean<br/>`
  default: `false`
- **errorBarsStyle:** changes error bars style`<br />`
  type: `SVGAttributes<SVGLineElement><br/>`
- **errorBarsCapSize:** size of error bars' cap`<br />`
  type: `number<br/>`
- **errorBarsCapStyle:** changes error bars' cap style`<br />`
  type: `SVGAttributes<SVGLineElement><br/>`

<ScatterSeriesError/>

<!-- ### 4. Lines -->

<!--
  todo: next release
- **displayLines:** display line between scatter series points<br />
  type: `boolean`<br/>
  default: `false`
- **lineStyle:** change line between scatter series points (statique / dynamique)<br />
  type: `CSSFuncProps`<br/>
  default: `false`

<ScatterSeriesLines/>
-->
