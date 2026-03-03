import { baseColors } from "../base/colors";

export const semanticColors = {
  background: {
    canvas: baseColors.background.surface,
    raised: baseColors.background.elevated,
    muted: baseColors.background.muted,
    overlay: baseColors.overlay.scrim
  },
  text: {
    primary: baseColors.text.primary,
    secondary: baseColors.text.secondary,
    muted: baseColors.text.muted,
    inverse: baseColors.text.onInverted
  },
  border: {
    subtle: baseColors.borders.default,
    strong: baseColors.borders.strong,
    focus: baseColors.borders.focus
  },
  button: {
    primaryBg: baseColors.brand.primary,
    primaryBgHover: baseColors.brand.primaryStrong,
    primaryText: baseColors.text.onPrimary,
    secondaryBg: baseColors.background.muted,
    secondaryBgHover: baseColors.background.subtle,
    secondaryText: baseColors.text.primary,
    ghostBgHover: baseColors.background.subtle,
    ghostText: baseColors.text.primary,
    disabledBg: baseColors.background.muted,
    disabledText: baseColors.text.muted,
    focusRing: baseColors.borders.focus
  },
  card: {
    background: baseColors.background.surface,
    elevatedBackground: baseColors.background.elevated,
    border: baseColors.borders.default,
    shadowColor: "rgba(15, 22, 36, 0.08)"
  },
  status: {
    success: baseColors.states.success,
    warning: baseColors.states.warning,
    danger: baseColors.states.danger
  }
} as const;

export type SemanticColors = typeof semanticColors;
