import { createStitches } from "@stitches/react";

export const {
  config,
  theme,
  css,
  styled,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      primary: "green",
    },
  },
});
