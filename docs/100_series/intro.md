# Series

There are currently 5 different kind of series that can be added in a plot:

- LineSeries
- ScatterSeries
- FunctionSeries
- BarSeries
- RangeSeries

Series are direct children of the `Plot` component and you may have as many Series as you which on the same plot.

## LineSeries

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
    lineStyle={{ stroke: "blue" }}
  />
  <LineSeries
    data={[
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 3, y: 2 },
      { x: 4, y: 1 },
      { x: 5, y: 2 },
    ]}
    lineStyle={{ stroke: "green" }}
  />
</Plot>
```

## ScatterSeries

```jsx live
<Plot width={300} height={300}>
  <ScatterSeries
    data={[
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 3 },
      { x: 4, y: 2 },
      { x: 5, y: 1 },
    ]}
    lineStyle={{ stroke: "blue" }}
  />
  <ScatterSeries
    data={[
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 3, y: 2 },
      { x: 4, y: 1 },
      { x: 5, y: 2 },
    ]}
    lineStyle={{ stroke: "green" }}
  />
</Plot>
```

## FunctionSeries

```jsx live
<Plot width={800} height={300}>
  <FunctionSeries
    getY={(x) => Math.sin(x)}
    label="y=4*sin(x)"
    lineStyle={{ stroke: "blue" }}
  />
  <FunctionSeries
    getY={(x) => Math.cos(x)}
    label="y=4*cos(x)"
    lineStyle={{ stroke: "red" }}
  />
  <Legend position="embedded" />
  <Axis min={0} max={20} id="x" position="bottom" />
  <Axis min={-2} max={2} id="y" position="left" />
</Plot>
```

## BarSeries

```jsx live
<Plot width={300} height={300}>
  <BarSeries
    data={[
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 3 },
      { x: 4, y: 2 },
      { x: 5, y: 1 },
    ]}
    lineStyle={{ stroke: "rgba(255,0,0,0.5)", strokeWidth: "10" }}
  />
  <BarSeries
    data={[
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 3, y: 2 },
      { x: 4, y: 1 },
      { x: 5, y: 2 },
    ]}
    lineStyle={{ stroke: "rgba(0,255,0,0.5)", strokeWidth: "30" }}
  />
  <Axis min={0} max={6} id="x" position="bottom" />
  <Axis min={0} id="y" position="left" />
</Plot>
```

## RangeSeries

```jsx live
<Plot width={300} height={300}>
  <RangeSeries
    data={[
      { x: 1, y1: 1, y2: 5 },
      { x: 2, y1: 2, y2: 4 },
      { x: 3, y1: 3, y2: 4 },
      { x: 4, y1: 2, y2: 4 },
      { x: 5, y1: 1, y2: 5 },
    ]}
    lineStyle={{ stroke: "red", strokeWidth: "3", fill: "green" }}
  />
</Plot>
```
