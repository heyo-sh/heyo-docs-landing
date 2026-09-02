import {
  RiArrowRightLine,
  RiGithubLine,
  RiGlobalLine,
  RiMoonLine,
  RiSunLine,
} from "@remixicon/react";
import type { MetaFunction } from "react-router";
import { CodeBlock, CodeBlockGroup } from "@heyo-sh/heyo-docs";

import { Button } from "~/components/ui/button";
import { Marker, MarkerContent } from "~/components/ui/marker";
import { useTheme } from "~/components/theme-provider";
import { headerNavigation } from "~/header-navigation";

const HEYO_ASCII_ART = `   ________  ________  ________  ________
  ╱    ╱   ╲╱        ╲╱    ╱   ╲╱        ╲
 ╱         ╱    o    ╱         ╱    o    ╱
╱         ╱        _╱╲__      ╱         ╱
╲___╱____╱╲________╱   ╲_____╱╲________╱ docs`;

export const meta: MetaFunction = () => [
  { title: "Heyo Docs" },
  {
    name: "description",
    content:
      "Build fast, beautiful documentation sites with MDX, React, and a theme made for developers.",
  },
];

export default function HomeRoute() {
  const { mounted, resolvedTheme, setTheme } = useTheme();
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <main className="relative grid min-h-svh place-items-center overflow-hidden bg-background px-6 text-foreground">
      <header className="absolute inset-x-0 top-0 z-10 flex h-14 items-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <a
          aria-label="Heyo Docs"
          className="landing-enter landing-enter--1 flex shrink-0 items-center px-3 sm:px-4 lg:w-[18.75rem]"
          href="/"
        >
          <img className="max-h-6" src="/logo.svg" alt="" />
        </a>
        <div className="landing-enter landing-enter--2 ml-auto flex items-center gap-1 px-3 sm:px-5">
          {headerNavigation}
          <Button
            aria-label={isDark ? "Use light theme" : "Use dark theme"}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            size="icon"
            variant="ghost"
          >
            {isDark ? (
              <RiSunLine aria-hidden="true" className="size-3.5" />
            ) : (
              <RiMoonLine aria-hidden="true" className="size-3.5" />
            )}
          </Button>
        </div>
      </header>

      <section className="flex w-full max-w-3xl flex-col items-center text-center">
        <pre className="landing-enter landing-enter--3 mb-10 max-w-md overflow-x-auto font-mono text-left text-[0.6rem] leading-tight text-muted-foreground">
          {HEYO_ASCII_ART}
        </pre>

        <h1 className="landing-enter landing-enter--4 text-4xl sm:text-5xl max-w-md">
          Open-source Docs for Developers
        </h1>
        <p className="landing-enter landing-enter--5 mt-5 max-w-md text-base leading-7 text-muted-foreground">
          Build fast, beautiful documentation sites with MDX, React, and a theme
          made for developers.
        </p>

        <div className="landing-enter landing-enter--6 mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="https://github.com/heyo-sh/heyo-docs"
            rel="noreferrer"
            target="_blank"
          >
            <Button>
              <RiGithubLine aria-hidden="true" className="size-3.5" />
              View on GitHub
            </Button>
          </a>
          <a href="/introduction">
            <Button variant="outline">
              Explore docs
              <RiArrowRightLine aria-hidden="true" className="size-3.5" />
            </Button>
          </a>
        </div>

        <Marker
          variant="separator"
          className="landing-enter landing-enter--7 max-w-md my-6"
        >
          <MarkerContent>OR</MarkerContent>
        </Marker>

        <div className="landing-enter landing-enter--8 w-full max-w-md text-left mb-10">
          <CodeBlockGroup className="my-0" defaultValue="bun" variant="line">
            <CodeBlock language="bash" title="bun">
              {`bun create @heyo-sh/heyo-docs`}
            </CodeBlock>
            <CodeBlock language="bash" title="npm">
              {`npm create @heyo-sh/heyo-docs@latest`}
            </CodeBlock>
            <CodeBlock language="bash" title="pnpm">
              {`pnpm create @heyo-sh/heyo-docs`}
            </CodeBlock>
            <CodeBlock language="bash" title="Yarn">
              {`yarn dlx @heyo-sh/create-heyo-docs`}
            </CodeBlock>
          </CodeBlockGroup>
        </div>
      </section>

      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1600px]">
        <footer className="landing-enter landing-enter--9 flex h-12 items-center gap-1 px-4">
          <a
            aria-label="Website"
            className="inline-flex size-8 items-center justify-center rounded-md text-foreground/60 transition-colors hover:text-foreground"
            href="https://docs.heyo.sh"
            rel="noreferrer"
            target="_blank"
          >
            <RiGlobalLine aria-hidden="true" className="size-4" />
          </a>
          <a
            aria-label="GitHub"
            className="inline-flex size-8 items-center justify-center rounded-md text-foreground/60 transition-colors hover:text-foreground"
            href="https://github.com/heyo-sh/heyo-docs"
            rel="noreferrer"
            target="_blank"
          >
            <RiGithubLine aria-hidden="true" className="size-4" />
          </a>
          <a
            aria-label="X (Twitter)"
            className="inline-flex size-8 items-center justify-center rounded-md text-foreground/60 transition-colors hover:text-foreground"
            href="https://x.com/Heyodotsh"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              aria-hidden="true"
              className="size-3.5"
              fill="none"
              viewBox="0 0 1200 1227"
            >
              <path
                className="fill-current"
                fill="#fff"
                d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
              />
            </svg>
          </a>
        </footer>
      </div>

      <p className="landing-enter landing-enter--10 absolute bottom-6 hidden text-center text-xs text-muted-foreground sm:block sm:bottom-8">
        Made for developers who like things clear.
      </p>
    </main>
  );
}
