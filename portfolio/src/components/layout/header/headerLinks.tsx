import React from "react";
import { headerLinks } from "../../data";
import Link from "next/link";


export default function HeaderLinks({ className }: { className?: string }) {
    return (
        <ul className={className}>
            {headerLinks.map(({ name, href }) => (
                <li key={name}>
                    <Link href={href}>
                        <span>#</span>
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
