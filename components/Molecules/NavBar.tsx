"use client"

import { NavigationMenu, NavigationMenuList } from "@radix-ui/react-navigation-menu";
import NavItem from "../Atoms/NavItem";

const navItems = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Phones",
        href: "/phones",
    },
    {
        label: "Tablets",
        href: "/tablets",
    },
    {
        label: "Accessories",
        href: "/accessories",
    },
    {
        label: "About Us",
        href: "/about-us",
    },
]

export default function NavBar() {
    return (
        <NavigationMenu>
            <NavigationMenuList className="flex gap-2">
                {navItems.map((item) => (
                    <NavItem key={item.href} label={item.label} href={item.href} />
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}
