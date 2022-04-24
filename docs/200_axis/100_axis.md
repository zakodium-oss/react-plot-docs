# Axis

import AxisDemo from './axis/Axis.demo.tsx'
import AxisPosition from './axis/AxisPosition.demo.tsx'
import AxisRange from './axis/AxisRange.demo.tsx'
import AxisRangeMaxMin from './axis/AxisRangeMaxMin.demo.tsx'
import AxisRangePadding from './axis/AxisRangePadding.demo.tsx'
import AxisId from './axis/AxisId.demo.tsx'
import AxisScale from './axis/AxisScale.demo.tsx'
import AxisFlip from './axis/AxisFlip.demo.tsx'
import AxisHidden from './axis/AxisHidden.demo.tsx'
import AxisLine from './axis/AxisLine.demo.tsx'
import AxisLabel from './axis/AxisLabel.demo.tsx'
import AxisGrid from './axis/AxisGrid.demo.tsx'
import AxisTicksHidden from './axis/AxisTicksHidden.demo.tsx'
import AxisTicksPosition from './axis/AxisTicksPosition.demo.tsx'
import AxisTicksPrimary from './axis/AxisTicksPrimary.demo.tsx'
import AxisTicksSecondary from './axis/AxisTicksSecondary.demo.tsx'
import AxisTicksLabel from './axis/AxisTicksLabel.demo.tsx'

Axis is the compoenet that allow you to add diffrent personlised axes in your Plot

<AxisDemo/>

# Restriction

In a `Plot`, we cannot have two `Axis` in the same `position`

**Example:**
Adding two bottom axis in the same plot will throw the next error :<br/>
`Plot can only have one bottom axis`

# Props

## Mandatory

- **position:** Axis position<br/>
  type: `'top' | 'bottom' | 'left' | 'right'`

<AxisPosition/>

## Optional

### 1. Set Axis Range

  <AxisRange />

- **min:** series horizontal axis id <br />
  type: `number`<br/>
  default: calculated automatically based on series data
- **max:** series vertical axis id <br />
  type: `number`<br/>
  default: calculated automatically based on series data

  <AxisRangeMaxMin/>

- **paddingStart:** add padding in the start of axis domain<br />
  type: [`ScalarValue`](./000_intro.md)<br/>
  default: `0`
- **paddingEnd:** add padding in the end of axis domain<br />
  type: [`ScalarValue`](./000_intro.md)<br/>
  default: `0`

  <AxisRangePadding/>

### 2. Identify Axis

- **id:** axis id<br/>
  type: `string`<br/>
  default:`"x" for horizontal axis,"y" for vertical axis`

<AxisId />

- **scale:** Axis scale type<br/>
  type: `'linear' | 'log' | 'time'`<br/>
  default:`'linear'`

<AxisScale />

### 3. Choose Axis Behaviour

- **flip:** used to filp axis<br />
  type: `boolean`<br/>
  default: `false`

  <AxisFlip/>

- **hidden:** Hide all axis elements<br />
  type: `boolean`<br/>
  default: `false`

  <AxisHidden/>

### 4. Personlise Axis

#### a. Line

- **hiddenLine:** Hide line<br />
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

#### c. Grid

- **displayPrimaryGridLines:** add simple grid lines to the plot<br />
  type: `boolean`<br/>
  default: `false`
- **primaryGridLineStyle:** customise grid lines style<br />
  type: `CSSProperties`<br/>
  default: `{}`

- **displaySecondaryGridLines:** add secondary grid lines to the plot<br />
  type: `boolean`<br/>
  default: `false`
- **secondaryGridLineStyle:** change secondary grid lines style<br />
  type: `CSSProperties`<br/>
  default: `{}`

  <AxisGrid/>

#### d. Ticks

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

#### e. Ticks labels

- **tickLabelFormat:** personlise the format of tick labels<br />
  type: `(x: number)=>string`<br/>
  default: `d3's smart tickFormat for time scale, String for others`
- **tickLabelStyle:** change tick labels style<br />
  type: `CSSProperties`<br/>
  default: `{}`

  <AxisTicksLabel/>
