# Annotations

Currently we support the following annotations:

- Arrow
- Circle
- Ellipse
- Line
- Polygon
- Polyline
- Rectangle
- Shape
- Text

```jsx live
function Demo() {
  const { Line, Circle, Ellipse, Rectangle, Text, Arrow } = Annotation;
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
      <Annotations>
        <Line
          x1="10"
          y1="10"
          x2="100"
          y2="100"
          color="yellow"
          strokeWidth="4"
        />
        <Arrow
          x1="10"
          y1="30"
          x2="100"
          y2="130"
          color="yellow"
          strokeWidth="4"
        />
        <Circle r="20" x="200" y="20" color="blue"></Circle>
        <Ellipse rx="20" ry="10" x="200" y="100" color="green"></Ellipse>
        <Rectangle x1="20" y1="100" x2="50" y2="150" color="violet"></Rectangle>
        <Text
          x="150"
          y="200"
          fontSize="30"
          fontFamily="monospace"
          fontWeight="bold"
          textAnchor="middle"
          color="orange"
        >
          Hello world
        </Text>
      </Annotations>
      <Axis position="bottom" />
      <Axis position="left" />
    </Plot>
  );
}
```

## Shape

## Group
