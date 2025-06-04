import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";

import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";

interface NavItemProps {
    label: string;
    href: string;
}

export default function NavItem({ label, href }: NavItemProps) {
    const currentLocation = usePathname();
    
    return (
        <NavigationMenuItem
            className={classNames("hover:bg-secondary px-4 py-2 rounded", {
                "bg-secondary": currentLocation === href,
            })}
        >
            <Link href={href}>{label}</Link>
        </NavigationMenuItem>
    );
}