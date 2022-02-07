# Infrared spectrum

Example of code loading and converting a jcamp (using `jcampconverter`)

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
