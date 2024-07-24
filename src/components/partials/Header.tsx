'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";


const navLinks = [
    {
        name: 'Home',
        href: '/'
    },
   
    {
        name: 'Contact Us',
        href: '/contact'
    }
]

export const Header: FC = () => {
    const path = usePathname()
    return (
        <header className="bg-gray-800 sticky z-50 top-0 shadow-sm text-white py-4">
            <div className="container">
                <div className="nav-bar flex items-center justify-end">
                    <nav className="flex space-x-4">
                        {navLinks.map(link => (
                            <Link className={path === link.href ? 'active' : ''} id={link.name} href={link.href} key={link.name}>
                                {link.name}
                            </Link>
                        ))}
                        
                    </nav>
                </div>
            </div>
        </header>
    )
}

