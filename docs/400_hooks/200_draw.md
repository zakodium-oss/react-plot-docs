# Draw

import UseDrawRectangleDemo from './UseDrawRectangle.demo.tsx';
import UseDrawPathDemo from './UseDrawPath.demo.tsx';

More advanced hook will not only monitor the movement of the mouse but will also return `annotations` that can directly be drawn in the `Plot`.

currently we support the following drawing hooks:

- **[useDrawRectangle](./200_draw.md#usedrawrectangle)**
- **[useDrawPath](./200_draw.md#usedrawpath)**

## useDrawRectangle

There are 3 steps in order ot implement the draw rectangle:

- wrap your plot component in `<PlotController>`
- add the hook: `const drawRectangle = useDrawRectangle();`
- add the `drawRectangle.annotations` in order to draw the zoom rectangle: `<Annotations>{drawRectangle.annotations}</Annotations>`

<UseDrawRectangleDemo />

## useDrawPath

There are 3 steps in order ot implement the draw path:

- wrap your plot component in `<PlotController>`
- add the hook: `const drawPath = useDrawPath();`
- add the `drawPath.annotations` in order to draw the path: `<Annotations>{drawPath.annotations}</Annotations>`

<UseDrawPathDemo />
