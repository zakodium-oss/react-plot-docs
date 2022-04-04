# Function Series

import FunctionSeriesDemo from './functionSeries/FunctionSeries.demo.tsx';
import FunctionSeriesRestriction from './functionSeries/FunctionSeriesRestriction.demo.tsx';
import FunctionSeriesMarkerDemo from './functionSeries/FunctionSeriesMarker.demo.tsx';
import FunctionSeriesPointLabel from './functionSeries/FunctionSeriesPointLabel.demo.tsx';
import FunctionSeriesLines from './functionSeries/FunctionSeriesLines.demo.tsx';

## Display

<FunctionSeriesDemo/>

## Restriction

You must specify the horizontal domain to use `FunctionSeries` <br/>
Use one of these options :<br/>

- Add horizontal **[Axis](xxx)** with max and min<br/>
  `<Axis min={0} max={20} position="bottom" />`
- Add another Series to the plot. It will automatically specify the domain of horizontal axis
  <FunctionSeriesRestriction/>

## Data

point type must extand from **[SeriesPoint](xxx)**

## Props

Like all other series, scatter series have **[Base props](xxx)**<br/>
They also have many other props that we can class into the following categories :

<!--
todo: add this part after fixing markers & pointLabel

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

<FunctionSeriesMarkerDemo/>

### 2. Point Label

- **pointLabel:** serie's point label that can be statique or dynamique depending points<br />
  type: `LabelFuncProps<point>`<br/>
  default: `''`
- **pointLabelStyle:** serie's point label style, statique or dynamique depending points<br />
  type: `CSSFuncProps<point>`<br/>
  default: `{}`

<FunctionSeriesPointLabel/> -->

### 3. Lines

- **lineStyle:** styling of the serie's path statique or dynamique that depend series id<br />
  type: `CSSFuncProps<{id}>`<br/>
  default: `false`

<FunctionSeriesLines/>
