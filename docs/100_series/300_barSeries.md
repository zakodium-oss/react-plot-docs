# BarSeries

import BarSeriesDemo from './barSeries/BarSeries.demo.tsx';
import BarSeriesMarkerDemo from './barSeries/BarSeriesMarker.demo.tsx';
import BarSeriesPointLabel from './barSeries/BarSeriesPointLabel.demo.tsx';
import BarSeriesError from './barSeries/BarSeriesError.demo.tsx';
import BarSeriesLines from './barSeries/BarSeriesLines.demo.tsx';

## Display

<BarSeriesDemo/>

## Data

point type must extand from **[SeriesPoint](xxx)**

## Props

Like all other series, scatter series have **[Base props](xxx)**<br/>
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

<BarSeriesMarkerDemo/>

### 2. Point Label

- **pointLabel:** serie's point label that can be statique or dynamique depending points<br />
  type: `LabelFuncProps<point>`<br/>
  default: `''`
- **pointLabelStyle:** serie's point label style, statique or dynamique depending points<br />
  type: `CSSFuncProps<point>`<br/>
  default: `{}`

<BarSeriesPointLabel/>

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

<BarSeriesError/>

### 4. Lines

- **lineStyle:** styling of the serie's path statique or dynamique that depend series id<br />
  type: `CSSFuncProps<{id}>`<br/>
  default: `false`

<BarSeriesLines/>
