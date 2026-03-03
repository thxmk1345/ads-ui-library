import { semanticColors } from "./semantic/colors";
import { spacing } from "./spacing";
import { radius } from "./radius";
import { typography } from "./typography";

export const tokens = {
  colors: semanticColors,
  spacing,
  radius,
  typography
} as const;

export type Tokens = typeof tokens;

export { semanticColors } from "./semantic/colors";
export { spacing } from "./spacing";
export { radius } from "./radius";
export { typography } from "./typography";
