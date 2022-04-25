# Draw

## useDrawRectangle

A more advanced hook will not only monitor the movement of the mouse but will also return `annotations` that can directly be drawn in the `Plot`.

- wrap your plot component in `<PlotController>`
- add the hook: `const drawRectangle = useDrawRectangle();`
- add the `drawRectangle.annotations` in order to draw the zoom rectangle: `<Annotations>{drawRectangle.annotations}</Annotations>`

<UseDrawRectangleDemo />
