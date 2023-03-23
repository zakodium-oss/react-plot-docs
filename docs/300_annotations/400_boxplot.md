# BoxPlot

import BoxPlotDemo from './BoxPlot.demo.tsx';

`BoxPlot` shows summary statistics of data in a graphical form. The graphic below shows
a bloxplot superimposed on a scatter plot of the dataset.

<BoxPlotDemo/>

## Props

### Mandatory

- **min:** Minumum value in the dataset <br/>
  type: [`ScalarValue`](../500_types/100_scalarValue.md) <br/>
- **max:** Maximum value in the dataset <br/>
  type: [`ScalarValue`](../500_types/100_scalarValue.md) <br/>
- **q1:** First Quartile of the dataset <br/>
  type: [`ScalarValue`](../500_types/100_scalarValue.md) <br/>
- **median:** Median of the dataset <br/>
  type: [`ScalarValue`](../500_types/100_scalarValue.md) <br/>
- **q3:** Third Quartile of the dataset <br/>
  type: [`ScalarValue`](../500_types/100_scalarValue.md) <br/>
- **width:** Width of the boxplot <br/>
  type: [`ScalarValue`](../500_types/100_scalarValue.md) <br/>
- **y:** y location of the boxplot <br/>
  type: [`ScalarValue`](../500_types/100_scalarValue.md) <br/>

### Optional

- **xAxis:** The xAxis <br/>
  type: `string`<br/>
  default: `x`
- **yAxis:** The yAxis <br/>
  type: `string`<br/>
  default: `y`
- **medianColor:** Color name of the median line <br/>
  type: `string`<br/>
  default: `black`
- **medianStyle:** CSS properties of the median line <br/>
  type: `CSSProperties`<br/>
  default: `{}`
- **boxColor:** Color name of the box <br/>
  type: `string`<br/>
  default: `black`
- **boxStyle:** CSS Properties of the box <br/>
  type: `CSSProperties`<br/>
  default: `{}`
- **whiskerColor:** Color name of the whisker lines <br/>
  type: `string`<br/>
  default: `black`
- **whiskerStyle:** CSS Properties of the whisker lines <br/>
  type: `CSSProperties`<br/>
  default: `{}`
- **minMaxColor:** Color name of the min/max lines <br/>
  type: `string`<br/>
  default: `black`
- **minMaxStyle:** CSS Properties of the min/max lines <br/>
  type: `CSSProperties`<br/>
  default: `{}`
- **onMouseEnter:** Handler for MouseEnter events <br/>
  type: `MouseEventHandler<SVGGElement>`<br/>
  default: `{}`
- **onMouseLeave:** Handler for MouseLeave events <br/>
  type: `MouseEventHandler<SVGGElement>`<br/>
  default: `{}`
