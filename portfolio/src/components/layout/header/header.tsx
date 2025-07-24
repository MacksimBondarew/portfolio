import React from "react";
import { Icon, Logo } from "../../shared";
import { headerLinks } from "../../data";
import Link from "next/link";
import Navigation from "./navigation";

export function Header() {
    return (
        <header>
            <Logo />
            <Navigation />
        </header>
    );
}
