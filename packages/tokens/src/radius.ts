export const radius = {
  1: 4,
  2: 6,
  3: 8,
  4: 12,
  5: 16,
  6: 20,
  section: 16,
  full: 9999,
} as const;

export type Radius = typeof radius;
