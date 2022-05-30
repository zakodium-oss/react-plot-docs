# Introduction

import AnnotationsDemo from './Annotations.demo.tsx';

`react-plot` allows adding several elements to our plot, which helps us to visualize more data, simplify it, add interaction with the plot...

<AnnotationsDemo />

## Restriction

Annotations must be inside the `Annotation` component, they cannot be placed directly inside `Plot`,<br/> otherwise you would get the following error:
`invalid plot child`

## Annotations

There is 3 categories each one may contain many annotations :

- **[Text](./100_text.md)**
- **[Filled shapes](./200_filledShapes.md)**
  - [Rectangle](./200_filledShapes.md#rectangle)
  - [Circle](./200_filledShapes.md#circle)
  - [Ellipse](./200_filledShapes.md#ellipse)
  - [DirectedEllipse](./200_filledShapes.md#directedellipse)
  - [Polygone](./200_filledShapes.md#polygone)
  - [Shape](./200_filledShapes.md#shape)
- **[Other shapes](./300_otherShapes.md)**
  - [Line](./300_otherShapes.md#line)
  - [Arrow](./300_otherShapes.md#arrow)
  - [Polyline](./300_otherShapes.md#line)
- **[Group](./400_group.md)**
