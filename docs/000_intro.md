---
slug: /
---

# Introduction

React-plot is a react component specially designed to display scientific information like spectra or measurements. It allows to display large amount of data as well as annotations like ellipse, text or the result of a peak picking.

```jsx live
<Plot width={300} height={300}>
  <LineSeries
    data={[
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 3 },
      { x: 4, y: 2 },
      { x: 5, y: 1 },
    ]}
    xAxis="x"
    yAxis="y"
  />
  <Axis
    id="x"
    position="bottom"
    label="Drain voltage [V]"
    displayPrimaryGridLines
  />
  <Axis
    id="y"
    position="left"
    label="Drain current [mA]"
    displayPrimaryGridLines
  />
</Plot>
```

Interactivity with the plot is achieved Using `hooks`. In the following example it is possible to draw a rectangle to zoom and click twice to reset the original zoom.

```jsx live noInline={true}
function ZoomablePlot() {
  const [data, setData] = useState();
  const zoom = useRectangularZoom();

  useEffect(async () => {
    const response = await fetch("/data/ir.jdx");
    const jcamp = await response.text();
    const data = xyToXYObject(
      convertJcamp(jcamp).flatten[0].spectra[0].data
    ).map((point) => ({ x: point.x, y: point.y * 100 }));
    setData(data);
  }, []);

  return (
    <div>
      {data ? (
        <Plot width={800} height={300}>
          <LineSeries data={data} xAxis="x" yAxis="y" />
          <Axis
            id="x"
            position="bottom"
            label="Wavenumber (cm-1)"
            displayPrimaryGridLines
            flip={true}
          />
          <Axis
            id="y"
            position="left"
            label="Transmitance (%)"
            displayPrimaryGridLines
          />
          <Annotations>{zoom.annotations}</Annotations>
        </Plot>
      ) : undefined}
    </div>
  );
}

render(
  <PlotController>
    <ZoomablePlot />
  </PlotController>
);
```
