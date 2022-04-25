# Fonctional

## useAxisZoom

This hook allows to zoom in a plot along the specified axis (default to horitzontal). There are 3 steps in order ot implement the zoom:

- wrap your plot component in `<PlotController>`
- add the hook: `const zoom = useAxisZoom({direction:'horizontal'});`
- add the `zoom.annotations` in order to draw the zoom rectangle: `<Annotations>{zoom.annotations}</Annotations>`

This hook also implements the `double click` detection to reset the zoom to its original value.

<UseAxisZoom />

## useRectangularZoom

This hook allows directly to manage the zoom in a plot. There are 3 steps in order ot implement the zoom:

- wrap your plot component in `<PlotController>`
- add the hook: `const zoom = useRectangularZoom();`
- add the `zoom.annotations` in order to draw the zoom rectangle: `<Annotations>{zoom.annotations}</Annotations>`

This hook also implements the `double click` detection to reset the zoom to its original value.

<UseRectangularZoomDemo />

If a `PlotController` contains many `Plot` the change will be applied on all of them.

<MultiRectangularZoom />
