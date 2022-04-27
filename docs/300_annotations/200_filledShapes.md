# Filled shapes

import FilledShapesDemo from './FilledShapes.demo.tsx';
import Rectangle from './Rectangle.demo.tsx';
import Circle from './Circle.demo.tsx';
import Ellipse from './Ellipse.demo.tsx';
import DirectedEllipse from './DirectedEllipse.demo.tsx';

<FilledShapesDemo/>

## Rectangle

<Rectangle/>

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

<Circle/>

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

<Ellipse/>

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

<DirectedEllipse/>

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

### Props

#### Mandatory

- **points:** series of points<br />
  type: `Array<{ x: ScalarValue, y: ScalarValue }>`<br/>

#### Optional

- **color:** content color<br />
  type: `string`<br/>
  default: `"black"`

all `<polygone>` svg props are supported for more information visit [the documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygone)

## Shape

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

- **color:** content color<br />
  type: `string`<br/>
  default: `"black"`
- **style:** customise shape style<br />
  type: `CSSProperties`<br/>
  default: `{}`
- **onMouseEnter:** mouse enter event callback<br />
  type: `MouseEventHandler<SVGGElement>`<br/>
- **onMouseLeave:** mouse leave event callback<br />
  type: `MouseEventHandler<SVGGElement>`<br/>
