# ScatterSeries

import ScatterSeriesDemo from './scatterSeries/ScatterSeries.demo.tsx';
import ScatterSeriesMarkerDemo from './scatterSeries/ScatterSeriesMarker.demo.tsx';
import ScatterSeriesPointLabel from './scatterSeries/ScatterSeriesPointLabel.demo.tsx';
import ScatterSeriesError from './scatterSeries/ScatterSeriesError.demo.tsx';
import ScatterSeriesLines from './scatterSeries/ScatterSeriesLines.demo.tsx';

## Display

<ScatterSeriesDemo/>

## Data

point type must extand from **[SeriesPoint](xxx)**

## Props

Like all other series, scatter series have **[Base props](xxx)**, but in addition to that they also have many other props that we can class into the following categories :

### 1. Markers

<!--
  todo: next release
- **displayMarkers:** display scatter points markers<br />
  type: `boolean`<br/>
  default: `true`
  -->

- **markerShape:** serie's markers shape that can be dynamique or statique<br />
  type: `ShapeFuncProps`<br/>
  default: `'circle'`
- **markerSize:** serie's markers size<br />
  type: `number`<br/>
  default: `8`
- **markerStyle:** serie's markers style that can be dynamique or statique<br />
  type: `CSSFuncProps`<br/>
  default: `{}`

<ScatterSeriesMarkerDemo/>

### 2. Point Label

- **pointLabel:** serie's point label (statique / dynamique)<br />
  type: `LabelFuncProps`<br/>
  default: `''`
- **pointLabelStyle:** serie's point label style (statique / dynamique)<br />
  type: `CSSFuncProps`<br/>
  default: `{}`

<ScatterSeriesPointLabel/>

### 3. ErrorBars

- **displayErrorBars:** display errors bars in the serie<br />
  type: `boolean`<br/>
  default: `false`
- **errorBarsStyle:** change error bars style<br />
  type: `SVGAttributes<SVGLineElement>`<br/>
- **errorBarsCapSize:** size of error bars cap<br />
  type: `number`<br/>
- **errorBarsCapStyle:** change error bars cap's style<br />
  type: `SVGAttributes<SVGLineElement>`<br/>

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
