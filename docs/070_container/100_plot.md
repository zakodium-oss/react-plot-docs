# Plot

import PlotDemo from './Plot.demo.tsx';
import PlotMargin from './PlotMargin.demo.tsx';

`Plot` is the container of all other components, and the main component in `react-plot` that creates the plot svg

<PlotDemo/>

## Allowed children

`Plot` children must be one of the following components :

- [`Series`](../100_series/000_intro.md) components
- [`Axes`](../200_axes/000_intro.md) components
- [`Annotations`](../300_annotations/000_intro.md)
- [`Heading`](../450_illustrations/100_heading.md)
- [`Legend`](../450_illustrations/200_legend.md)

## Props

<PlotMargin/>

### Mandatory

- **width:** Width of the SVG in pixels <br />
  type: `number`<br/>
- **height:** Height of the SVG in pixels <br />
  type: `number`<br/>

### Optional

- **colorScheme:** Color scheme used to pick colors for the series <br />
  type: `Iterable<string>`<br/>
  default: "schemeSet1" from "d3-scale-chromatic"
- **margin:** Pixel distance between seriesViewport and plotViewport.<br />
  type: `{top?:number, bottom?:number, left?:number, right?:number}`<br/>
  default: `{}`
- **svgStyle:** Style applied to the SVG element <br />
  type: `CSSProperties`<br/>
  default: `{}`
- **svgId:** Id of the SVG element <br />
  type: `string`<br/>
  default: generated automatically
- **svgClassName:** Class name of the SVG element <br />
  type: `string`<br/>
  default: `""`
- **plotViewportStyle:** Style applied to the rectangle around the entire plot <br />
  type: `CSSProperties`<br/>
  default: `{}`
- **seriesViewportStyle:** Style applied to the rectangle around the series viewport <br />
  type: `CSSProperties`<br/>
  default: `{}`
- **controllerId:** Id of the parent PlotController that will control this plot <br />
  type: `string`<br/>
  default: `""`
