import UseStartMoveEndDemo from './UseStartMoveEnd.demo.tsx';
import UseDrawRectangleDemo from './UseDrawRectangle.demo.tsx';
import UseRectangularZoomDemo from './UseRectangularZoom.demo.tsx';
import MultiRectangularZoom from './MultiRectangularZoom.demo.tsx';
import UseAxisZoom from './UseAxisZoom.demo.tsx';

# Hooks

`react-plot` provides hook that allows to add functionalities to the plot.

To benefit of those features the hooks have to be wrapped in a `PlotController`. Some hooks like `useRectangularZoom` will apply by default to all the `Plot` components contained in the `PlotController`. In the same page there may be many `Plot` components group in different `PlotController` components.

## useStartMoveEnd

The low level hook `useStartMoveEnd` allows to track the mouse. This hook is used by other hooks but can also be used natively.

If accepts 3 callbacks:

- onStart: the mouse was clicked
- onMove: the mouse was dragged
- onEnd: the mouse was released

In the following example we simply log the different events.

<UseStartMoveEndDemo />

## useDrawRectangle

A more advanced hook will not only monitor the movement of the mouse but will also return `annotations` that can directly be drawn in the `Plot`.

- wrap your plot component in `<PlotController>`
- add the hook: `const drawRectangle = useDrawRectangle();`
- add the `drawRectangle.annotations` in order to draw the zoom rectangle: `<Annotations>{drawRectangle.annotations}</Annotations>`

<UseDrawRectangleDemo />

## useRectangularZoom

This hook allows directly to manage the zoom in a plot. There are 3 steps in order ot implement the zoom:

- wrap your plot component in `<PlotController>`
- add the hook: `const zoom = useRectangularZoom();`
- add the `zoom.annotations` in order to draw the zoom rectangle: `<Annotations>{zoom.annotations}</Annotations>`

This hook also implements the `double click` detection to reset the zoom to its original value.

<UseRectangularZoomDemo />

If a `PlotController` contains many `Plot` the change will be applied on all of them.

<MultiRectangularZoom />

## useAxisZoom

This hook allows to zoom in a plot along the specified axis (default to horitzontal). There are 3 steps in order ot implement the zoom:

- wrap your plot component in `<PlotController>`
- add the hook: `const zoom = useAxisZoom({direction:'horizontal'});`
- add the `zoom.annotations` in order to draw the zoom rectangle: `<Annotations>{zoom.annotations}</Annotations>`

This hook also implements the `double click` detection to reset the zoom to its original value.

<UseAxisZoom />
