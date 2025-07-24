"use client";

import React, { useState } from "react";
import { Icon, SocialLinks } from "@/components/shared";
import HeaderLinks from "./headerLinks";
import { socialLinks } from "../../data";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav>
            <HeaderLinks className="tablet" />
            <button onClick={() => setIsOpen((prevState) => !prevState)}>
                {isOpen ? (
                    <Icon width={24} height={24} iconId="icon-close" />
                ) : (
                    <Icon width={24} height={24} iconId="icon-burger" />
                )}
            </button>
            {isOpen && (
                <div className="open">
                    <HeaderLinks className="mobile" />
                    <ul>
                        <SocialLinks />
                    </ul>
                </div>
            )}
        </nav>
    );
}
