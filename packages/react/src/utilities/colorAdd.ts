type RGBA = {
  r: number;
  g: number;
  b: number;
  a: number;
};

function parseColor(input: string): RGBA {
  const c = input.trim().toLowerCase();

  if (c === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0 };
  }

  if (c.startsWith("#")) {
    let hex = c.slice(1);

    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((x) => x + x)
        .join("");
    }

    if (hex.length === 6) {
      return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16),
        a: 1,
      };
    }

    if (hex.length === 8) {
      return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16),
        a: parseInt(hex.slice(6, 8), 16) / 255,
      };
    }
  }

  const match = c.match(/rgba?\(([^)]+)\)/);

  if (match && match[1]) {
    const parts = match[1].split(",").map((v) => v.trim());

    return {
      r: Number(parts[0]),
      g: Number(parts[1]),
      b: Number(parts[2]),
      a: parts[3] !== undefined ? Number(parts[3]) : 1,
    };
  }

  throw new Error(`Unsupported color: ${input}`);
}

function clamp(v: number, max: number) {
  return Math.min(Math.max(v, 0), max);
}

export function addColors(base: string, overlay: string) {
  if (!overlay || overlay === "transparent") return base;

  const b = parseColor(base);
  const o = parseColor(overlay);

  // Alpha compositing (overlay on top of base)
  const outA = o.a + b.a * (1 - o.a);

  const r = (o.r * o.a + b.r * b.a * (1 - o.a)) / outA;

  const g = (o.g * o.a + b.g * b.a * (1 - o.a)) / outA;

  const bVal = (o.b * o.a + b.b * b.a * (1 - o.a)) / outA;

  return `rgba(${clamp(Math.round(r), 255)}, ${clamp(
    Math.round(g),
    255
  )}, ${clamp(Math.round(bVal), 255)}, ${outA})`;
}
