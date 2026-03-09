import { base } from "../base/base";
import { core } from "../core/core";

export const applied = {
  button: {
    primary: {
      solid: {
        background: {
          default: base.brand.primary.default,
          hover: base.brand.primary.alphaStrong,
          active: base.brand.primary.strong,
          disabled: core.scale.neutral.alpha[3],
        },
        label: {
          default: core.white,
          hover: core.white,
          active: core.white,
          disabled: base.text.disabled,
        },
        focus: {
          default: core.scale.azenzus.alpha[6],
        },
      },
      soft: {
        background: {
          default: base.brand.primary.subtle,
          hover: base.brand.primary.alpha,
          active: base.brand.primary.alphaStrong,
          disabled: core.scale.neutral.alpha[3],
        },
        label: {
          default: base.brand.primary.text,
          hover: base.brand.primary.text,
          active: base.brand.primary.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: core.scale.azenzus.alpha[6],
        },
      },
      outline: {
        border: {
          default: base.brand.primary.alphaStrong,
          hover: base.brand.primary.alphaStrong,
          active: base.brand.primary.alphaStrong,
          disabled: base.border.disabled,
        },
        background: {
          default: "transparent",
          hover: base.brand.primary.alpha,
          active: base.brand.primary.alphaStrong,
        },
        label: {
          default: base.brand.primary.text,
          hover: base.brand.primary.text,
          active: base.brand.primary.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: core.scale.azenzus.alpha[6],
        },
      },
      ghost: {
        background: {
          default: "transparent",
          hover: base.brand.primary.alpha,
          active: base.brand.primary.alphaStrong,
        },
        label: {
          default: base.brand.primary.text,
          hover: base.brand.primary.text,
          active: base.brand.primary.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: core.scale.azenzus.alpha[6],
        },
      },
    },
    neutral: {
      solid: {
        background: {
          default: base.brand.neutral.default,
          hover: base.brand.neutral.alphaStrong,
          active: base.brand.neutral.strong,
          disabled: core.scale.neutral.alpha[3],
        },
        label: {
          default: core.white,
          hover: core.white,
          active: core.white,
          disabled: base.text.disabled,
        },
        focus: {
          default: core.scale.neutral.alpha[6],
        },
      },
      soft: {
        background: {
          default: base.brand.neutral.subtle,
          hover: base.brand.neutral.alpha,
          active: base.brand.neutral.alphaStrong,
          disabled: core.scale.neutral.alpha[3],
        },
        label: {
          default: base.brand.neutral.text,
          hover: base.brand.neutral.text,
          active: base.brand.neutral.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: core.scale.neutral.alpha[6],
        },
      },
      outline: {
        border: {
          default: base.brand.neutral.alphaStrong,
          hover: base.brand.neutral.alphaStrong,
          active: base.brand.neutral.alphaStrong,
          disabled: base.border.disabled,
        },
        background: {
          default: "transparent",
          hover: base.brand.neutral.alpha,
          active: base.brand.neutral.alphaStrong,
        },
        label: {
          default: base.brand.neutral.text,
          hover: base.brand.neutral.text,
          active: base.brand.neutral.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: core.scale.neutral.alpha[6],
        },
      },
      ghost: {
        background: {
          default: "transparent",
          hover: base.brand.neutral.alpha,
          active: base.brand.neutral.alphaStrong,
        },
        label: {
          default: base.brand.neutral.text,
          hover: base.brand.neutral.text,
          active: base.brand.neutral.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: core.scale.neutral.alpha[6],
        },
      },
    },
    error: {
      solid: {
        background: {
          default: base.brand.error.default,
          hover: base.brand.error.alphaStrong,
          active: base.brand.error.strong,
          disabled: core.scale.neutral.alpha[3],
        },
        label: {
          default: core.white,
          hover: core.white,
          active: core.white,
          disabled: base.text.disabled,
        },
        focus: {
          default: core.scale.error.alpha[6],
        },
      },
      soft: {
        background: {
          default: base.brand.error.subtle,
          hover: base.brand.error.alpha,
          active: base.brand.error.alphaStrong,
          disabled: core.scale.neutral.alpha[3],
        },
        label: {
          default: base.brand.error.text,
          hover: base.brand.error.text,
          active: base.brand.error.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: core.scale.error.alpha[6],
        },
      },
      outline: {
        border: {
          default: base.brand.error.alphaStrong,
          hover: base.brand.error.alphaStrong,
          active: base.brand.error.alphaStrong,
          disabled: base.border.disabled,
        },
        background: {
          default: "transparent",
          hover: base.brand.error.alpha,
          active: base.brand.error.alphaStrong,
        },
        label: {
          default: base.brand.error.text,
          hover: base.brand.error.text,
          active: base.brand.error.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: core.scale.error.alpha[6],
        },
      },
      ghost: {
        background: {
          default: "transparent",
          hover: base.brand.error.alpha,
          active: base.brand.error.alphaStrong,
        },
        label: {
          default: base.brand.error.text,
          hover: base.brand.error.text,
          active: base.brand.error.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: core.scale.error.alpha[6],
        },
      },
    },
    success: {
      solid: {
        background: {
          default: base.brand.success.default,
          hover: base.brand.success.alphaStrong,
          active: base.brand.success.strong,
          disabled: core.scale.neutral.alpha[3],
        },
        label: {
          default: core.white,
          hover: core.white,
          active: core.white,
          disabled: base.text.disabled,
        },
        focus: {
          default: core.scale.success.alpha[6],
        },
      },
      soft: {
        background: {
          default: base.brand.success.subtle,
          hover: base.brand.success.alpha,
          active: base.brand.success.alphaStrong,
          disabled: core.scale.neutral.alpha[3],
        },
        label: {
          default: base.brand.success.text,
          hover: base.brand.success.text,
          active: base.brand.success.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: core.scale.success.alpha[6],
        },
      },
      outline: {
        border: {
          default: base.brand.success.alphaStrong,
          hover: base.brand.success.alphaStrong,
          active: base.brand.success.alphaStrong,
          disabled: base.border.disabled,
        },
        background: {
          default: "transparent",
          hover: base.brand.success.alpha,
          active: base.brand.success.alphaStrong,
        },
        label: {
          default: base.brand.success.text,
          hover: base.brand.success.text,
          active: base.brand.success.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: core.scale.success.alpha[6],
        },
      },
      ghost: {
        background: {
          default: "transparent",
          hover: base.brand.success.alpha,
          active: base.brand.success.alphaStrong,
        },
        label: {
          default: base.brand.success.text,
          hover: base.brand.success.text,
          active: base.brand.success.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: core.scale.success.alpha[6],
        },
      },
    },
    warning: {
      solid: {
        background: {
          default: base.brand.warning.default,
          hover: base.brand.warning.alphaStrong,
          active: base.brand.warning.strong,
          disabled: core.scale.neutral.alpha[3],
        },
        label: {
          default: core.white,
          hover: core.white,
          active: core.white,
          disabled: base.text.disabled,
        },
        focus: {
          default: core.scale.warning.alpha[6],
        },
      },
      soft: {
        background: {
          default: base.brand.warning.subtle,
          hover: base.brand.warning.alpha,
          active: base.brand.warning.alphaStrong,
          disabled: core.scale.neutral.alpha[3],
        },
        label: {
          default: base.brand.warning.text,
          hover: base.brand.warning.text,
          active: base.brand.warning.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: core.scale.warning.alpha[6],
        },
      },
      outline: {
        border: {
          default: base.brand.warning.alphaStrong,
          hover: base.brand.warning.alphaStrong,
          active: base.brand.warning.alphaStrong,
          disabled: base.border.disabled,
        },
        background: {
          default: "transparent",
          hover: base.brand.warning.alpha,
          active: base.brand.warning.alphaStrong,
        },
        label: {
          default: base.brand.warning.text,
          hover: base.brand.warning.text,
          active: base.brand.warning.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: core.scale.warning.alpha[6],
        },
      },
      ghost: {
        background: {
          default: "transparent",
          hover: base.brand.warning.alpha,
          active: base.brand.warning.alphaStrong,
        },
        label: {
          default: base.brand.warning.text,
          hover: base.brand.warning.text,
          active: base.brand.warning.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: core.scale.warning.alpha[6],
        },
      },
    },
  },
  /*
  iconButton: {
    primary: {
      solid: {
        background: {
          default: base.brand.primary.default,
          hover: base.brand.primary.alphaStrong,
          active: base.brand.primary.strong,
          disabled: core.scale.neutral.alpha[3],
        },
        icon: {
          default: core.white,
          hover: core.white,
          active: core.white,
          disabled: base.text.disabled,
        },
        focus: {
          default: base.brand.primary.alphaStrong,
        },
      },
      soft: {
        background: {
          default: base.brand.primary.subtle,
          hover: base.brand.primary.alpha,
          active: base.brand.primary.alphaStrong,
          disabled: core.scale.neutral.alpha[3],
        },
        icon: {
          default: base.brand.primary.text,
          hover: base.brand.primary.text,
          active: base.brand.primary.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: base.brand.primary.alphaStrong,
        },
      },
      outline: {
        border: {
          default: base.brand.primary.alphaStrong,
          hover: base.brand.primary.alphaStrong,
          active: base.brand.primary.alphaStrong,
          disabled: base.border.disabled,
        },
        background: {
          default: "transparent",
          hover: base.brand.primary.alpha,
          active: base.brand.primary.alphaStrong,
        },
        icon: {
          default: base.brand.primary.text,
          hover: base.brand.primary.text,
          active: base.brand.primary.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: base.brand.primary.alphaStrong,
        },
      },
      ghost: {
        background: {
          default: "transparent",
          hover: base.brand.primary.alpha,
          active: base.brand.primary.alphaStrong,
        },
        icon: {
          default: base.brand.primary.text,
          hover: base.brand.primary.text,
          active: base.brand.primary.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: base.brand.primary.alphaStrong,
        },
      },
    },
    neutral: {
      solid: {
        background: {
          default: base.brand.neutral.default,
          hover: base.brand.neutral.alphaStrong,
          active: base.brand.neutral.strong,
          disabled: core.scale.neutral.alpha[3],
        },
        icon: {
          default: core.white,
          hover: core.white,
          active: core.white,
          disabled: base.text.disabled,
        },
        focus: {
          default: base.brand.neutral.alphaStrong,
        },
      },
      soft: {
        background: {
          default: base.brand.neutral.subtle,
          hover: base.brand.neutral.alpha,
          active: base.brand.neutral.alphaStrong,
          disabled: core.scale.neutral.alpha[3],
        },
        icon: {
          default: base.brand.neutral.text,
          hover: base.brand.neutral.text,
          active: base.brand.neutral.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: base.brand.neutral.alphaStrong,
        },
      },
      outline: {
        border: {
          default: base.brand.neutral.alphaStrong,
          hover: base.brand.neutral.alphaStrong,
          active: base.brand.neutral.alphaStrong,
          disable: base.border.disabled,
        },
        background: {
          default: "transparent",
          hover: base.brand.neutral.alpha,
          active: base.brand.neutral.alphaStrong,
        },
        icon: {
          default: base.brand.neutral.text,
          hover: base.brand.neutral.text,
          active: base.brand.neutral.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: base.brand.neutral.alphaStrong,
        },
      },
      ghost: {
        background: {
          default: "transparent",
          hover: base.brand.neutral.alpha,
          active: base.brand.neutral.alphaStrong,
        },
        icon: {
          default: base.brand.neutral.text,
          hover: base.brand.neutral.text,
          active: base.brand.neutral.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: base.brand.neutral.alphaStrong,
        },
      },
    },
    error: {
      solid: {
        background: {
          default: base.brand.error.default,
          hover: base.brand.error.alphaStrong,
          active: base.brand.error.strong,
          disabled: core.scale.neutral.alpha[3],
        },
        icon: {
          default: core.white,
          hover: core.white,
          active: core.white,
          disabled: base.text.disabled,
        },
        focus: {
          default: base.brand.error.alphaStrong,
        },
      },
      soft: {
        background: {
          default: base.brand.error.subtle,
          hover: base.brand.error.alpha,
          active: base.brand.error.alphaStrong,
          disabled: core.scale.neutral.alpha[3],
        },
        icon: {
          default: base.brand.error.text,
          hover: base.brand.error.text,
          active: base.brand.error.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: base.brand.error.alphaStrong,
        },
      },
      outline: {
        border: {
          default: base.brand.error.alphaStrong,
          hover: base.brand.error.alphaStrong,
          active: base.brand.error.alphaStrong,
          disable: base.border.disabled,
        },
        background: {
          default: "transparent",
          hover: base.brand.error.alpha,
          active: base.brand.error.alphaStrong,
        },
        icon: {
          default: base.brand.error.text,
          hover: base.brand.error.text,
          active: base.brand.error.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: base.brand.error.alphaStrong,
        },
      },
      ghost: {
        background: {
          default: "transparent",
          hover: base.brand.error.alpha,
          active: base.brand.error.alphaStrong,
        },
        icon: {
          default: base.brand.error.text,
          hover: base.brand.error.text,
          active: base.brand.error.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: base.brand.error.alphaStrong,
        },
      },
    },
    success: {
      solid: {
        background: {
          default: base.brand.success.default,
          hover: base.brand.success.alphaStrong,
          active: base.brand.success.strong,
          disabled: core.scale.neutral.alpha[3],
        },
        icon: {
          default: core.white,
          hover: core.white,
          active: core.white,
          disabled: base.text.disabled,
        },
        focus: {
          default: base.brand.success.alphaStrong,
        },
      },
      soft: {
        background: {
          default: base.brand.success.subtle,
          hover: base.brand.success.alpha,
          active: base.brand.success.alphaStrong,
          disabled: core.scale.neutral.alpha[3],
        },
        icon: {
          default: base.brand.success.text,
          hover: base.brand.success.text,
          active: base.brand.success.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: base.brand.success.alphaStrong,
        },
      },
      outline: {
        border: {
          default: base.brand.success.alphaStrong,
          hover: base.brand.success.alphaStrong,
          active: base.brand.success.alphaStrong,
          disable: base.border.disabled,
        },
        background: {
          default: "transparent",
          hover: base.brand.success.alpha,
          active: base.brand.success.alphaStrong,
        },
        icon: {
          default: base.brand.success.text,
          hover: base.brand.success.text,
          active: base.brand.success.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: base.brand.success.alphaStrong,
        },
      },
      ghost: {
        background: {
          hover: base.brand.success.alpha,
          active: base.brand.success.alphaStrong,
        },
        icon: {
          default: base.brand.success.text,
          hover: base.brand.success.text,
          active: base.brand.success.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: base.brand.success.alphaStrong,
        },
      },
    },
    warning: {
      solid: {
        background: {
          default: base.brand.warning.default,
          hover: base.brand.warning.alphaStrong,
          active: base.brand.warning.strong,
          disabled: core.scale.neutral.alpha[3],
        },
        icon: {
          default: core.white,
          hover: core.white,
          active: core.white,
          disabled: base.text.disabled,
        },
        focus: {
          default: base.brand.warning.alphaStrong,
        },
      },
      soft: {
        background: {
          default: base.brand.warning.subtle,
          hover: base.brand.warning.alpha,
          active: base.brand.warning.alphaStrong,
          disabled: core.scale.neutral.alpha[3],
        },
        icon: {
          default: base.brand.warning.text,
          hover: base.brand.warning.text,
          active: base.brand.warning.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: base.brand.warning.alphaStrong,
        },
      },
      outline: {
        border: {
          default: base.brand.warning.alphaStrong,
          hover: base.brand.warning.alphaStrong,
          active: base.brand.warning.alphaStrong,
          disable: base.border.disabled,
        },
        background: {
          hover: base.brand.warning.alpha,
          active: base.brand.warning.alphaStrong,
        },
        icon: {
          default: base.brand.warning.text,
          hover: base.brand.warning.text,
          active: base.brand.warning.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: base.brand.warning.alphaStrong,
        },
      },
      ghost: {
        background: {
          hover: base.brand.warning.alpha,
          active: base.brand.warning.alphaStrong,
        },
        icon: {
          default: base.brand.warning.text,
          hover: base.brand.warning.text,
          active: base.brand.warning.text,
          disabled: base.text.disabled,
        },
        focus: {
          default: base.brand.warning.alphaStrong,
        },
      },
    },
  },
  radio: {
    background: {
      default: base.surface.panel,
      disabled: base.surface.disabled,
      disabledChecked: base.surface.disabled,
      checked: {
        default: base.brand.primary.default,
      },
    },
    border: {
      default: base.border.default,
    },
    label: {
      default: base.text.primary,
      disabled: base.text.disabled,
      disabledChecked: base.text.disabled,
      checked: {
        default: base.text.primary,
      },
    },
    icon: {
      default: base.surface.panel,
      disabledChecked: base.brand.neutral.alpha,
    },
    focus: {
      default: base.brand.primary.alphaStrong,
    },
  },
  switch: {
    track: {
      background: {
        default: base.brand.neutral.subtle,
        disabled: base.surface.disabled,
        disabledChecked: base.surface.disabled,
        checked: {
          default: base.brand.primary.default,
        },
      },
    },
    border: {
      default: base.border.default,
      disabled: base.border.disabled,
      disabledChecked: base.border.disabled,
      checked: {
        default: base.border.default,
      },
    },
    thumb: {
      background: {
        default: base.surface.panel,
        disabled: base.surface.disabled,
        disabledChecked: base.surface.disabled,
        checked: {
          default: base.surface.panel,
        },
      },
      border: {
        default: base.border.default,
        disabled: base.border.disabled,
        disabledChecked: base.border.disabled,
        checked: {
          default: base.border.default,
        },
      },
    },
    label: {
      default: base.text.primary,
      disabled: base.text.disabled,
      disabledChecked: base.text.disabled,
      checked: {
        default: base.text.primary,
      },
    },
    focus: {
      default: base.brand.primary.alphaStrong,
    },
  },
  radioCardButton: {
    background: {
      default: base.surface.panel,
      disabled: base.surface.disabled,
      disabledChecked: base.surface.disabled,
      checked: {
        default: base.surface.panel,
      },
    },
    label: {
      default: base.text.secondary,
      disabled: base.text.disabled,
      disabledChecked: base.text.disabled,
      checked: {
        default: base.brand.primary.default,
      },
    },
    border: {
      default: base.border.default,
      disabled: base.border.disabled,
      disabledChecked: base.border.disabled,
      checked: {
        default: base.brand.primary.default,
      },
    },
  },
  checkbox: {
    background: {
      disabledChecked: base.surface.disabled,
      disabledIndeterminate: base.surface.disabled,
      checked: {
        default: base.brand.primary.default,
      },
      indeterminate: {
        default: base.surface.panel,
      },
    },
    border: {
      default: base.border.default,
      disabled: base.border.disabled,
      disabledChecked: base.border.disabled,
      disabledIndeterminate: base.border.disabled,
      indeterminate: {
        default: base.brand.primary.alphaStrong,
      },
    },
    text: {
      default: base.text.primary,
      disabled: base.text.disabled,
      disabledChecked: base.text.disabled,
      disabledIndeterminate: base.text.disabled,
      checked: {
        default: base.text.primary,
      },
      indeterminate: {
        default: base.text.primary,
      },
    },
    icon: {
      disabledChecked: base.text.disabled,
      disabledIndeterminate: base.text.disabled,
      checked: {
        default: base.text.onSolid,
      },
      indeterminate: {
        default: base.brand.primary.default,
      },
    },
    focus: {
      default: base.brand.primary.alphaStrong,
    },
  },
  inputField: {
    focus: {
      default: core.scale.azenzus.alpha[6],
      error: {
        default: core.scale.azenzus.alpha[6],
      },
    },
    background: {
      default: base.surface.panel,
      active: base.surface.panel,
      placeholder: base.surface.panel,
      disabled: base.surface.disabled,
    },
    text: {
      default: base.text.primary,
      active: base.text.primary,
      placeholder: base.brand.neutral.alphaStrong,
      disabled: base.text.disabled,
      error: {
        default: base.text.primary,
        active: base.text.primary,
        placeholder: base.brand.neutral.alphaStrong,
      },
      readOnly: {
        default: base.text.primary,
      },
    },
    icon: {
      default: base.text.primary,
      active: base.text.primary,
      placeholder: base.text.secondary,
      disabled: base.text.disabled,
      error: {
        default: base.text.primary,
        active: base.text.primary,
        placeholder: base.text.secondary,
      },
      readOnly: {
        default: base.text.primary,
      },
    },
    border: {
      default: base.border.default,
      active: base.brand.primary.alphaStrong,
      placeholder: base.border.default,
      disabled: base.border.disabled,
      error: {
        default: base.brand.error.alphaStrong,
        active: base.brand.primary.alphaStrong,
        placeholder: base.brand.error.alphaStrong,
      },
      readOnly: {
        default: base.border.default,
      },
    },
    label: {
      default: base.text.primary,
      active: base.text.primary,
      placeholder: base.text.primary,
      disabled: base.text.primary,
      error: {
        default: base.text.primary,
        active: base.text.primary,
        placeholder: base.text.primary,
      },
      readOnly: {
        default: base.text.primary,
      },
    },
    error: {
      default: base.surface.panel,
      active: base.surface.panel,
      placeholder: base.surface.panel,
    },
    readOnly: {
      default: base.brand.neutral.subtle,
    },
    hint: {
      default: base.text.secondary,
      active: base.text.secondary,
      placeholder: base.text.secondary,
      disabled: base.text.secondary,
      error: {
        default: base.text.secondary,
        active: base.text.secondary,
        placeholder: base.text.secondary,
      },
      readOnly: {
        default: base.text.secondary,
      },
    },
  },
  textAreaField: {
    background: {
      default: base.surface.panel,
      active: base.surface.panel,
      disabled: base.surface.disabled,
      error: {
        default: base.surface.panel,
        active: base.surface.panel,
      },
      readOnly: {
        default: base.brand.neutral.subtle,
      },
    },
    text: {
      default: base.text.primary,
      active: base.text.primary,
      placeholder: base.brand.neutral.alphaStrong,
      disabled: base.text.disabled,
      error: {
        default: base.text.primary,
        active: base.text.primary,
        placeholder: base.brand.neutral.alphaStrong,
      },
      readOnly: {
        default: base.text.primary,
      },
    },
    handle: {
      default: base.text.secondary,
      active: base.text.secondary,
      disabled: base.text.disabled,
      error: {
        default: base.text.secondary,
        active: base.text.secondary,
      },
      readOnly: {
        default: base.text.secondary,
      },
    },
    border: {
      default: base.border.default,
      active: base.brand.primary.alphaStrong,
      disabled: base.border.disabled,
      error: {
        default: base.brand.error.alphaStrong,
        active: base.brand.primary.alphaStrong,
      },
      readOnly: {
        default: base.border.default,
      },
    },
    label: {
      default: base.text.primary,
      active: base.text.primary,
      disabled: base.text.primary,
      error: {
        default: base.text.primary,
        active: base.text.primary,
      },
      readOnly: {
        default: base.text.primary,
      },
    },
    hint: {
      default: base.text.secondary,
      active: base.text.secondary,
      placeholder: base.text.secondary,
      disabled: base.text.secondary,
      error: {
        default: base.text.secondary,
        active: base.text.secondary,
        placeholder: base.text.secondary,
      },
      readOnly: {
        default: base.text.secondary,
      },
    },
  },
  selectField: {
    background: {
      default: base.surface.panel,
      disabled: base.surface.disabled,
      readOnly: {
        default: base.brand.neutral.subtle,
      },
    },
    text: {
      default: base.text.primary,
      placeholder: base.text.secondary,
      disabled: base.text.disabled,
      error: {
        default: base.text.primary,
      },
      readOnly: {
        default: base.text.primary,
      },
    },
    border: {
      default: base.border.default,
      disabled: base.border.disabled,
      active: base.brand.primary.alphaStrong,
      error: {
        default: base.brand.error.alphaStrong,
        active: base.brand.primary.alphaStrong,
      },
      readOnly: {
        default: base.border.default,
      },
    },
    label: {
      default: base.text.primary,
      disabled: base.text.primary,
      error: {
        default: base.text.primary,
      },
      readOnly: {
        default: base.text.primary,
      },
    },
    error: {
      default: base.surface.panel,
      placeholder: base.text.secondary,
    },
    icon: {
      default: base.text.primary,
      disabled: base.text.disabled,
      error: {
        default: base.text.primary,
      },
      readOnly: {
        default: base.text.disabled,
      },
    },
    focus: {
      default: core.scale.azenzus.alpha[6],
      error: {
        default: core.scale.azenzus.alpha[6],
      },
    },
  },
  selectFieldOptions: {
    primary: {
      text: {
        hover: base.brand.primary.text,
        active: base.brand.primary.text,
      },
      icon: {
        default: base.brand.primary.text,
        hover: base.brand.primary.text,
        active: base.brand.primary.text,
      },
      background: {
        hover: base.brand.primary.alpha,
        active: base.brand.primary.alpha,
        default: base.brand.primary.default,
      },
    },
    text: {
      disabled: base.text.disabled,
    },
    neutral: {
      text: {
        default: base.brand.neutral.text,
        hover: base.brand.neutral.text,
        active: base.brand.neutral.text,
      },
      icon: {
        default: base.brand.neutral.text,
        hover: base.brand.neutral.text,
        active: base.brand.neutral.text,
      },
      background: {
        hover: base.brand.neutral.alpha,
        active: base.brand.neutral.alpha,
      },
    },
    error: {
      text: {
        default: base.brand.error.text,
        hover: base.brand.error.text,
        active: base.brand.error.text,
      },
      icon: {
        default: base.brand.error.text,
        hover: base.brand.error.text,
        active: base.brand.error.text,
      },
      background: {
        hover: base.brand.error.alpha,
        active: base.brand.error.alpha,
      },
    },
    icon: {
      disabled: base.text.disabled,
    },
  },
  tag: {
    primary: {
      solid: {
        background: {
          default: base.brand.primary.default,
          hover: base.brand.primary.alphaStrong,
        },
        text: {
          default: core.white,
          hover: core.white,
        },
      },
      soft: {
        background: {
          default: base.brand.primary.subtle,
          hover: base.brand.primary.alpha,
        },
        text: {
          default: base.brand.primary.text,
          hover: base.brand.primary.text,
        },
      },
      outline: {
        border: {
          default: base.brand.primary.alphaStrong,
          hover: base.brand.primary.alphaStrong,
        },
        background: {
          hover: base.brand.primary.alpha,
        },
        text: {
          default: base.brand.primary.text,
          hover: base.brand.primary.text,
        },
      },
      ghost: {
        background: {
          hover: base.brand.primary.alpha,
        },
        text: {
          default: base.brand.primary.text,
          hover: base.brand.primary.text,
        },
      },
    },
    neutral: {
      solid: {
        background: {
          default: base.brand.neutral.default,
          hover: base.brand.neutral.alphaStrong,
        },
        text: {
          default: core.white,
          hover: core.white,
        },
      },
      soft: {
        background: {
          default: base.brand.neutral.subtle,
          hover: base.brand.neutral.alpha,
        },
        text: {
          default: base.brand.neutral.text,
          hover: base.brand.neutral.text,
        },
      },
      outline: {
        border: {
          default: base.brand.neutral.alphaStrong,
          hover: base.brand.neutral.alphaStrong,
        },
        background: {
          hover: base.brand.neutral.alpha,
        },
        text: {
          default: base.brand.neutral.text,
          hover: base.brand.neutral.text,
        },
      },
      ghost: {
        background: {
          hover: base.brand.neutral.alpha,
        },
        text: {
          default: base.brand.neutral.text,
          hover: base.brand.neutral.text,
        },
      },
    },
    error: {
      solid: {
        background: {
          default: base.brand.error.default,
          hover: base.brand.error.alphaStrong,
        },
        text: {
          default: core.white,
          hover: core.white,
        },
      },
      soft: {
        background: {
          default: base.brand.error.subtle,
          hover: base.brand.error.alpha,
        },
        text: {
          default: base.brand.error.text,
          hover: base.brand.error.text,
        },
      },
      outline: {
        border: {
          default: base.brand.error.alphaStrong,
          hover: base.brand.error.alphaStrong,
        },
        background: {
          hover: base.brand.error.alpha,
        },
        text: {
          default: base.brand.error.text,
          hover: base.brand.error.text,
        },
      },
      ghost: {
        background: {
          hover: base.brand.error.alpha,
        },
        text: {
          default: base.brand.error.text,
          hover: base.brand.error.text,
        },
      },
    },
    success: {
      solid: {
        background: {
          default: base.brand.success.default,
          hover: base.brand.success.alphaStrong,
        },
        text: {
          default: core.white,
          hover: core.white,
        },
      },
      soft: {
        background: {
          default: base.brand.success.subtle,
          hover: base.brand.success.alpha,
        },
        text: {
          default: base.brand.success.text,
          hover: base.brand.success.text,
        },
      },
      outline: {
        border: {
          default: base.brand.success.alphaStrong,
          hover: base.brand.success.alphaStrong,
        },
        background: {
          hover: base.brand.success.alpha,
        },
        text: {
          default: base.brand.success.text,
          hover: base.brand.success.text,
        },
      },
      ghost: {
        background: {
          hover: base.brand.success.alpha,
        },
        text: {
          default: base.brand.success.text,
          hover: base.brand.success.text,
        },
      },
    },
    warning: {
      solid: {
        background: {
          default: base.brand.warning.default,
          hover: base.brand.warning.alphaStrong,
        },
        text: {
          default: core.white,
          hover: core.white,
        },
      },
      soft: {
        background: {
          default: base.brand.warning.subtle,
          hover: base.brand.warning.alpha,
        },
        text: {
          default: base.brand.warning.text,
          hover: base.brand.warning.text,
        },
      },
      outline: {
        border: {
          default: base.brand.warning.alphaStrong,
          hover: base.brand.warning.alphaStrong,
        },
        background: {
          hover: base.brand.warning.alpha,
        },
        text: {
          default: base.brand.warning.text,
          hover: base.brand.warning.text,
        },
      },
      ghost: {
        background: {
          hover: base.brand.warning.alpha,
        },
        text: {
          default: base.brand.warning.text,
          hover: base.brand.warning.text,
        },
      },
    },
  },
  tooltip: {
    text: {
      default: base.text.onSolid,
    },
    background: {
      default: core.scale.neutral[12],
    },
  },
  toast: {
    success: {
      background: {
        default: base.surface.panel,
      },
      border: {
        default: base.brand.success.alphaStrong,
      },
      title: {
        text: {
          default: base.brand.success.default,
        },
      },
      body: {
        text: {
          dafault: base.text.primary,
        },
      },
      icon: {
        default: base.text.primary,
      },
      success: {
        leadIcon: {
          default: base.brand.success.default,
        },
      },
    },
    warning: {
      background: {
        default: base.surface.panel,
      },
      border: {
        default: base.brand.warning.alphaStrong,
      },
      title: {
        text: {
          default: base.brand.warning.default,
        },
      },
      body: {
        text: {
          dafault: base.text.primary,
        },
      },
      icon: {
        default: base.text.primary,
      },
      success: {
        leadIcon: {
          default: base.brand.warning.default,
        },
      },
    },
    error: {
      background: {
        default: base.surface.panel,
      },
      border: {
        default: base.brand.error.alphaStrong,
      },
      title: {
        text: {
          default: base.brand.error.default,
        },
      },
      body: {
        text: {
          dafault: base.text.primary,
        },
      },
      icon: {
        default: base.text.primary,
      },
      success: {
        leadIcon: {
          default: base.brand.error.default,
        },
      },
    },
    information: {
      background: {
        default: base.surface.panel,
      },
      border: {
        default: base.brand.primary.alphaStrong,
      },
      title: {
        text: {
          default: base.brand.primary.default,
        },
      },
      body: {
        text: {
          dafault: base.text.primary,
        },
      },
      icon: {
        default: base.text.primary,
      },
      success: {
        leadIcon: {
          default: base.brand.primary.default,
        },
      },
    },
  },
  callout: {
    primary: {
      background: {
        default: base.brand.primary.alpha,
      },
      text: {
        default: base.brand.primary.strong,
      },
      icon: {
        default: base.brand.primary.strong,
      },
    },
    neutral: {
      background: {
        default: base.brand.neutral.alpha,
      },
      text: {
        default: base.brand.neutral.strong,
      },
      icon: {
        default: base.brand.neutral.strong,
      },
    },
    error: {
      background: {
        default: base.brand.error.alpha,
      },
      text: {
        default: base.brand.error.strong,
      },
      icon: {
        default: base.brand.error.strong,
      },
    },
    success: {
      background: {
        default: base.brand.success.alpha,
      },
      text: {
        default: base.brand.success.strong,
      },
      icon: {
        default: base.brand.success.strong,
      },
    },
    warning: {
      background: {
        default: base.brand.warning.alpha,
      },
      text: {
        default: base.brand.warning.strong,
      },
      icon: {
        default: base.brand.warning.strong,
      },
    },
  },
  tableHeader: {
    background: {
      default: base.brand.neutral.subtle,
      hover: base.brand.neutral.alpha,
      active: base.brand.neutral.alphaStrong,
      disabled: base.surface.disabled,
    },
    text: {
      default: base.text.primary,
      hover: base.text.primary,
      active: base.text.primary,
      disabled: base.text.disabled,
    },
    icon: {
      default: base.text.primary,
      hover: base.text.primary,
      active: base.text.primary,
      disabled: base.text.disabled,
    },
    border: {
      default: base.border.default,
      hover: base.brand.neutral.alpha,
      active: base.brand.neutral.alphaStrong,
      disabled: base.border.disabled,
    },
  },
  tableRow: {
    text: {
      default: base.text.primary,
      error: base.brand.error.text,
    },
    icon: {
      default: base.brand.neutral.strong,
      hover: base.brand.neutral.text,
      error: base.brand.error.text,
    },
    background: {
      active: base.surface.light,
      error: base.brand.error.subtle,
    },
    border: {
      default: base.border.default,
    },
  },
  tableMessage: {
    title: {
      default: base.text.secondary,
    },
    description: {
      default: base.text.secondary,
    },
    icon: {
      default: base.text.secondary,
    },
  },
  tableContainer: {
    border: {
      default: base.border.default,
    },
    background: {
      default: base.surface.panel,
    },
  },
  tab: {
    primary: {
      text: {
        default: base.text.secondary,
        active: base.text.primary,
      },
      focus: {
        default: base.brand.primary.alphaStrong,
      },
      border: {
        default: base.border.default,
        active: base.brand.primary.default,
      },
    },
    text: {
      disabled: base.text.disabled,
    },
    border: {
      disabled: base.border.disabled,
    },
    neutral: {
      text: {
        default: base.text.secondary,
        active: base.text.primary,
      },
      focus: {
        default: base.brand.neutral.alphaStrong,
      },
      border: {
        default: base.border.default,
        active: base.brand.neutral.default,
      },
    },
  },
  sideTab: {
    primary: {
      background: {
        hover: base.brand.primary.alpha,
        active: base.brand.primary.alpha,
      },
      text: {
        default: base.brand.primary.text,
        hover: base.brand.primary.text,
        active: base.brand.primary.text,
      },
      icon: {
        default: base.brand.primary.text,
        hover: base.brand.primary.text,
        active: base.brand.primary.text,
      },
      focus: {
        default: base.brand.primary.alphaStrong,
      },
    },
    neutral: {
      icon: {
        default: base.brand.neutral.text,
        hover: base.brand.neutral.text,
        active: base.brand.neutral.text,
      },
      focus: {
        default: base.brand.neutral.alphaStrong,
      },
      background: {
        hover: base.brand.neutral.alpha,
        active: base.brand.neutral.alpha,
      },
      text: {
        default: base.brand.neutral.text,
        hover: base.brand.neutral.text,
        active: base.brand.neutral.text,
      },
    },
    icon: {
      disabled: base.text.disabled,
    },
    text: {
      disabled: base.text.disabled,
    },
  },
  conversation: {
    icon: {
      primary: base.brand.primary.default,
      success: base.brand.success.default,
      error: base.brand.error.default,
      default: base.text.secondary,
      hover: base.text.primary,
      active: base.text.secondary,
    },
    text: {
      default: base.text.primary,
      hover: base.text.primary,
      active: base.text.primary,
    },
    background: {
      hover: base.brand.neutral.alpha,
      active: base.brand.neutral.alpha,
    },
  },
  dialog: {
    border: {
      default: base.border.default,
    },
    title: {
      text: base.text.primary,
    },
    description: {
      text: base.text.secondary,
    },
    icon: {
      default: base.text.primary,
    },
    background: {
      default: base.surface.panel,
    },
  },
  radioCard: {
    checked: {
      background: {
        default: base.surface.panel,
        disabled: base.surface.disabled,
      },
      border: {
        default: base.border.default,
        focus: base.brand.primary.default,
        disabled: base.border.disabled,
      },
      focus: {
        default: base.brand.primary.alphaStrong,
      },
      title: {
        default: base.text.primary,
        disabled: base.text.disabled,
      },
      description: {
        default: base.text.primary,
        disabled: base.text.disabled,
      },
      sufaceBehind: {
        default: base.surface.panel,
        disabled: base.surface.panel,
      },
    },
    unchecked: {
      background: {
        default: base.surface.panel,
        disabled: base.surface.disabled,
      },
      border: {
        default: base.border.default,
        focus: base.border.default,
        disabled: base.border.disabled,
      },
      title: {
        default: base.text.primary,
        disabled: base.text.disabled,
      },
      description: {
        default: base.text.primary,
        disabled: base.text.disabled,
      },
      sufaceBehind: {
        default: base.surface.panel,
        disabled: base.surface.panel,
      },
      focus: {
        default: base.brand.primary.alphaStrong,
      },
    },
  },
  userProfile: {
    title: {
      default: base.text.primary,
      hover: base.text.primary,
    },
    description: {
      default: base.text.secondary,
      hover: base.text.secondary,
    },
    icon: {
      default: base.text.secondary,
      hover: base.text.secondary,
    },
    profilePicture: {
      background: {
        default: base.surface.panel,
        hover: base.surface.panel,
      },
    },
    userProfile: {
      border: {
        default: base.border.default,
        hover: base.border.default,
      },
    },
    background: {
      hover: base.brand.neutral.subtle,
    },
    focus: {
      default: base.brand.primary.alphaStrong,
    },
  },
  chatItem: {
    body: {
      default: base.text.primary,
      information: base.brand.primary.text,
    },
    username: {
      default: base.brand.primary.text,
      information: base.brand.primary.text,
    },
    background: {
      default: base.brand.neutral.subtle,
      information: base.brand.primary.subtle,
    },
  },
  checklistItem: {
    inspectionTypeItem: {
      background: {
        default: base.brand.primary.default,
      },
      text: {
        default: base.text.onSolid,
      },
      icon: {
        default: base.text.onSolid,
      },
    },
    groupItem: {
      background: {
        default: base.brand.primary.alpha,
      },
      border: {
        default: base.brand.primary.alphaStrong,
      },
      text: {
        default: base.brand.primary.text,
      },
      icon: {
        default: base.brand.primary.text,
      },
    },
    checkItem: {
      background: {
        default: base.brand.primary.subtle,
      },
      border: {
        default: base.brand.primary.alphaStrong,
      },
      text: {
        default: base.brand.primary.text,
      },
      icon: {
        default: base.brand.primary.text,
      },
    },
    statusItem: {
      background: {
        default: base.surface.panel,
      },
      observation: {
        background: {
          default: base.brand.neutral.subtle,
        },
        text: {
          default: base.brand.neutral.text,
        },
        border: {
          default: base.border.default,
        },
        icon: {
          default: base.brand.neutral.text,
        },
      },
      border: {
        default: base.border.default,
      },
      text: {
        default: base.brand.neutral.text,
      },
      icon: {
        default: base.brand.neutral.text,
      },
    },
  },
  uploadBar: {
    border: {
      default: base.brand.success.alphaStrong,
    },
    icon: {
      onSolid: base.text.onSolid,
    },
    background: {
      defualt: base.brand.success.default,
    },
  },
  reportStyleKeyValue: {
    text: {
      default: base.text.primary,
      hover: base.text.primary,
    },
    icon: {
      hover: base.text.primary,
    },
    border: {
      default: base.border.default,
      hover: base.border.default,
    },
  },
  stepper: {
    indicator: {
      border: {
        default: base.brand.neutral.alphaStrong,
      },
      icon: {
        default: base.brand.neutral.alphaStrong,
      },
      current: {
        background: {
          default: base.brand.primary.default,
        },
        border: {
          default: base.brand.neutral.alphaStrong,
        },
        icon: {
          default: core.white,
        },
      },
      finished: {
        background: {
          default: base.brand.primary.default,
        },
        border: {
          default: base.brand.neutral.alphaStrong,
        },
        icon: {
          default: core.white,
        },
      },
    },
    label: {
      default: base.text.primary,
      current: {
        default: base.text.primary,
      },
      finished: {
        default: base.text.primary,
      },
    },
    progressBar: {
      progressFill: {
        default: base.brand.primary.default,
      },
      current: {
        progressFill: {
          default: base.brand.primary.default,
        },
        background: {
          default: base.brand.neutral.alphaStrong,
        },
      },
      background: {
        default: base.brand.neutral.alphaStrong,
      },
      finished: {
        progressFill: {
          default: base.brand.primary.default,
        },
        background: {
          default: base.brand.neutral.alphaStrong,
        },
      },
    },
  },
  bagde: {
    primary: {
      solid: {
        background: {
          default: base.brand.primary.default,
        },
        text: {
          default: core.white,
        },
      },
      soft: {
        background: {
          default: base.brand.primary.subtle,
        },
        text: {
          default: base.brand.primary.text,
        },
      },
      outline: {
        border: {
          default: base.brand.primary.alphaStrong,
        },
        text: {
          default: base.brand.primary.text,
        },
      },
      ghost: {
        text: {
          default: base.brand.primary.text,
        },
      },
    },
    neutral: {
      solid: {
        background: {
          default: base.brand.neutral.default,
        },
        text: {
          default: core.white,
        },
      },
      soft: {
        background: {
          default: base.brand.neutral.subtle,
        },
        text: {
          default: base.brand.neutral.text,
        },
      },
      outline: {
        border: {
          default: base.brand.neutral.alphaStrong,
        },
        text: {
          default: base.brand.neutral.text,
        },
      },
      ghost: {
        text: {
          default: base.brand.neutral.text,
        },
      },
    },
    error: {
      solid: {
        background: {
          default: base.brand.error.default,
        },
        text: {
          default: core.white,
        },
      },
      soft: {
        background: {
          default: base.brand.error.subtle,
        },
        text: {
          default: base.brand.error.text,
        },
      },
      outline: {
        border: {
          default: base.brand.error.alphaStrong,
        },
        text: {
          default: base.brand.error.text,
        },
      },
      ghost: {
        text: {
          default: base.brand.error.text,
        },
      },
    },
    success: {
      solid: {
        background: {
          default: base.brand.success.default,
        },
        text: {
          default: core.white,
        },
      },
      soft: {
        background: {
          default: base.brand.success.subtle,
        },
        text: {
          default: base.brand.success.text,
        },
      },
      outline: {
        border: {
          default: base.brand.success.alphaStrong,
        },
        text: {
          default: base.brand.success.text,
        },
      },
      ghost: {
        text: {
          default: base.brand.success.text,
        },
      },
    },
    warning: {
      solid: {
        background: {
          default: base.brand.warning.default,
        },
        text: {
          default: core.white,
        },
      },
      soft: {
        background: {
          default: base.brand.warning.subtle,
        },
        text: {
          default: base.brand.warning.text,
        },
      },
      outline: {
        border: {
          default: base.brand.warning.alphaStrong,
        },
        text: {
          default: base.brand.warning.text,
        },
      },
      ghost: {
        text: {
          default: base.brand.warning.text,
        },
      },
    },
  },
  toggleButton: {
    neutral: {
      soft: {
        border: {
          default: base.border.default,
          hover: base.border.default,
          selected: base.border.default,
          disabled: base.border.disabled,
        },
        label: {
          default: base.brand.neutral.text,
          hover: base.brand.neutral.text,
          selected: base.brand.neutral.text,
          disabled: base.text.disabled,
        },
        background: {
          default: base.brand.neutral.subtle,
          hover: base.brand.neutral.alpha,
          selected: base.brand.neutral.alpha,
          disabled: base.surface.disabled,
        },
      },
    },
  },
  userItem: {
    background: {
      hover: base.brand.neutral.alpha,
    },
    text: {
      default: base.brand.neutral.text,
      hover: base.brand.neutral.text,
    },
  },
  externalLink: {
    text: {
      default: base.brand.primary.text,
      hover: base.brand.primary.text,
    },
    icon: {
      default: base.brand.primary.text,
      hover: base.brand.primary.text,
    },
  },
*/
} as const;
