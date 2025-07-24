import React from "react";
import { Icon } from "../../shared";
import { headerLinks } from "../data";
import Link from "next/link";
import Navigation from "./navigation";

export function Header() {
    return (
        <header>
            <a href="#" className="logo">
                <Icon iconId="icon-Logo" width={16} height={16} />
                Logo
            </a>
            <Navigation />
        </header>
    );
}
