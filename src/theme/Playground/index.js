/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from "@docusaurus/BrowserOnly";
import usePrismTheme from "@theme/hooks/usePrismTheme";
import styles from "./styles.module.css";
import useIsBrowser from "@docusaurus/useIsBrowser";

function Header({ onClick, children }) {
  return (
    <div
      style={onClick ? { cursor: "pointer" } : null}
      onClick={() => onClick()}
      className={clsx(styles.playgroundHeader)}
    >
      {children}
    </div>
  );
}

function LivePreviewLoader() {
  // Is it worth improving/translating?
  return <div>Loading...</div>;
}

function ResultWithHeader({ visible, setVisible }) {
  return (
    <>
      {/* https://github.com/facebook/docusaurus/issues/5747 */}
      <div className={styles.playgroundPreview}>
        <BrowserOnly fallback={<LivePreviewLoader />}>
          {() => (
            <>
              <LivePreview />
              <LiveError />
            </>
          )}
        </BrowserOnly>
      </div>
    </>
  );
}

function ThemedLiveEditor({ visible }) {
  const isBrowser = useIsBrowser();
  return (
    <LiveEditor
      // We force remount the editor on hydration,
      // otherwise dark prism theme is not applied
      key={isBrowser}
      className={styles.playgroundEditor}
      style={visible ? { maxHeight: "600px" } : { maxHeight: 0 }}
    />
  );
}

function EditorWithHeader({ visible, setVisible }) {
  return (
    <>
      <ThemedLiveEditor visible={visible} />
      <Header onClick={() => setVisible((visible) => !visible)}>
        {visible ? "Hide " : "Show "}
        <Translate
          id="theme.Playground.liveEditor"
          description="The live editor label of the live codeblocks"
        >
          Live Editor
        </Translate>
      </Header>
    </>
  );
}

export default function Playground({ children, transformCode, ...props }) {
  const {
    siteConfig: {
      themeConfig: {
        liveCodeBlock: { playgroundPosition },
      },
    },
  } = useDocusaurusContext();
  const prismTheme = usePrismTheme();

  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.playgroundContainer}>
      <LiveProvider
        code={children.replace(/\n$/, "")}
        transformCode={transformCode || ((code) => `${code};`)}
        theme={prismTheme}
        {...props}
      >
        <ResultWithHeader visible={visible} setVisible={setVisible} />
        <EditorWithHeader visible={visible} setVisible={setVisible} />
      </LiveProvider>
    </div>
  );
}
