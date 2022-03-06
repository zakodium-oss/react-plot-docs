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
