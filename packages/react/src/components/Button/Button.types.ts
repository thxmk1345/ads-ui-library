import { ButtonHTMLAttributes, ReactNode } from "react";
import { tokens } from "@azenzus/tokens";

const applied = tokens.theme.applied;

/**
 * Variant is derived directly from token keys
 * Example:
 * primary | neutral | success | error | warning
 */
export type ButtonVariant = keyof typeof applied.button;

/**
 * Tone is derived from the variant structure
 * Example:
 * solid | soft | outline | ghost
 */
export type ButtonTone = keyof (typeof applied.button)[keyof typeof applied.button];

/**
 * Status controls interactive state
 */
export type ButtonStatus = "default" | "disabled";

/**
 * Button sizing
 */
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  tone?: ButtonTone;
  status?: ButtonStatus;
  size?: ButtonSize;

  fullWidth?: boolean;
  loading?: boolean;

  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
