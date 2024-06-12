/* eslint-disable @next/next/no-img-element */
"use client";
import Navbar from "./Navbar";
import Link from "next/link";
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Input } from "./ui/input";
import { Heart, Menu, ShoppingCart } from "lucide-react";
import { components } from "@/utils/data";

const Header = () => {
  return (
    <div>
      <Navbar />
      {/* 1st child div to contain Nav inner content */}
      <div className="flex justify-between items-center h-20 px-[10%]">
        <Link href="/">
          <img src="/logo.png" className="h-12 cursor-pointer" alt="" />
        </Link>
        {/* 2nd child div to contain nav links */}
        <div className="text-md flex items-center gap-5">
          <Link href="/" className="hidden sm:block">
            Home
          </Link>
          {/* To Show Categories dynamically in a drop down menu */}
          <div className="hidden sm:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* third child div to contain input box and another child div*/}
        <div className="flex items-center gap-4">
          <Input placeholder="Search" className="h-8 hidden sm:block" />
          {/* Route that redirect user on their favorite products */}
          <Link href="/wishlist">
            <Heart size={20} />
          </Link>
          {/* Route that redirect user on their add to cart page */}
          <Link href="/addToCart">
            <ShoppingCart size={20} />
          </Link>
          <div>
            <Menu size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

const ListItem = forwardRef(
  ({ className, title, image, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none flex items-center gap-4">
              {/* <img src={image} alt="" className="h-8 w-8" /> */}
              <h2>{title}</h2>
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
