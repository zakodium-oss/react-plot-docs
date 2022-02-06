# NMR specta

Example of code loading and converting a jcamp (using `jcampconverter`)

## <sup>1</sup>H NMR

```jsx live
function () {
  const [data, setData] = useState();

  useEffect(async () => {
    const response = await fetch("/data/nmr-1h.jdx");
    const jcamp = await response.text();
    const data = xyToXYObject(
      convertJcamp(jcamp).flatten[0].spectra[0].data
    );
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
            label="Chemical shift (𝛅)"
            displayPrimaryGridLines
            flip={true}
          />
          <Axis
            position="left"
    hidden={true}
    paddingStart={0.03}
          />
        </Plot>
      ) : undefined}
    </div>
  );
}
```

## <sup>13</sup>C NMR

```jsx live
function () {
  const [data, setData] = useState();

  useEffect(async () => {
    const response = await fetch("/data/nmr-13c.jdx");
    const jcamp = await response.text();
    const data = xyToXYObject(
      convertJcamp(jcamp).flatten[0].spectra[0].data
    );
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
            label="Chemical shift (𝛅)"
            displayPrimaryGridLines
            flip={true}
          />
          <Axis
            position="left"
    hidden={true}
    paddingStart={0.03}
          />
        </Plot>
      ) : undefined}
    </div>
  );
}
```
