# PlotObjectContent

PlotObjectPlot is a type that is used to define the [Series](../100_series/000_intro.md) and [Annotations](../300_annotations/000_intro.md) to be rendered by the [PlotObject](../070_container/200_plotObject.md) component.

it has one main property, `type`, which decide the content you want to render and the properties that are available for that content.

- **type:** The type of the content. `<br />`
  type: `"line" | "scatter | "annotation"`

the following is a list of properties that differ between the different types:

## Line

it's used to add a [LineSeries](../100_series/200_lineSeries.md) to the plot.

the other properties are the same as the [LineSeries](../100_series/200_lineSeries.md/#props) properties.

**Example** : `{ type: "line", data: [1, 2, 3, 4, 5]}`

## Scatter

it's used to add a [ScatterSeries](../100_series/100_scatterSeries.md) to the plot.

the other properties are the same as the [ScatterSeries](../100_series/100_scatterSeries.md/#props) properties.

**Example** : `{ type: "scatter", data: [1, 2, 3, 4, 5]}`

## Annotation

it's used to add an [Annotation](../300_annotations/000_intro.md) to the plot.

it have another property, `children`, which is an array of the annotation to be added to the plot.

- **children:** The annotation to be added to the plot. `<br />`
  type: `Array<`[`PlotObjectAnnotations`](./400_plotObjectAnnotations.md)`>`
