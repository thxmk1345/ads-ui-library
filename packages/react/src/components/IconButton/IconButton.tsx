import clsx from "clsx";
import { tokens } from "@azenzus/tokens";
import { IconButtonProps, IconButtonVariant, IconButtonTone } from "./IconButton.types";

import { addColors } from "../../utilities/colorAdd";

import styles from "./IconButton.module.css";

const applied = tokens.theme.applied;

const sizeTokens = {
  sm: {
    height: tokens.spacing[5],
    radius: tokens.radius[1],
    iconSize: 14,
  },

  md: {
    height: tokens.spacing[6],
    radius: tokens.radius[2],
    iconSize: 16,
  },

  lg: {
    height: tokens.spacing[7],
    radius: tokens.radius[3],
    iconSize: 18,
  },
} as const;

function resolveButtonTokens(variant: IconButtonVariant, tone: IconButtonTone) {
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

export function IconButton({
  variant = "primary",
  tone = "solid",
  status = "default",
  size = "md",
  loading = false,
  icon,
  className,
  disabled,
  ...rest
}: IconButtonProps) {
  const v = resolveButtonTokens(variant, tone);
  const s = sizeTokens[size];

  const isDisabled = disabled || loading || status === "disabled";

  return (
    <button
      className={clsx(
        styles.button,
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

        ["--radius" as string]: `${s.radius}px`,
        ["--h" as string]: `${s.height}px`,
        ["--icon" as string]: `${s.iconSize}px`,
      }}
      disabled={isDisabled}
      {...rest}
    >
      <span className={styles.icon}>{icon}</span>
    </button>
  );
}

export type { IconButtonProps } from "./IconButton.types";
