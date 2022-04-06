# FunctionSeries

import FunctionSeriesDemo from './functionSeries/FunctionSeries.demo.tsx';
import FunctionSeriesRestriction from './functionSeries/FunctionSeriesRestriction.demo.tsx';
import FunctionSeriesData from './functionSeries/FunctionSeriesData.demo.tsx';
import FunctionSeriesLines from './functionSeries/FunctionSeriesLines.demo.tsx';

<!-- import FunctionSeriesMarkerDemo from './functionSeries/FunctionSeriesMarker.demo.tsx';
import FunctionSeriesPointLabel from './functionSeries/FunctionSeriesPointLabel.demo.tsx'; -->

## Display

<FunctionSeriesDemo/>

## Restriction

You must specify the horizontal domain to use `FunctionSeries` <br/>
Use one of these options :<br/>

- Add horizontal **[Axis](../200_axis/100_axis.md)** and determine `max` and `min` props<br/>
  `<Axis min={0} max={20} position="bottom" />`
- Add another Series to the plot. It will automatically specify the domain of horizontal axis
  <FunctionSeriesRestriction/>

## Data

In `FuntionSeries` we don't have data we just need precise our function using `getY` callback

#### <u>Example:</u>

We want to display y=f(x), which f is a declared function
`getY={(x)=>f(x)}`
<FunctionSeriesData/>

## Props

Like all other series, scatter series have **[Base props](./000_intro.md)**<br/>
They also have many other props that we can class into the following categories :

### 1. Function

- **getY:** (Mandatory) function that you want to display <br />
  type: `(x:number)=>number`

### 2. Lines

- **lineStyle:** styling of the serie's path statique or dynamique that depend series id<br />
  type: `CSSFuncProps<{id}>`<br/>
  default: `false`

<FunctionSeriesLines/>

<!--
todo: add this part after fixing markers & pointLabel

### 3. Markers

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

### 4. Point Label

- **pointLabel:** serie's point label that can be statique or dynamique depending points<br />
  type: `LabelFuncProps<point>`<br/>
  default: `''`
- **pointLabelStyle:** serie's point label style, statique or dynamique depending points<br />
  type: `CSSFuncProps<point>`<br/>
  default: `{}`

<FunctionSeriesPointLabel/> -->
