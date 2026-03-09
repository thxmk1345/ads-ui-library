// themes/light/base/base.ts

import { core } from "../core/core";

export const base = {
  brand: {
    primary: {
      default: core.scale.azenzus[9],
      strong: core.scale.azenzus[11],
      subtle: core.scale.azenzus.alpha[3],
      alpha: core.scale.azenzus.alpha[5],
      alphaStrong: core.scale.azenzus.alpha[8],
      text: core.scale.azenzus.alpha[11],
    },

    neutral: {
      default: core.scale.neutral[9],
      strong: core.scale.neutral[11],
      subtle: core.scale.neutral.alpha[3],
      alpha: core.scale.neutral.alpha[5],
      alphaStrong: core.scale.neutral.alpha[8],
      text: core.scale.neutral.alpha[11],
    },

    error: {
      default: core.scale.error[9],
      strong: core.scale.error[11],
      subtle: core.scale.error.alpha[3],
      alpha: core.scale.error.alpha[5],
      alphaStrong: core.scale.error.alpha[8],
      text: core.scale.error.alpha[11],
    },

    success: {
      default: core.scale.success[9],
      strong: core.scale.success[11],
      subtle: core.scale.success.alpha[3],
      alpha: core.scale.success.alpha[5],
      alphaStrong: core.scale.success.alpha[8],
      text: core.scale.success.alpha[11],
    },

    warning: {
      default: core.scale.warning[9],
      strong: core.scale.warning[11],
      subtle: core.scale.warning.alpha[3],
      alpha: core.scale.warning.alpha[5],
      alphaStrong: core.scale.warning.alpha[8],
      text: core.scale.warning.alpha[11],
    },
  },

  text: {
    onSolid: core.on_solid,
    primary: core.on_solid_reverse,
    secondary: core.scale.neutral[11],
    disabled: core.scale.neutral.alpha[8],
  },

  border: {
    default: core.scale.neutral.alpha[6],
    disabled: core.scale.neutral.alpha[7],
  },

  surface: {
    default: core.scale.neutral[2],
    panel: core.scale.neutral[1],
    sidePanel: core.scale.neutral[1],
    disabled: core.scale.neutral.alpha[3],
    topBar: core.scale.azenzus[12],
    light: core.scale.neutral.alpha[2],
    panelHighlight: core.scale.neutral.alpha[5],

    section: {
      emphasised: {
        default: core.scale.neutral.alpha[3],
        primary: core.scale.azenzus.alpha[3],
      },
    },
  },

  focus: {
    default: core.scale.azenzus[9],
  },
} as const;
