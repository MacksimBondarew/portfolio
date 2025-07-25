"use client";

import React, { useState } from "react";
import { Icon, SocialLinks } from "@/components/shared";
import HeaderLinks from "./headerLinks";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav>
            <HeaderLinks className="tablet" />
            <button
                onClick={() => setIsOpen((prevState) => !prevState)}
                className="transition-transform duration-[250ms] ease-in-out md:hidden">
                <Icon
                    width={24}
                    height={24}
                    iconId={isOpen ? "icon-close" : "icon-burger"}
                    styles={{
                        transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                />
            </button>
            <div className={isOpen ? "open" : ""}>
                <HeaderLinks className="mobile" />
                <ul>
                    <SocialLinks />
                </ul>
            </div>
        </nav>
    );
}
