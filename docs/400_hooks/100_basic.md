# Basic

import UseStartMoveEndDemo from './UseStartMoveEnd.demo.tsx';
import UsePlotControllerAxes from './UsePlotControllerAxes.demo.tsx';

Low level hooks used by other hooks but can also be used natively.

currently we support the following basic hooks:

- **[useStartMoveEnd](./100_basic.md#usestartmoveend)**
- **[usePlotControllerAxes](./100_basic.md#useplotcontrolleraxes)**

## useStartMoveEnd

The low level hook `useStartMoveEnd` allows to track the mouse.

It accepts 3 callbacks:

- onStart: the mouse was clicked
- onMove: the mouse was dragged
- onEnd: the mouse was released

In the following example we simply log the different events.

<UseStartMoveEndDemo />

## usePlotControllerAxes

The low level hook `usePlotControllerAxes` allows to track axis state (max, min) after any modification.

In the following example we simply log axes domain while using **[UseRectangularZoom](./300_functional.md#userectangularzoom)**.

<UsePlotControllerAxes />
