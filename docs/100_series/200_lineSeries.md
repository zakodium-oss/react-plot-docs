# LineSeries

import LineSeriesDemo from './lineSeries/LineSeries.demo.tsx';
import LineSeriesMarkerDemo from './lineSeries/LineSeriesMarker.demo.tsx';
import LineSeriesPointLabel from './lineSeries/LineSeriesPointLabel.demo.tsx';
import LineSeriesError from './lineSeries/LineSeriesError.demo.tsx';
import LineSeriesLines from './lineSeries/LineSeriesLines.demo.tsx';

## Display

<LineSeriesDemo/>

## Data

point type must extand from **[SeriesPoint](./000_intro.md/#data)**

## Props

Like all other series, scatter series have **[Base props](./000_intro.md/#base-props)**<br/>
They also have many other props that we can class into the following categories :

### 1. Markers

- **displayMarkers:** display scatter points markers<br />
  type: `boolean`<br/>
  default: `true`
- **markerShape:** serie's markers shape<br />
  type: `Shape`<br/>
  default: `'circle'`
- **markerSize:** serie's markers size<br />
  type: `number`<br/>
  default: `8`
- **markerStyle:** serie's markers style that can be dynamique or statique<br />
  type: `CSSFuncProps`<br/>
  default: `{}`

<LineSeriesMarkerDemo/>

### 2. Point Label

- **pointLabel:** serie's point label that can be statique or dynamique depending points<br />
  type: `LabelFuncProps<point>`<br/>
  default: `''`
- **pointLabelStyle:** serie's point label style, statique or dynamique depending points<br />
  type: `CSSFuncProps<point>`<br/>
  default: `{}`

<LineSeriesPointLabel/>

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

<LineSeriesError/>

### 4. Lines

- **lineStyle:** styling of the serie's path statique or dynamique that depend series id<br />
  type: `CSSFuncProps<{id}>`<br/>
  default: `false`

<LineSeriesLines/>
