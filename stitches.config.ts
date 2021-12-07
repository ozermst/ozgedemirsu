import { createStitches } from "@stitches/react";

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: "system-ui",
      montserrat: "Montserrat",
    },
    media: {
      bp1: "(min-width: 640px)",
      bp2: "(min-width: 768px)",
      bp3: "(min-width: 1024px)",
      bp4: "(min-width: 1280px)",
      bp5: "(min-width: 1536px)",
      motion: "(prefers-reduced-motion)",
      hover: "(any-hover: hover)",
      dark: "(prefers-color-scheme: dark)",
      light: "(prefers-color-scheme: light)",
    },
  },
});
