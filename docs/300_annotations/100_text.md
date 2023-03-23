# Text

import TextDemo from './Text.demo.tsx';

`Text` annotation allows adding personalised text to plot in a specific position

<TextDemo/>

## Props

### Mandatory

- **x:** horizontal coordinate<br />
  type: [`ScalarValue`](../500_types/100_scalarValue.md)<br/>
- **y:** vertical coordinate<br />
  type: [`ScalarValue`](../500_types/100_scalarValue.md)<br/>

### Optional

- **color:** content color<br />
  type: `string`<br/>
  default: `"black"`

all `<text>` svg props are supported. For more information visit [the documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text)
