# Legend

import LegendDemo from './Legend.demo.tsx';
import LegendPosition from './LegendPosition.demo.tsx';
import LegendMargin from './LegendMargin.demo.tsx';
import LegendOnClick from './LegendOnClick.demo.tsx';
import LegendShowHide from './LegendShowHide.demo.tsx';
import LegendOffset from './LegendOffset.demo.tsx';

`Legend` is an component that describes each of [`Series`](../100_series/000_intro.md) of the `Plot`, it's also used to make interaction with them.

<LegendDemo/>

## Restriction

- In order to add a `Serie` in `Legend` you must specify it `label`
- It's not possible to set `top` and `bottom`, `left` and `right` offsets at the same time

## Props

- **position:** determines `Legend` position in the plot<br />
  type: `'top' | 'bottom' | 'left' | 'right'| 'embedded'`<br/>
  default: `'embedded'`

  <LegendPosition/>

- **margin:** adds spacing out of legend <br />
  type: `number`<br/>
  default: `10`

  <LegendMargin/>

- **onClick:** Creates a callback when clicking to one of legend elements, event: MouseEvent data, id: id of clicked serie <br />
  type: `(args: {event: React.MouseEvent<SVGGElement, MouseEvent>;id: string;}) => void`<br/>

- **labelStyle:** changes legend style in general or for specific serie's label<br />
  type: [`CSSFuncProps`](./000_intro.md)<br/>
  default: `{}`
- **lineStyle:** changes line style in general or for specific serie's label <br />
  type: `CSSFuncProps`<br/>
  default: `{}`

  <LegendOnClick/>

- **showHide:** activates "show/hide" functionality that allows you to hide and show series when clicking on it in the legend<br />
  type: `boolean`<br/>
  default: `false`

  <LegendShowHide/>

- **top** changes top legend offset that cannot defined with `bottom`<br />
  type: `number`<br/>
- **bottom** changes bottom legend offset that cannot defined with `top`<br />
  type: `number`<br/>
- **left** changes top legend offset that cannot defined with `right`<br />
  type: `number`<br/>
- **right** changes top legend offset that cannot defined with `left`<br />
  type: `number`<br/>

  <LegendOffset/>
