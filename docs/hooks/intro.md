# Hooks

`react-plot` provides hook that allows to add functionalities to the plot.

To benefit of those features the hooks have to be wrapped in a `PlotController`.

```jsx live
function Demo() {
  return (
    <PlotController>
      <Zoomable />
    </PlotController>
  );

  function Zoomable() {
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
}
```

```jsx live
function Demo() {
  const [currentEvent, setCurrentEvent] = useState(undefined);

  return (
    <PlotController>
      <Tracking />
      <EventInfo />
    </PlotController>
  );

  function EventInfo() {
    return (
      <>
        {currentEvent && (
          <div>
            Current event: {currentEvent.kind} - Coordinates:{" "}
            {currentEvent.event.coordinates.x.toFixed(2)} -{" "}
            {currentEvent.event.coordinates.y.toFixed(2)}{" "}
          </div>
        )}
      </>
    );
  }

  function Tracking() {
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
    );
  }
}
```

If a `PlotController` contains many `Plot` the change will be applied on all of them.

```jsx live
function Demo() {
  return (
    <PlotController>
      <Zoomable />
      <Zoomable />
    </PlotController>
  );

  function Zoomable() {
    const zoom = useRectangularZoom();
    return (
      <div>
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
        <Plot width={300} height={300}>
          <LineSeries
            data={[
              { x: 1, y: 3 },
              { x: 2, y: 2 },
              { x: 3, y: 1 },
              { x: 4, y: 2 },
              { x: 5, y: 3 },
            ]}
          />
          <Annotations>{zoom.annotations}</Annotations>
        </Plot>
      </div>
    );
  }
}
```
