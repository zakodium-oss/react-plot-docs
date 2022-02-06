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

```jsx live noInline={true}
function TrackablePlot() {
  const [currentEvent, setCurrentEvent] = useState();
  const tracker = useStartMoveEnd({
    onStart: (event) => {
      setCurrentEvent({ kind: "onStart", event });
    },
    onMove: (event) => {
      setCurrentEvent({ kind: "onMove", event });
    },
    onEnd: (event) => {
      setCurrentEvent({ kind: "onEnd", event });
    },
  });
  return (
    <div style={{ display: "flex" }}>
      <Plot width={300} height={300}>
        <LineSeries
          data={[
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 3 },
            { x: 4, y: 2 },
            { x: 5, y: 1 },
          ]}
        />
      </Plot>
      <ObjectInspector data={currentEvent} />
    </div>
  );
}

render(
  <PlotController>
    <TrackablePlot />
  </PlotController>
);
```

## useDrawRectangle

A more advanced hook will not only monitor the movement of the mouse but will also return `annotations` that can directly be drawn in the `Plot`.

- wrap your plot component in `<PlotController>`
- add the hook: `const drawRectangle = useDrawRectangle();`
- add the `drawRectangle.annotations` in order to draw the zoom rectangle: `<Annotations>{drawRectangle.annotations}</Annotations>`

```jsx live noInline={true}
function DrawRectanglePlot() {
  const drawRectangle = useDrawRectangle();
  return (
    <Plot width={300} height={300}>
      <LineSeries
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 2 },
          { x: 5, y: 1 },
        ]}
      />
      <Annotations>{drawRectangle.annotations}</Annotations>
    </Plot>
  );
}

render(
  <PlotController>
    <DrawRectanglePlot />
  </PlotController>
);
```

## useRectangularZoom

This hook allows directly to manage the zoom in a plot. There are 3 steps in order ot implement the zoom:

- wrap your plot component in `<PlotController>`
- add the hook: `const zoom = useRectangularZoom();`
- add the `zoom.annotations` in order to draw the zoom rectangle: `<Annotations>{zoom.annotations}</Annotations>`

This hook also implements the `double click` detection to reset the zoom to its original value.

```jsx live noInline={true}
function ZoomablePlot() {
  const zoom = useRectangularZoom();
  return (
    <Plot width={300} height={300}>
      <LineSeries
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 2 },
          { x: 5, y: 1 },
        ]}
      />
      <Annotations>{zoom.annotations}</Annotations>
    </Plot>
  );
}
render(
  <PlotController>
    <ZoomablePlot />
  </PlotController>
);
```

If a `PlotController` contains many `Plot` the change will be applied on all of them.

```jsx live noInline={true}
function ZoomablePlot() {
  const zoom = useRectangularZoom();
  return (
    <Plot width={300} height={300}>
      <LineSeries
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 2 },
          { x: 5, y: 1 },
        ]}
      />
      <Annotations>{zoom.annotations}</Annotations>
    </Plot>
  );
}
render(
  <PlotController>
    <ZoomablePlot />
    <ZoomablePlot />
  </PlotController>
);
```
