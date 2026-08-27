import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./components/ui/navigation-menu";
import { RiArrowRightUpLine } from "@remixicon/react";

export const headerNavigation = (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink
          className="font-mono tracking-wide"
          render={<a href="/">readme</a>}
        />
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          className="font-mono tracking-wide"
          render={<a href="/introduction">docs</a>}
        />
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          className="font-mono tracking-wide"
          render={
            <a
              href="https://github.com/heyo-sh/heyo-docs"
              rel="noreferrer"
              target="_blank"
            >
              github
              <RiArrowRightUpLine className="ml-1 size-3.5" />
            </a>
          }
        />
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
