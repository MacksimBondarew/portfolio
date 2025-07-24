import { socialLinks } from "@/components/data";
import React from "react";
import { Icon } from "../icon/icon";

export function SocialLinks() {
    return (
        <ul>
            {socialLinks.map(({ name, href, iconId }) => (
                <li key={name}>
                    <a href={href}>
                        <Icon iconId={iconId} />
                    </a>
                </li>
            ))}
        </ul>
    );
}
