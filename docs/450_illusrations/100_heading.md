# Heading

import HeadingDemo from './Heading.demo.tsx';
import HeadingTitle from './HeadingTitle.demo.tsx';
import HeadingSubtitle from './HeadingSubtitle.demo.tsx';
import HeadingPosition from './HeadingPosition.demo.tsx';

`Heading` represent the plot label

<HeadingDemo/>

## Restriction

`Plot` can only have one Heading element

## Props

### Mandatory

- **title:** heading title text content<br />
  type: `string`<br/>

### Optional

- **titleStyle:** customise title style<br />
  type: `CSSProperties`<br/>
  default: `{}`
- **titleClass:** add a class to the title<br />
  type: `string`<br/>
  default: `""`

  <HeadingTitle/>

- **subtitle:** heading subtitle text content<br />
  type: `string`<br/>
  default: `""`
- **subtitleStyle:** customise subtitle style<br />
  type: `CSSProperties`<br/>
  default: `{}`
- **subtitleClass:** add a class to the subtitle<br />
  type: `string`<br  
  default: `""`

  <HeadingSubtitle/>

- **position:** add a class to the subtitle<br />
  type: `'top' | 'bottom'`<br  
  default: `'top'`

  <HeadingPosition/>
