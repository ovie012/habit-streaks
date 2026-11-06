// The clay design system: every colour, size and shadow the app uses.
// Screens and components read from here, so the whole look can change in one place.

import { mix, withAlpha } from "@/utils/color";

export const colors = {
  backgroundTop: "#F6F3FF",
  background: "#EEF0F7",
  backgroundBottom: "#E6EBF6",
  surface: "#F8F9FD",
  surfaceTop: "#FFFFFF",
  surfaceBottom: "#ECEFF8",
  well: "#E5E8F2",
  ink: "#2A2C40",
  inkSoft: "#5B5F7A",
  muted: "#9095AD",
  accent: "#7C6CF2",
  success: "#3FBF86",
  flame: "#FF8A3D",
  danger: "#F2545B",
  white: "#FFFFFF",
} as const;

/** The 8 colours a habit can have. */
export const habitColors = [
  "#7C6CF2", // violet
  "#4F9DFF", // blue
  "#2EC4B6", // teal
  "#3FBF86", // green
  "#FFB938", // amber
  "#FF8A3D", // orange
  "#FF6FA5", // pink
  "#F2545B", // red
] as const;

export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 } as const;

export const radius = { sm: 12, md: 18, lg: 26, xl: 32, pill: 999 } as const;

export const fonts = {
  semiBold: "Nunito_600SemiBold",
  bold: "Nunito_700Bold",
  extraBold: "Nunito_800ExtraBold",
  black: "Nunito_900Black",
} as const;

export const fontSize = { xs: 11, sm: 13, md: 16, lg: 18, xl: 22, xxl: 34, hero: 56 } as const;

// ---- Clay depth -------------------------------------------------------------
// Clay = a soft outer shadow (it floats), a bright inner highlight at the top
// (light hits it), and a soft inner shade at the bottom (it is rounded).

const SHADE = "96, 104, 150"; // a cool blue-grey, softer than black

export const clay = {
  /** Raised white clay: cards. */
  raised: [
    `0px 14px 28px rgba(${SHADE}, 0.18)`,
    `0px 4px 10px rgba(${SHADE}, 0.10)`,
    "inset 0px 2px 2px rgba(255, 255, 255, 0.95)",
    `inset 0px -8px 16px rgba(${SHADE}, 0.10)`,
  ].join(", "),

  /** Raised white clay, pushed in a little. */
  pressed: [
    `0px 6px 14px rgba(${SHADE}, 0.16)`,
    "inset 0px 2px 2px rgba(255, 255, 255, 0.9)",
    `inset 0px -4px 10px rgba(${SHADE}, 0.12)`,
  ].join(", "),

  /** A hollow pressed into the clay: inputs, empty ticks, progress tracks. */
  well: [
    `inset 0px 4px 8px rgba(${SHADE}, 0.20)`,
    "inset 0px -2px 3px rgba(255, 255, 255, 0.9)",
  ].join(", "),

  /** Coloured clay: buttons, ticks, hero cards. */
  colored: (color: string) =>
    [
      `0px 12px 22px ${withAlpha(color, 0.38)}`,
      `0px 3px 6px ${withAlpha(color, 0.25)}`,
      "inset 0px 3px 3px rgba(255, 255, 255, 0.45)",
      `inset 0px -6px 12px ${withAlpha(mix(color, "#000000", 0.45), 0.35)}`,
    ].join(", "),

  /** Coloured clay, pushed in. */
  coloredPressed: (color: string) =>
    [
      `0px 5px 10px ${withAlpha(color, 0.32)}`,
      "inset 0px 2px 2px rgba(255, 255, 255, 0.35)",
      `inset 0px -3px 8px ${withAlpha(mix(color, "#000000", 0.45), 0.35)}`,
    ].join(", "),

  /** Small coloured clay: week dots and colour chips. */
  coloredSmall: (color: string) =>
    [
      `0px 3px 6px ${withAlpha(color, 0.4)}`,
      "inset 0px 1px 1px rgba(255, 255, 255, 0.5)",
      `inset 0px -2px 3px ${withAlpha(mix(color, "#000000", 0.45), 0.35)}`,
    ].join(", "),

  /** Pastel bubble behind a 3D icon, tinted with the habit colour. */
  tinted: (color: string) =>
    [
      `0px 8px 16px ${withAlpha(color, 0.22)}`,
      "inset 0px 2px 2px rgba(255, 255, 255, 0.9)",
      `inset 0px -5px 10px ${withAlpha(color, 0.22)}`,
    ].join(", "),
};

export const gradients = {
  screen: `linear-gradient(180deg, ${colors.backgroundTop} 0%, ${colors.background} 45%, ${colors.backgroundBottom} 100%)`,
  surface: `linear-gradient(160deg, ${colors.surfaceTop}, ${colors.surfaceBottom})`,
  colored: (color: string) =>
    `linear-gradient(155deg, ${mix(color, "#FFFFFF", 0.28)}, ${mix(color, "#000000", 0.06)})`,
  tinted: (color: string) =>
    `linear-gradient(160deg, ${mix(color, "#FFFFFF", 0.9)}, ${mix(color, "#FFFFFF", 0.72)})`,
};
