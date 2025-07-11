"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    label: string;
    iconSrc: string;
    href: string;
};

export const SidebarItem = ({ label, iconSrc, href }: Props) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Button
            variant={isActive ? "sidebarOutline" : "sidebar"}
            className="justify-start h-[52px]"
            asChild
        >
            <Link href={href}>
                <Image
                    src={iconSrc}
                    alt={label}
                    width={32}
                    height={32}
                    className="mr-5"
            
                />
                {label}
                
            </Link>
            
        </Button>
    );
}