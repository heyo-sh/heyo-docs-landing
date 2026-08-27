import type { MdxComponents } from "@heyo-sh/heyo-docs";
import { Hero } from "./hero";
import { FlickeringGrid } from "./ui/flickering-grid";

/** Components available to all MDX pages rendered by this documentation app. */
export const docsMdxComponents = {
  FlickeringGrid,
  Hero,
} satisfies MdxComponents;
