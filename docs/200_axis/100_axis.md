# Axis

import AxisDemo from './axis/Axis.demo.tsx'
import AxisPosition from './axis/AxisPosition.demo.tsx'
import AxisId from './axis/AxisId.demo.tsx'
import AxisScale from './axis/AxisScale.demo.tsx'

Axis is the compoenet that allow you to add diffrent personlised axes in your Plot

<AxisDemo/>

# Restriction

In a `Plot`, we cannot have two `Axis` in the same `position`

**Example:**
Adding two bottom axis in the same plot will throw the next error :<br/>
`Plot can only have one bottom axis`

# Props

#### <u>Mandatory</u>

- **position:** Axis position<br/>
  type: `'top' | 'bottom' | 'left' | 'right'`

<AxisPosition/>

#### <u>Optional</u>

**1. Set Axis Range**

- **min:** series horizontal axis id <br />
  type: [`ScalarValue`](./000_intro.md)<br/>
  default: calculated automatically based on series data
- **max:** series vertical axis id <br />
  type: [`ScalarValue`](./000_intro.md)<br/>
  default: calculated automatically based on series data
- **paddingStart:** add padding in the start of axis domain<br />
  type: [`ScalarValue`](./000_intro.md)<br/>
  default: `0`
- **paddingEnd:** add padding in the end of axis domain<br />
  type: [`ScalarValue`](./000_intro.md)<br/>
  default: `0`

**2. Identify Axis**

- **id:** axis id<br/>
  type: `string`<br/>
  default:`"x" for horizontal axis,"y" for vertical axis`

<AxisId />

- **scale:** Axis scale type<br/>
  type: `'linear' | 'log' | 'time'`<br/>
  default:`'linear'`

<AxisScale />

**3. Choose Axis Behaviour**

- **flip:** used to filp axis<br />
  type: `boolean`<br/>
  default: `false`
- **hidden:** Hide all axis elements<br />
  type: `boolean`<br/>
  default: `false`

**3. Personlise Axis**

- **hiddenLine:** Hide line<br />
  type: `boolean`<br/>
  default: `false`
- **lineStyle:** change line style<br />
  type: `CSSProperties`<br/>
  default: `{}`

- **label:** Axis label<br />
  type: `ReactNode`<br/>
  default: `""`
- **labelStyle:** change label style<br />
  type: `CSSProperties`<br/>
  default: `{}`

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

- **hiddenTicks:** Hide axis ticks<br />
  type: `boolean`<br/>
  default: `false`
- **tickPosition:** change ticks position<br />
  type: `'inner' | 'outer' | 'center'`<br/>
  default: `'center'`

- **tickLabelFormat:** personlise the format of tick labels<br />
  type: `(x: number)=>string`<br/>
  default: `d3's smart tickFormat for time scale, String for others`
- **tickLabelStyle:** change tick labels style<br />
  type: `CSSProperties`<br/>
  default: `{}`

- **primaryTickLength:** change primary ticks length<br />
  type: `number`<br/>
  default: `5`
- **primaryTickStyle:** customise primary ticks style<br />
  type: `CSSProperties`<br/>
  default: `{}`

- **secondaryTickLength:** change secondary ticks length<br />
  type: `number`<br/>
  default: `3`
- **secondaryTickStyle:** customise secondary ticks style<br />
  type: `CSSProperties`<br/>
  default: `{}`
