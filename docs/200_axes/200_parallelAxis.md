# ParallelAxis

import AxisDemo from './parallelAxis/Axis.demo.tsx'
import AxisHidden from './parallelAxis/AxisHidden.demo.tsx'
import AxisLine from './parallelAxis/AxisLine.demo.tsx'
import AxisLabel from './parallelAxis/AxisLabel.demo.tsx'
import AxisTicksHidden from './parallelAxis/AxisTicksHidden.demo.tsx'
import AxisTicksPosition from './parallelAxis/AxisTicksPosition.demo.tsx'
import AxisTicksPrimary from './parallelAxis/AxisTicksPrimary.demo.tsx'
import AxisTicksSecondary from './parallelAxis/AxisTicksSecondary.demo.tsx'
import AxisTicksLabel from './parallelAxis/AxisTicksLabel.demo.tsx'

ParallelAxis is a component used to create a parallel axis to an existed **[Axis](./100_axis.md)**, we must fix base axis id

<AxisDemo/>

## Props

### 1. Identify Axis

- **id:** mandoraty prop that specifie the base axis<br/>
  type: `string`<br/>

  <AxisId />

### 2. Choose Axis Behaviour

- **hidden:** Hide all axis elements<br />
  type: `boolean`<br/>
  default: `false`

  <AxisHidden/>

### 3. Personlise Axis

#### a. Line

- **hiddenLine:** Hide axis line<br />
  type: `boolean`<br/>
  default: `false`
- **lineStyle:** change line style<br />
  type: `CSSProperties`<br/>
  default: `{}`

  <AxisLine/>

#### b. Label

- **label:** Axis label<br />
  type: `ReactNode`<br/>
  default: `""`
- **labelStyle:** change label style<br />
  type: `CSSProperties`<br/>
  default: `{}`

  <AxisLabel/>

#### c. Ticks

- **hiddenTicks:** Hide axis ticks<br />
  type: `boolean`<br/>
  default: `false`

  <AxisTicksHidden/>

- **tickPosition:** change ticks position<br />
  type: `'inner' | 'outer' | 'center'`<br/>
  default: `'center'`

  <AxisTicksPosition/>

- **primaryTickLength:** change primary ticks length<br />
  type: `number`<br/>
  default: `5`
- **primaryTickStyle:** customise primary ticks style<br />
  type: `CSSProperties`<br/>
  default: `{}`

  <AxisTicksPrimary/>

- **secondaryTickLength:** change secondary ticks length<br />
  type: `number`<br/>
  default: `3`
- **secondaryTickStyle:** customise secondary ticks style<br />
  type: `CSSProperties`<br/>
  default: `{}`

  <AxisTicksSecondary/>

#### d. Ticks labels

- **tickLabelFormat:** personlise the format of tick labels<br />
  type: `(x: number)=>string`<br/>
  default: `d3's smart tickFormat for time scale, String for others`
- **tickLabelStyle:** change tick labels style<br />
  type: `CSSProperties`<br/>
  default: `{}`

  <AxisTicksLabel/>
