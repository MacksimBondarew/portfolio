import { Logo, SocialLinks } from "@/components/shared";
import React from "react";

export function Footer() {
    return (
        <footer>
            <div>
                <Logo />
                <p>Front-end developer</p>
            </div>
            <div>
                <h4>Media</h4>
                <SocialLinks />
            </div>
        </footer>
    );
}
