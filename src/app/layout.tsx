import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import nexr_icon from "../../public/nexr_icon.png";

import "styles/main.scss";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"]
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Nexr Entertainment",
    icons: {
        icon: "nexrsvgimage.svg"
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            {/* <Head>
                <link href="nexrsvgimage.svg" sizes="48x48" rel="icon" type="image/svg" />
            </Head> */}
            <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
        </html>
    );
}
