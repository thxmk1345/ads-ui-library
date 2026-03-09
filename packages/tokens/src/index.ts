import { applied, base, core } from "./themes/light";
import { spacing } from "./spacing";
import { radius } from "./radius";
import { typography } from "./typography";

export const tokens = {
  theme: {
    applied,
    base,
    core,
  },
  spacing,
  radius,
  typography,
} as const;

export type Tokens = typeof tokens;

/* re-export modules */
export * from "./themes/light";
export * from "./spacing";
export * from "./radius";
export * from "./typography";
