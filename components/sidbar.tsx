"use client";

import React, { useState } from "react";
import { Nav } from "./nav";
import {
  LayoutDashboard,
  Settings,
  ShoppingCart,
  UsersRound,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useWindowWidth } from "@react-hook/window-size";
import { Button } from "./ui/button";

type Props = {};

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleNavbar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            variant="secondary"
            onClick={toggleNavbar}
            className="rounded-full p-2"
          >
            <p>{isCollapsed ? <ChevronRight /> : <ChevronLeft />}</p>
          </Button>
        </div>
      )}

      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            label: "",
            icon: LayoutDashboard,
            variant: "default",
            href: "/",
          },
          {
            title: "Users",
            label: "",
            icon: UsersRound,
            variant: "ghost",
            href: "/users",
          },
          {
            title: "Orders",
            label: "",
            icon: ShoppingCart,
            variant: "ghost",
            href: "/orders",
          },
          {
            title: "Settings",
            label: "",
            icon: Settings,
            variant: "ghost",
            href: "/settings",
          },
        ]}
      />
    </div>
  );
}
