import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { Sprite } from "@/components/shared";
import { Footer, Header } from "@/components/layout";

const firaCode = Fira_Code({
    variable: "--font-fira-code",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${firaCode.variable} antialiased`}>
                <Sprite />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
