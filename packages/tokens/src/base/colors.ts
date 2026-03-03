import { coreColors } from "../core/colors";

export const baseColors = {
  background: {
    surface: coreColors.neutral[0],
    subtle: coreColors.neutral[50],
    muted: coreColors.neutral[100],
    elevated: coreColors.neutral[0]
  },
  text: {
    primary: coreColors.neutral[900],
    secondary: coreColors.neutral[700],
    muted: coreColors.neutral[500],
    onPrimary: coreColors.neutral[0],
    onInverted: coreColors.neutral[0]
  },
  borders: {
    default: coreColors.neutral[200],
    strong: coreColors.neutral[300],
    focus: coreColors.brand.primary
  },
  brand: {
    primary: coreColors.brand.primary,
    primaryStrong: coreColors.brand.primaryDark,
    primarySubtle: coreColors.brand.primaryLight,
    accent: coreColors.brand.accent
  },
  states: {
    success: coreColors.feedback.success,
    successStrong: coreColors.feedback.successDark,
    warning: coreColors.feedback.warning,
    warningStrong: coreColors.feedback.warningDark,
    danger: coreColors.feedback.danger,
    dangerStrong: coreColors.feedback.dangerDark
  },
  overlay: {
    scrim: "rgba(15, 22, 36, 0.5)"
  }
} as const;

export type BaseColors = typeof baseColors;
