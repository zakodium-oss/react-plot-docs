# Other shapes

import OtherShapesDemo from './OtherShapes.demo.tsx';
import LineDemo from './Line.demo.tsx';
import ArrowDemo from './Arrow.demo.tsx';
import PolylineDemo from './Polyline.demo.tsx';

<OtherShapesDemo/>

## Line

<LineDemo/>

### Props

#### Mandatory

- **x1:** start point horizontal coordinate<br />
  type: [`ScalarValue`](./000_intro.md)<br/>
- **y1:** start point vertical coordinate<br />
  type: [`ScalarValue`](./000_intro.md)<br/>
- **x2:** end point horizontal coordinate<br />
  type: [`ScalarValue`](./000_intro.md)<br/>
- **y2:** end point vertical coordinate<br />
  type: [`ScalarValue`](./000_intro.md)<br/>

#### Optional

- **color:** stroke color<br />
  type: `string`<br/>
  default: `"black"`

all `<line>` svg props are supported for more information visit [the documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line)

## Arrow

<ArrowDemo/>

same as [Line](./300_otherShapes.md#line) with 2 more special props :

- **startPoint:** shape added to starting point<br />
  type: `'circle' | 'triangle' | 'line' | 'none'`<br/>
  default: `"none"`
- **endPoint:** shape added to ending point<br />
  type: `'circle' | 'triangle' | 'line' | 'none'`<br/>
  default: `"none"

## Polyline

<PolylineDemo/>

### Props

#### Mandatory

- **points:** series of points<br />
  type: `Array<{ x: ScalarValue, y: ScalarValue }>`<br/>

#### Optional

- **color:** stroke color<br />
  type: `string`<br/>
  default: `"black"`

all `<polygone>` svg props are supported for more information visit [the documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygone)
