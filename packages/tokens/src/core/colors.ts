export const coreColors = {
  brand: {
    primary: "#1E6FF2",
    primaryDark: "#124BAE",
    primaryLight: "#5A9CFF",
    accent: "#F25F5C",
    accentDark: "#C73F3C",
    accentLight: "#F47C7A"
  },
  neutral: {
    0: "#FFFFFF",
    50: "#F7F8FA",
    100: "#EEF1F6",
    200: "#E0E4EC",
    300: "#C7CEDA",
    400: "#9FA9BA",
    500: "#6F7B90",
    600: "#525C70",
    700: "#3A4252",
    800: "#232A38",
    900: "#0F1624"
  },
  feedback: {
    success: "#1ABF70",
    successDark: "#0E8B4F",
    warning: "#FFB020",
    warningDark: "#D48806",
    danger: "#E53935",
    dangerDark: "#B71C1C"
  }
} as const;

export type CoreColors = typeof coreColors;
