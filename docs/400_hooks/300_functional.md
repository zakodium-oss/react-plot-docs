# Fonctional

import UseRectangularZoomDemo from './UseRectangularZoom.demo.tsx';
import MultiRectangularZoom from './MultiRectangularZoom.demo.tsx';
import UseAxisZoom from './UseAxisZoom.demo.tsx'
import UseAxisWheelZoom from './UseAxisWheelZoom.demo.tsx'
import UsePanDemo from './UsePan.demo.tsx'
import UseCrossHairDemo from './UseCrossHair.demo.tsx'

These hooks allow you to do specific precoded functionalities.

Currently we support following functional hooks:

- **[useAxisZoom](./300_functional.md#useaxiszoom)**
- **[useRectangularZoom](./300_functional.md#userectangularzoom)**
- **[useAxisWheelZoom](./300_functional.md#useaxiswheelzoom)**
- **[useCrossHair](./300_functional.md#usecrosshair)**
- **[usePan](./300_functional.md#usepan)**

## useAxisZoom

This hook allows to zoom in a plot along the specified axis (default to horitzontal) while drawing a rectangle. There are 3 steps in order to implement the zoom:

- wrap your plot component in `<PlotController>`
- add the hook: `const zoom = useAxisZoom({direction:'horizontal'});`
- add the `zoom.annotations` in order to draw the zoom rectangle: `<Annotations>{zoom.annotations}</Annotations>`

This hook also implements the `double click` detection to reset the zoom to its original value.

<UseAxisZoom />

## useRectangularZoom

This hook allows to directly manage the zoom in a plot. There are 3 steps in order to implement the zoom:

- wrap your plot component in `<PlotController>`
- add the hook: `const zoom = useRectangularZoom();`
- add the `zoom.annotations` in order to draw the zoom rectangle: `<Annotations>{zoom.annotations}</Annotations>`

This hook also implements the `double click` detection to reset the zoom to its original value.

<UseRectangularZoomDemo />

If a `PlotController` contains several `Plot` elements, the change will be applied on all of them.

<MultiRectangularZoom />

## useAxisWheelZoom

This hook allows to zoom in a plot along the specified axis (default to vertical) using mouse wheel.

The hook may be customized with following props:

- **center** : it defines zoom center, used to choose a specific point or the mouse cursor `"pointer"` as zoom center<br/>
  type : `number | "pointer"`<br/>
  default : `0`

- **factor** : controls zoom speed<br/>
  type : `number`<br/>
  default : `"0"`

- **invert** : inverts wheel zooming (default wheel up will zoom in our plot)<br/>
  type : `string`<br/>
  default : `false`

There are 2 steps in order ot implement the wheel zoom:

- wrap your plot component in `<PlotController>`
- add the hook: `useAxisWheelZoom({direction:'vertical', center:0, factor:1, invert:false})`

This hook also implements the `double click` detection to reset the zoom to its original value.

<UseAxisWheelZoom />

## useCrossHair

This hook adds crossHair to the plot .
The hook may be customized with the following props:

- **color** : crossHair color<br/>
  type : `string`<br/>
  default : `"black"`

- **lineStyle** : adds style to crossHair line<br/>
  type : `CSSProperties`<br/>
  default : `{}`

- **textStyle** : adds style to crossHair text<br/>
  type : `CSSProperties`<br/>
  default : `{}`

- **textTransform** : trasforms crossHair text<br/>
  type : `string`<br/>
  default : `""`

There are 3 steps in order to implement the crossHair:

- wrap your plot component in `<PlotController>`
- add the hook: `const crossHair = useCrossHair();`
- add the `crossHair.annotations` in order to draw CrossHair: `<Annotations>{crossHair.annotations}</Annotations>`

<UseCrossHairDemo />

## usePan

This hook adds an interactive pan to the plot to move in any direction while holding `SHIFT`. There are 2 steps in order to implement the pan:

- wrap your plot component in `<PlotController>`
- add the hook: `usePan();`

This hook also implements the `double click` detection to reset the zoom to its original value.

<UsePanDemo />
