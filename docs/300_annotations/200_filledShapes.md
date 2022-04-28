# Filled shapes

import FilledShapesDemo from './FilledShapes.demo.tsx';
import RectangleDemo from './Rectangle.demo.tsx';
import CircleDemo from './Circle.demo.tsx';
import EllipseDemo from './Ellipse.demo.tsx';
import DirectedEllipseDemo from './DirectedEllipse.demo.tsx';
import PolygoneDemo from './Polygone.demo.tsx';
import ShapeDemo from './Shape.demo.tsx';

<FilledShapesDemo/>

## Rectangle

<RectangleDemo/>

### Props

#### Mandatory

- **x1:** first corner horizontal coordinate<br />
  type: [`ScalarValue`](./000_intro.md)<br/>
- **y1:** first corner vertical coordinate<br />
  type: [`ScalarValue`](./000_intro.md)<br/>
- **x2:** second corner horizontal coordinate<br />
  type: [`ScalarValue`](./000_intro.md)<br/>
- **y2:** second corner vertical coordinate<br />
  type: [`ScalarValue`](./000_intro.md)<br/>

#### Optional

- **color:** fill color<br />
  type: `string`<br/>
  default: `"black"`

all `<rect>` svg props are supported for more information visit [the documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect)

## Circle

<CircleDemo/>

### Props

#### Mandatory

- **x:** center horizontal coordinate<br />
  type: [`ScalarValue`](./000_intro.md)<br/>
- **y:** center vertical coordinate<br />
  type: [`ScalarValue`](./000_intro.md)<br/>
- **r:** circle radius<br />
  type: [`ScalarValue`](./000_intro.md)<br/>

#### Optional

- **color:** fill color<br />
  type: `string`<br/>
  default: `"black"`

all `<circle>` svg props are supported for more information visit [the documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle)

## Ellipse

<EllipseDemo/>

### Props

#### Mandatory

- **x:** center horizontal coordinate<br />
  type: [`ScalarValue`](./000_intro.md)<br/>
- **y:** center vertical coordinate<br />
  type: [`ScalarValue`](./000_intro.md)<br/>
- **rx:** radius on the horizontal axis<br />
  type: [`ScalarValue`](./000_intro.md)<br/>
- **ry:** radius on the vertical axis<br />
  type: [`ScalarValue`](./000_intro.md)<br/>

#### Optional

- **color:** fill color<br />
  type: `string`<br/>
  default: `"black"`

all `<ellipse>` svg props are supported for more information visit [the documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse)

## DirectedEllipse

<DirectedEllipseDemo/>

### Props

#### Mandatory

- **x1:** first corner horizontal coordinate<br />
  type: [`ScalarValue`](./000_intro.md)<br/>
- **y1:** first corner vertical coordinate<br />
  type: [`ScalarValue`](./000_intro.md)<br/>
- **x2:** second corner horizontal coordinate<br />
  type: [`ScalarValue`](./000_intro.md)<br/>
- **y2:** second corner vertical coordinate<br />
  type: [`ScalarValue`](./000_intro.md)<br/>
- **width:** ellipse width<br />
  type: [`ScalarValue`](./000_intro.md)<br/>

#### Optional

- **color:** fill color<br />
  type: `string`<br/>
  default: `"black"`

all `<ellipse>` svg props are supported for more information visit [the documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse)

## Polygone

<PolygoneDemo/>

### Props

#### Mandatory

- **points:** series of points<br />
  type: `Array<{ x: ScalarValue, y: ScalarValue }>`<br/>

#### Optional

- **color:** fill color<br />
  type: `string`<br/>
  default: `"black"`

all `<polygone>` svg props are supported for more information visit [the documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygone)

## Shape

<ShapeDemo/>

### Props

#### Mandatory

- **x:** horizontal coordinate<br />
  type: [`ScalarValue`](./000_intro.md)<br/>
- **y:** vertical coordinate<br />
  type: [`ScalarValue`](./000_intro.md)<br/>
- **size:** shape size<br />
  type: `number`<br/>
- **shape:** shape name<br />
  type: `'triangle' | 'circle' | 'diamond' | 'square'`<br/>

#### Optional

- **color:** fill color<br />
  type: `string`<br/>
  default: `"black"`
- **style:** customise shape styling<br />
  type: `CSSProperties`<br/>
  default: `{}`
- **onMouseEnter:** mouse enter event callback<br />
  type: `MouseEventHandler<SVGGElement>`<br/>
- **onMouseLeave:** mouse leave event callback<br />
  type: `MouseEventHandler<SVGGElement>`<br/>
