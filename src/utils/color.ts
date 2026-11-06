// Small colour helpers used by the clay design system.

function parseHex(hex: string): [number, number, number] {
  const clean = hex.replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;
  const num = parseInt(full, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

/** "#7C6CF2" + 0.3 -> "rgba(124, 108, 242, 0.3)" */
export function withAlpha(hex: string, alpha: number): string {
  const [r, g, b] = parseHex(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** Blend two hex colours. amount 0 = first colour, 1 = second colour. */
export function mix(hex: string, other: string, amount: number): string {
  const a = parseHex(hex);
  const b = parseHex(other);
  const out = a.map((value, i) => Math.round(value + (b[i] - value) * amount));
  return "#" + out.map((value) => value.toString(16).padStart(2, "0")).join("");
}
