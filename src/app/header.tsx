import React from "react";
import Container from "./container";
import Link from "next/link";

const Header = ()=>{
    return (
        <header className="bg-black text-white">
            <Container classNames="flex justify-between items-center">
                <div className="flex gap-5">
                    <div>Logo</div>
                    <nav >
                        <ul className="flex items-center justify-center gap-2">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li> <Link href="/dashboard">Dashboard</Link></li>
                        </ul>
                    </nav>
                </div>
                
            </Container>
        </header>
    )
}

export default Header