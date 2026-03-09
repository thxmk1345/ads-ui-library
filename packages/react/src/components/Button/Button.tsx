import clsx from "clsx";
import { tokens } from "@azenzus/tokens";
import { ButtonProps, ButtonVariant, ButtonTone } from "./Button.types";

import { addColors } from "../../utilities/colorAdd";

import styles from "./Button.module.css";

const applied = tokens.theme.applied;

const sizeTokens = {
  sm: {
    gap: tokens.spacing[2],
    px: tokens.spacing[2],
    height: tokens.spacing[5],
    radius: tokens.radius[1],
    label: tokens.typography.s1.medium,
    iconSize: 14,
  },

  md: {
    gap: tokens.spacing[2],
    px: tokens.spacing[3],
    height: tokens.spacing[6],
    radius: tokens.radius[2],
    label: tokens.typography.s2.medium,
    iconSize: 16,
  },

  lg: {
    gap: tokens.spacing[2],
    px: tokens.spacing[4],
    height: tokens.spacing[7],
    radius: tokens.radius[3],
    label: tokens.typography.s3.medium,
    iconSize: 18,
  },
} as const;

function resolveButtonTokens(variant: ButtonVariant, tone: ButtonTone) {
  const config: any = applied.button[variant][tone];

  const bg = config.background?.default ?? "transparent";
  const bgHover = addColors(bg, config.background?.hover ?? "transparent");
  const bgActive = config.background?.active ?? "transparent";
  const bgDisabled = config.background?.disabled ?? bg;

  const label = config.label.default;
  const labelHover = config.label.hover;
  const labelActive = config.label.active;
  const labelDisabled = config.label.disabled ?? label;

  const border = tone === "outline" ? (config.border?.default ?? "transparent") : "transparent";

  const borderDisabled = tone === "outline" ? (config.border?.disabled ?? border) : "transparent";

  return {
    bg,
    bgHover,
    bgActive,
    bgDisabled,
    label,
    labelHover,
    labelActive,
    labelDisabled,
    border,
    borderDisabled,
    focus: config.focus?.default ?? "transparent",
  };
}

export function Button({
  variant = "primary",
  tone = "solid",
  status = "default",
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
  const v = resolveButtonTokens(variant, tone);
  const s = sizeTokens[size];

  const isDisabled = disabled || loading || status === "disabled";

  return (
    <button
      className={clsx(
        styles.button,
        fullWidth && styles.fullWidth,
        loading && styles.loading,
        isDisabled && styles.disabled,
        className
      )}
      style={{
        ["--bg" as string]: v.bg,
        ["--bg-hover" as string]: v.bgHover,
        ["--bg-active" as string]: v.bgActive,
        ["--bg-disabled" as string]: v.bgDisabled,

        ["--label" as string]: v.label,
        ["--label-hover" as string]: v.labelHover,
        ["--label-active" as string]: v.labelActive,
        ["--label-disabled" as string]: v.labelDisabled,

        ["--border" as string]: v.border,
        ["--border-disabled" as string]: v.borderDisabled,

        ["--focus" as string]: v.focus,

        ["--label-font-size" as string]: `${s.label.fontSize}px`,
        ["--label-font-family" as string]: `${s.label.fontFamily}`,
        ["--label-letter-spacing" as string]: `${s.label.letterSpacing}`,
        ["--label-line-height" as string]: `${s.label.lineHeight}px`,
        ["--label-font-weight" as string]: `${s.label.fontWeight}`,

        ["--radius" as string]: `${s.radius}px`,
        ["--h" as string]: `${s.height}px`,
        ["--px" as string]: `${s.px}px`,
        ["--icon" as string]: `${s.iconSize}px`,
        ["--gap" as string]: `${s.gap}px`,
      }}
      disabled={isDisabled}
      {...rest}
    >
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      {children}
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </button>
  );
}

export type { ButtonProps } from "./Button.types";
