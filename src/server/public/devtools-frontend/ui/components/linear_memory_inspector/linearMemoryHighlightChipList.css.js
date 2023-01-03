// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.highlight-chip-list {
  min-height: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  background-color: var(--color-background);
  margin: 8px 0;
  gap: 8px;
  row-gap: 6px;
}

.highlight-chip {
  background: var(--color-background);
  border: 1px solid var(--color-button-secondary-border);
  height: 18px;
  border-radius: 4px;
  flex: 0 0 auto;
  max-width: 250px;
  position: relative;
  padding: 0 6px;
}

.highlight-chip:hover {
  background-color: var(--color-background-elevation-1);
}

.delete-highlight-container {
  display: none;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 4px;
  width: 24px;
  align-items: center;
  justify-content: center;
}

.delete-highlight-button {
  cursor: pointer;
  width: 13px;
  height: 13px;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete-highlight-button:hover {
  background-color: var(--color-details-hairline);
  border-radius: 50%;
}

.jump-to-highlight-button {
  cursor: pointer;
  padding: 0;
  border: none;
  background: none;
  height: 100%;
  align-items: center;
  max-width: 100%;
  overflow: hidden;
}

.delete-highlight-button devtools-icon {
  width: 13px;
  height: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.source-code {
  font-family: var(--source-code-font-family);
  font-size: var(--source-code-font-size);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--color-text-primary);
}

.value {
  color: var(--color-syntax-2);
}

.separator {
  white-space: pre;
  flex-shrink: 0;
}

.highlight-chip.focused {
  border-color: var(--color-primary);
  background-color: var(--color-button-secondary-background-hovering);
}

.highlight-chip:hover > .delete-highlight-container {
  display: flex;
  /* To avoid issues with stacking semi-transparent colors, we use a hardcoded solid color here. */
  background: linear-gradient(90deg, transparent 0%, rgb(241 243 244) 25%); /* stylelint-disable-line plugin/use_theme_colors */
}

.highlight-chip.focused:hover > .delete-highlight-container {
  /* To avoid issues with stacking semi-transparent colors, we use a hardcoded solid color here. */
  background: linear-gradient(90deg, transparent 0%, rgb(231 241 253) 25%); /* stylelint-disable-line plugin/use_theme_colors */
}

:host-context(.-theme-with-dark-background) .highlight-chip:hover > .delete-highlight-container {
  display: flex;
  /* To avoid issues with stacking semi-transparent colors, we use a hardcoded solid color here. */
  background: linear-gradient(90deg, transparent 0%, rgb(41 42 45) 25%); /* stylelint-disable-line plugin/use_theme_colors */
}

:host-context(.-theme-with-dark-background) .highlight-chip.focused:hover > .delete-highlight-container {
  /* To avoid issues with stacking semi-transparent colors, we use a hardcoded solid color here. */
  background: linear-gradient(90deg, transparent 0%, rgb(48 55 68) 25%); /* stylelint-disable-line plugin/use_theme_colors */
}

/*# sourceURL=linearMemoryHighlightChipList.css */
`);
export default styles;
