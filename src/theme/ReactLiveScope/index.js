/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import * as ReactPlot from "react-plot";
import { ObjectInspector } from "react-inspector";

const ButtonExample = (props) => (
  <button
    {...props}
    style={{
      backgroundColor: "white",
      border: "solid red",
      borderRadius: 20,
      padding: 10,
      cursor: "pointer",
      ...props.style,
    }}
  />
);

const ReactLiveScope = {
  React,
  ...React,
  ButtonExample,
  ...ReactPlot,
  ObjectInspector,
};

export default ReactLiveScope;
