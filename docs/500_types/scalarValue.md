# ScalarValue

import ScalarValueNumber from "./ScalarValueNumber.demo.tsx"
import ScalarValuePixels from "./ScalarValuePixels.demo.tsx"
import ScalarValuePourcentage from "./ScalarValuePourcentage.demo.tsx"

This type is mainly used to allow more possibilities and ways to enter props

We currently allow following three types :

## 1. Number

### Definition

**In typescript :** `number`<br/>
**Example :** `3`,`5`

### Utilities

The value is converted using [Axis](../200_axes/000_intro.md) scale

### Example

<ScalarValueNumber/>

## 2. Pixels

### Definition

**In typescript :** `'${number}'`<br/>
**Explication :** String number<br/>
**Example :** `'3'`,`'5'`

### Utilities

The value is in pixels, independent from scale and [Axis](../200_axes/000_intro.md)

### Example

<ScalarValuePixels />

## 3. Pourcentage

### Definition

**In typescript :** `'${number}%'`<br/>
**Explication :** String number ends with `"%"`<br/>
**Example :** `'3%'`,`'5%'`

### Utilities

The value is converted depeding [Axis](../200_axes/000_intro.md) domain

### Examples

<ScalarValuePourcentage/>
