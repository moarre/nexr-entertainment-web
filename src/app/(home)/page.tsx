"use client";
import dynamic from "next/dynamic";

export default function Home() {
    const NEXRVideo = dynamic(() => import("./components/main-logo/main-logo"), { ssr: false });

    return (
        <div>
            <NEXRVideo />
        </div>
    );
}
