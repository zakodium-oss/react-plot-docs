# Series

There are currently 5 different kind of series that can be added in a plot:

- LineSeries
- ScatterSeries
- FunctionSeries
- BarSeries
- RangeSeries

Series are direct children of the `Plot` component and you may have as many Series as you which on the same plot.

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
  />
</Plot>
```
