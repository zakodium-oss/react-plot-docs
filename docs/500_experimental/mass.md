# Mass spectrum

Example of code loading and converting a text file (using `xy-parser`)

```jsx live noInline={true}
function ZoomablePlot() {
  const [data, setData] = useState();
  const zoom = useAxisZoom({ direction: "horizontal" });

  useEffect(async () => {
    const response = await fetch("/data/mass-peg1500.txt");
    const text = await response.text();
    setData(xyToXYObject(parseXY(text)));
  }, []);

  return (
    <div>
      {data ? (
        <Plot width={800} height={300} label="Mass spectrum of PEG 1500">
          <LineSeries data={data} xAxis="x" yAxis="y" />
          <Axis id="x" position="bottom" label="m/z" displayPrimaryGridLines />
          <Axis
            position="left"
            label="Relative intensity"
            paddingStart={0.03}
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
