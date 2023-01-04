# Group

import GroupDemo from './Group.demo.tsx';
import GroupAlign from './GroupAlign.demo.tsx';

`Group` is a container used to group other [Annotations](./000_intro.md)

<GroupDemo/>

## Restriction

`Group` must have at least one child

## Props

#### Mandatory

- **x:** horizontal coordinate<br />
  type: [`ScalarValue`](../500_types/100_scalarValue.md)<br/>
- **y:** vertical coordinate<br />
  type: [`ScalarValue`](../500_types/100_scalarValue.md)<br/>

#### Optional

- **style:** customizes group children style<br />
  type: `CSSProperties`<br/>
  default: `{}`

- **horizontalAlign:** changes group horizontal align<br />
  type: `'start' | 'middle' | 'end' | 'none'`<br/>
  default: `none`
- **verticalAlign:** changes group vertical align<br />
  type: `'start' | 'middle' | 'end' | 'none'`<br/>
  default: `'none'`

<GroupAlign/>
