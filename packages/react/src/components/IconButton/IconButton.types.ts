import { ButtonHTMLAttributes, ReactNode } from "react";
import { tokens } from "@azenzus/tokens";

const applied = tokens.theme.applied;

export type IconButtonVariant = keyof typeof applied.button;

export type IconButtonTone = keyof (typeof applied.button)[keyof typeof applied.button];

export type IconButtonStatus = "default" | "disabled";

export type IconButtonSize = "sm" | "md" | "lg";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;
  tone?: IconButtonTone;
  status?: IconButtonStatus;
  size?: IconButtonSize;

  loading?: boolean;

  icon: ReactNode;
}
