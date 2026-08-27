import { LiquidMetal } from "@paper-design/shaders-react";

import { useTheme } from "./theme-provider";

/** Animated hero available to the live MDX editor as `<Hero />`. */
export function Hero() {
  const { mounted, resolvedTheme } = useTheme();
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <LiquidMetal
      aria-label="Animated Heyo Docs wordmark"
      className="overflow-hidden"
      width={1280}
      height={240}
      image="/heyo-docs.svg"
      colorBack={isDark ? "#0A0A0A" : "#FFFFFF"}
      colorTint={isDark ? "#E5E5E5" : "#0A0A0A"}
      shape={undefined}
      repetition={5}
      rotation={-5}
      softness={0.4}
      shiftRed={0.8}
      shiftBlue={0.4}
      distortion={0.07}
      contour={0.4}
      angle={70}
      speed={0.68}
      scale={0.6}
      fit="contain"
      style={{
        aspectRatio: "1280 / 240",
        height: "auto",
        maxWidth: "100%",
      }}
    />
  );
}
