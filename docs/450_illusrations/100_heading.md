# Heading

import HeadingDemo from './Heading.demo.tsx';
import HeadingTitle from './HeadingTitle.demo.tsx';
import HeadingSubtitle from './HeadingSubtitle.demo.tsx';
import HeadingPosition from './HeadingPosition.demo.tsx';

`Heading` represents the plot label

<HeadingDemo/>

## Restriction

`Plot` can only have one Heading element

## Props

### Mandatory

- **title:** heading title text content<br />
  type: `string`<br/>

### Optional

- **titleStyle:** customises title style<br />
  type: `CSSProperties`<br/>
  default: `{}`
- **titleClass:** adds a class to the title<br />
  type: `string`<br/>
  default: `""`

  <HeadingTitle/>

- **subtitle:** heading subtitle text content<br />
  type: `string`<br/>
  default: `""`
- **subtitleStyle:** customises subtitle style<br />
  type: `CSSProperties`<br/>
  default: `{}`
- **subtitleClass:** adds a class to the subtitle<br />
  type: `string`<br  
  default: `""`

  <HeadingSubtitle/>

- **position:** adds a class to the subtitle<br />
  type: `'top' | 'bottom'`<br  
  default: `'top'`

  <HeadingPosition/>
