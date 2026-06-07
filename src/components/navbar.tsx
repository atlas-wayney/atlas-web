'use client';
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
import { NavbarLogoBrand, ThemeToggle, NavbarUserMenu } from "atlas-shared-web/components";
import { useAuth } from "atlas-shared-web";

const menuItems = [
  { label: "Access Matrix", target: "identity" },
  { label: "Network", target: "network" },
  { label: "Billing", target: "billing" },
];

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();

  const scrollTo = (target: string) => {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" isBordered={true} shouldHideOnScroll={true} classNames={{ wrapper: "px-4" }}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <NavbarLogoBrand />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.target}>
            <Button
              variant="light"
              className="p-0 px-2 min-w-fit bg-transparent data-[hover=true]:bg-transparent data-[hover=true]:text-primary text-base transition-colors"
              onPress={() => scrollTo(item.target)}
            >
              {item.label}
            </Button>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-2">
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
        <NavbarItem>
          <NavbarUserMenu user={user} />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              color="foreground"
              className="w-full cursor-pointer"
              size="lg"
              onPress={() => {
                scrollTo(item.target);
                setIsMenuOpen(false);
              }}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
