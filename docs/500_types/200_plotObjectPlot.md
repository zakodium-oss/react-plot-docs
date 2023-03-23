# PlotObjectPlot

PlotObjectPlot is a type that is used to define the plot to be rendered by the [PlotObject](../070_container/200_plotObject.md) component.

It is a simple object with many fields. The following is a list of the mandatory and optional properties of the PlotObjectPlot type.

## Mandatory

- **axes:** Array that defines the axes of the plot. <br />
  type: `Array<({type: 'main';} & `[`AxisProps`](../200_axes/100_axis.md/#props)`) | ({ type: 'secondary'; } & ` [`ParallelAxisProps`](../200_axes/200_parallelAxis.md#props)`)>`

- **content:** Array that defines the content of the plot, [Series](../100_series/000_intro.md) each one with data and options. <br />
  type: `Array<`[`PlotObjectContent`](./300_plotObjectContent.md)`>`

## Optional

- **Legend:** Object that defines the legend options. <br />
  type: [`LegendProps`](../450_illustrations/200_legend.md/#props)

- **dimensions:** Object that defines the dimensions of the plot. <br />
  type: `{width: number;height: number;margin?:Partial<`[`Margins`](../070_container/100_plot.md/#optional)`>;}`

- **svg:** Object that defines the svg options. <br />
  type: `Pick<`[`PlotProps`](../070_container/100_plot.md/#optional)`, 'plotViewportStyle' |'seriesViewportStyle'> & { className?: string; id?: string; style?: `[`PlotProps`](../070_container/100_plot.md/#optional)`'svgStyle']; };`

- **colorScheme:** Color scheme used to pick colors for the series <br />
  type: `Iterable<string>`<br/>
  default: "schemeSet1" from "d3-scale-chromatic"

- **seriesViewportStyle:** Object that defines the style of the series viewport. <br />
  type: `CSSProperties`
