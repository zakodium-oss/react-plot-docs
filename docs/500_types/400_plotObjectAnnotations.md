# PlotObjectAnnotations

PlotObjectAnnotations is a type that is used to define the [Annotations](../300_annotations/000_intro.md) to be rendered by the [PlotObject](../070_container/200_plotObject.md) component.

it has one main property, `type`, which decide the content you want to render and the properties that are available for that content.

- **type:** The type of the content.
  type: `"arrow" | "circle | "ellipse" | "line" | "rectangle" | "shape" | "text" | "group"`

the following is a list of properties that differ between the different types:

## Arrow

it's used to add an [Arrow](../300_annotations/300_otherShapes.md/#arrow) Annotation to the plot.

the other properties are the same as the [Arrow](../300_annotations/300_otherShapes.md/#arrow) properties.

**Example** : `{ type: "arrow", x1: 0, y1: 0, x2: 1, y2: 1}`

## Circle

it's used to add a [Circle](../300_annotations/200_filledShapes.md/#circle) Annotation to the plot.

the other properties are the same as the [Circle](../300_annotations/200_filledShapes.md/#circle) properties.

**Example** : `{ type: "circle", x: 0, y: 0, r: 1}`

## Ellipse

it's used to add an [Ellipse](../300_annotations/200_filledShapes.md/#ellipse) Annotation to the plot.

the other properties are the same as the [Ellipse](../300_annotations/200_filledShapes.md/#ellipse) properties.

**Example** : `{ type: "ellipse", x: 0, y: 0, rx: 1, ry: 1}`

## Line

it's used to add a [Line](../300_annotations/300_otherShapes.md/#line) Annotation to the plot.

the other properties are the same as the [Line](../300_annotations/300_otherShapes.md/#line) properties.

**Example** : `{ type: "line", x1: 0, y1: 0, x2: 1, y2: 1}`

## Rectangle

it's used to add a [Rectangle](../300_annotations/200_filledShapes.md/#rectangle) Annotation to the plot.

the other properties are the same as the [Rectangle](../300_annotations/200_filledShapes.md/#rectangle) properties.

**Example** : `{ type: "rectangle", x1: 0, y1: 0, x2: 1, y2: 1}`

## Shape

it's used to add a [Shape](../300_annotations/200_filledShapes.md/#shape) Annotation to the plot.

the other properties are the same as the [Shape](../300_annotations/200_filledShapes.md/#shape) properties.

**Example** : `{ type: "shape", shape: "square", x: 0, y: 0, size: 1}`

## Text

it's used to add a [Text](../300_annotations/100_text.md) Annotation to the plot.

the other properties are the same as the [Text](../300_annotations/100_text.md/#props) properties.

**Example** : `{ type: "text", x: 0, y: 0, children: "hello world"}`

## Group

it's used to add a [Group](../300_annotations/500_group.md) Annotation to the plot.

it has one other property, `children`, which is an array of the annotation to be added inside the group.

- **children:** The annotation to be added inside the group.
  type: `Array<`[`PlotObjectAnnotations`](./400_plotObjectAnnotations.md)`>`
