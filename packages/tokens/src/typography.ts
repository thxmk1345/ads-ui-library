const baseTypography = {
  fontFamily: {
    default: "Roboto",
    code: "Mono",
  },

  fontWeight: {
    light: "Light",
    regular: "Regular",
    medium: "Medium",
    bold: "Bold",
  },

  fontSize: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 24,
    7: 28,
    8: 35,
    9: 60,
  },

  letterSpacing: {
    1: 0.04,
    2: 0,
    3: 0,
    4: -0.04,
    5: -0.08,
    6: -0.1,
    7: -0.12,
    8: -0.16,
    9: -0.4,
  },

  lineHeight: {
    1: 16,
    2: 20,
    3: 24,
    4: 26,
    5: 28,
    6: 30,
    7: 36,
    8: 40,
    9: 60,
  },
} as const;

type Size = keyof typeof baseTypography.fontSize;
type Weight = keyof typeof baseTypography.fontWeight;

type TypographyVariant = {
  fontFamily: string;
  fontWeight: string;
  fontSize: number;
  letterSpacing: number;
  lineHeight: number;
};

type TypographyScale = {
  [K in `s${Size}`]: {
    [W in Weight]: TypographyVariant;
  };
};

const sizes = Object.keys(baseTypography.fontSize) as unknown as Size[];

export const typography: TypographyScale = {} as TypographyScale;

for (const size of sizes) {
  const key = `s${size}` as const;

  typography[key] = {
    light: {
      fontFamily: baseTypography.fontFamily.default,
      fontWeight: baseTypography.fontWeight.light,
      fontSize: baseTypography.fontSize[size],
      letterSpacing: baseTypography.letterSpacing[size],
      lineHeight: baseTypography.lineHeight[size],
    },

    regular: {
      fontFamily: baseTypography.fontFamily.default,
      fontWeight: baseTypography.fontWeight.regular,
      fontSize: baseTypography.fontSize[size],
      letterSpacing: baseTypography.letterSpacing[size],
      lineHeight: baseTypography.lineHeight[size],
    },

    medium: {
      fontFamily: baseTypography.fontFamily.default,
      fontWeight: baseTypography.fontWeight.medium,
      fontSize: baseTypography.fontSize[size],
      letterSpacing: baseTypography.letterSpacing[size],
      lineHeight: baseTypography.lineHeight[size],
    },

    bold: {
      fontFamily: baseTypography.fontFamily.default,
      fontWeight: baseTypography.fontWeight.bold,
      fontSize: baseTypography.fontSize[size],
      letterSpacing: baseTypography.letterSpacing[size],
      lineHeight: baseTypography.lineHeight[size],
    },
  };
}

export type Typography = typeof typography;
