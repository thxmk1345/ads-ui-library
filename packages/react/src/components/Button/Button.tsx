import clsx from "clsx";
import { tokens } from "@company/tokens";
import { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";

const variantTokens = {
  primary: {
    bg: tokens.colors.button.primaryBg,
    bgHover: tokens.colors.button.primaryBgHover,
    text: tokens.colors.button.primaryText,
    textHover: tokens.colors.button.primaryText,
    border: "transparent"
  },
  secondary: {
    bg: tokens.colors.button.secondaryBg,
    bgHover: tokens.colors.button.secondaryBgHover,
    text: tokens.colors.button.secondaryText,
    textHover: tokens.colors.button.secondaryText,
    border: tokens.colors.border.subtle
  },
  ghost: {
    bg: "transparent",
    bgHover: tokens.colors.button.ghostBgHover,
    text: tokens.colors.button.ghostText,
    textHover: tokens.colors.button.ghostText,
    border: "transparent"
  }
} as const;

const sizeTokens = {
  sm: {
    px: tokens.spacing.sm,
    py: tokens.spacing.xs,
    fontSize: tokens.typography.size.sm
  },
  md: {
    px: tokens.spacing.md,
    py: tokens.spacing.sm,
    fontSize: tokens.typography.size.md
  },
  lg: {
    px: tokens.spacing.lg,
    py: tokens.spacing.md,
    fontSize: tokens.typography.size.lg
  }
} as const;

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  children,
  ...rest
}: ButtonProps) {
  const variantConfig = variantTokens[variant];
  const sizeConfig = sizeTokens[size];

  const isDisabled = disabled || loading;

  return (
    <button
      className={clsx(
        styles.button,
        variant === "ghost" && styles.ghost,
        fullWidth && styles.fullWidth,
        loading && styles.loading,
        isDisabled && styles.disabled,
        className
      )}
      style={{
        // Visual tokens mapped into CSS vars for theming flexibility
        ["--button-bg" as string]: variantConfig.bg,
        ["--button-bg-hover" as string]: variantConfig.bgHover,
        ["--button-text" as string]: variantConfig.text,
        ["--button-text-hover" as string]: variantConfig.textHover,
        ["--button-border" as string]: variantConfig.border,
        ["--button-radius" as string]: tokens.radius.md,
        ["--button-padding-x" as string]: sizeConfig.px,
        ["--button-padding-y" as string]: sizeConfig.py,
        ["--button-font-size" as string]: sizeConfig.fontSize,
        ["--button-focus-ring" as string]: tokens.colors.button.focusRing
      }}
      disabled={isDisabled}
      {...rest}
    >
      {loading && <span className={styles.spinner} aria-hidden />}
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
