# PlotObject

import PlotObjectDemo from './PlotObject.demo.tsx';

`PlotObject` is is responsible for rendering a plot on an SVG element. It takes as prop an object that defines the properties of the plot, such as the data to be plotted, the type of plot (e.g., line, bar, scatter), and various formatting options such as colors, line widths, and axis labels.

<PlotObjectDemo/>

this example render a simple line plot with the given data on the x and y axes. You can customize the appearance of the plot by passing additional props to the PlotObject component, such as colors, axis labels, and other formatting options.

## Props

### Mandatory

- **plot:** Object that defines the properties of the plot to be rendered. <br />
  type: [`PlotObjectPlot`](../500_types/plotObjectPlot.md)

### Optional

- **children:** React children to be rendered inside the plot. <br />
  type: `ReactNode`<br />
  default: `null`
