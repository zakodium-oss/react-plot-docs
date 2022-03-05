/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as ReactPlot from 'react-plot';
import { ObjectInspector } from 'react-inspector';
import { xyToXYObject } from 'ml-spectra-processing';
import { parseXY } from 'xy-parser';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const ButtonExample = (props) => (
  <button
    {...props}
    style={{
      backgroundColor: 'white',
      border: 'solid red',
      borderRadius: 20,
      padding: 10,
      cursor: 'pointer',
      ...props.style,
    }}
  />
);
function convertJcamp() {
  if (ExecutionEnvironment.canUseDOM) {
    return require('jcampconverter').convert;
  }
}
const ReactLiveScope = {
  React,
  ...React,
  ButtonExample,
  ...ReactPlot,
  ObjectInspector,
  xyToXYObject,
  parseXY,
  convertJcamp: convertJcamp(),
};

export default ReactLiveScope;
