/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from "react";
import { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { usePrismTheme } from "@docusaurus/theme-common";
import styles from "./styles.module.css";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { FiChevronRight } from "react-icons/fi";

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

function ResultWithHeader() {
  return (
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
      style={visible ? { maxHeight: "1000px" } : { maxHeight: 0 }}
    />
  );
}

function EditorWithHeader() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Header onClick={() => setVisible((visible) => !visible)}>
        {visible ? "Hide " : "Show "}
        <Translate
          id="theme.Playground.liveEditor"
          description="The live editor label of the live codeblocks"
        >
          Live Editor
        </Translate>
        <FiChevronRight
          style={visible ? { transform: "rotate(90deg)" } : {}}
          className={styles.headerChevron}
          size="25"
        />
      </Header>
      <ThemedLiveEditor visible={visible} />
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

  return (
    <div className={styles.playgroundContainer}>
      <LiveProvider
        code={children.replace(/\n$/, "")}
        transformCode={transformCode || ((code) => `${code};`)}
        theme={prismTheme}
        {...props}
      >
        <ResultWithHeader />
        <EditorWithHeader />
      </LiveProvider>
    </div>
  );
}
