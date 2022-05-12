# Text

import TextDemo from './Text.demo.tsx';

`Text` annotation allows adding personlized text to plot in a specifique position

<TextDemo/>

## Props

### Mandatory

- **x:** horizontal coordinate<br />
  type: [`ScalarValue`](../500_types/scalarValue.md)<br/>
- **y:** vertical coordinate<br />
  type: [`ScalarValue`](../500_types/scalarValue.md)<br/>

### Optional

- **color:** content color<br />
  type: `string`<br/>
  default: `"black"`

all `<text>` svg props are supported for more information visit [the documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text)
