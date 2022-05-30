# Introduction

import UseDrawRectangleDemo from './UseDrawRectangle.demo.tsx';

<UseDrawRectangleDemo />

`react-plot` provides hook that allows to add functionalities to the plot.

To benefit of those features the hooks have to be wrapped in a `PlotController`. Some hooks like `useRectangularZoom` will apply by default to all the `Plot` components contained in the `PlotController`. In the same page there may be multiple `Plot` components group in different `PlotController` components.

## Hooks

In order to understand hooks, we have divided them into three categories :

- **[Basic](./100_basic.md)** : low level hook helps to create your own functionalities
- **[Draw](./200_draw.md)** : allows you to draw in your plot
- **[Fonctional](./300_functional.md)** : precodded functionality
