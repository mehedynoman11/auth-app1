'use client'
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { LogoMermaid } from "@gravity-ui/icons";
import { signOut, useSession } from "@/lib/auth-client";
import NavbarSkeleton from "./skeleton/NavbarSkeleton";

export default function Navbar() {
    const {data:session, isPending} = useSession();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // console.log(session)
    if (isPending){
        return <NavbarSkeleton />
    }

    const links = <>
        <li>
            <Link href="#">Features</Link>
        </li>
        <li>
            <Link href="#" className="font-medium text-accent" aria-current="page">
                Dashboard
            </Link>
        </li>
        <li>
            <Link href="#">Pricing</Link>
        </li>

    </>

    const authLink = <>
        {session?.user ? <>
        <p className="font-semibold text-lg">Welcome, <span className="text-blue-500 font-bold">{session.user.name}</span></p>
        <Button onClick={()=>signOut()}>Sign Out</Button>
        </>: <>
        <Link href="/sign-in" className="block md:py-0 py-2">Login</Link>
        <Link href="/sign-up"><Button className="w-full md:w-auto">Sign Up</Button></Link>
        </>}
    </>
    

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                    <div className="flex items-center gap-3">
                        <LogoMermaid />
                        <p className="font-bold">Mermaid</p>
                    </div>
                </div>
                <ul className="hidden items-center gap-4 md:flex">
                    {links}
                </ul>
                <div className="hidden items-center gap-4 md:flex">
                    {authLink}
                </div>
            </header>
            {isMenuOpen && (
                <div className="border-t border-separator md:hidden">
                    <ul className="flex flex-col gap-2 p-4">
                        {links}
                        <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
                            {authLink}
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}