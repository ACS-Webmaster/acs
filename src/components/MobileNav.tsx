import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
  "Home",
  "About",
  "Events",
  "Tutoring",
  "ACS Store"
  ];


  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}
    >
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>


      <NavbarMenu>
          <NavbarMenuItem>
            <Link
              color={
                "foreground"
              }
              className="w-full justify-end"
              href="/#home"
              size="lg"
            >
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color={
                "foreground"
              }
              className="w-full justify-end"
              href="/#about"
              size="lg"
            >
              About
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color={
                "foreground"
              }
              className="w-full justify-end"
              href="/#events"
              size="lg"
            >
              Events
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color={
                "foreground"
              }
              className="w-full justify-end"
              href="/#tutoring"
              size="lg"
            >
              Tutoring
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color={
                "foreground"
              }
              className="w-full justify-end"
              href="/#store"
              size="lg"
            >
              ACS Store
            </Link>
          </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
