type ClassNameValue = string | false | null | undefined;

/** Combines optional class names for locally installed shadcn components. */
export function cn(...values: ClassNameValue[]) {
  return values.filter(Boolean).join(" ");
}
