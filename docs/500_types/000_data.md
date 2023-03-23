# Data

import DataSeriesPoint from "./DataSeriesPoint.demo.tsx"
import DataRangeSeriesPoint from "./DataRangeSeriesPoint.demo.tsx"

this type is used to define [Series](../100_series/000_intro.md) data type

The used data must be extended from the following types:

## 1. SeriesPoint

### Definition

**In Typescript:** `Array<{x:number,y:number}>`<br/>
**Explanation:** Array of points, each point must have two coordinates as a `number`, x for horizantal [Axis](../200_axes/000_intro.md) and y for vertical [Axis](../200_axes/000_intro.md)<br/>
**Example:**
`[ { x: 1, y: 1 }, { x: 2, y: 5 }, { x: 3, y: 3 }, { x: 4, y: 2 }, { x: 5, y: 1 } ] `

### Utilities

This type is used in :

- [ScatterSeries](../100_series/100_scatterSeries.md)
- [LineSeries](../100_series/200_lineSeries.md)
- [BarSeries](../100_series/300_barSeries.md)

### Example

<DataSeriesPoint/>

## 2. RangeSeriesPoint

### Definition

**In Typescript:** `Array<{x:number,y1:number,y2:number}>`<br/>

**Explanation:** Array of points, each point must have three coordinates as a `number`, x for horizontal [Axis](../200_axes/000_intro.md) and y1,y2 to specify the range for vertical [Axis](../200_axes/000_intro.md)<br/>
**Example :**
`[ { x: 1, y1: 0, y2: 2 }, { x: 2, y1: 2, y2: 3 }, { x: 3, y1: 3, y2: 4 } ]`

### Utilities

This type is used in:

- [RangeSeries](../100_series/500_rangeSeries.md)

### Example

<DataRangeSeriesPoint/>
