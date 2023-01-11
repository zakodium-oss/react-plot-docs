---
slug: /
---

# Introduction

import DrainVoltage from './DrainVoltage.demo.tsx';
import ZoomableInfrared from './ZoomableInfrared.demo.tsx';

React-plot is a react component specially designed to display scientific information like spectra or measurements. It allows to display large amount of data as well as annotations like ellipse, text or the result of a peak picking.

<DrainVoltage />

Interactivity with the plot is achieved using `hooks`. In the following example it is possible to draw a rectangle to zoom and click twice to reset the original zoom.

<ZoomableInfrared />
