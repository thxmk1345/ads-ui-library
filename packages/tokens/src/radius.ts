export const radius = {
  none: "0px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  pill: "999px",
  round: "50%"
} as const;

export type Radius = typeof radius;
