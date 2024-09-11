'use client'
import React from 'react'
import LanguageSelector from '../Language/LanguageSelector'
import "./NavbarElements.scss"
import { GET_NAVBAR_DATA } from '@/queries/get-navbar-data';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {

    const { loading, error, data } = useQuery(GET_NAVBAR_DATA);

    console.log("Data", data?.logo?.siteLogoUrl)

    if (error) return <p>Error: {error.message}</p>;

    const headerMenus = data?.headerMenus?.nodes || [];
    const logoUrl = data?.logo?.siteLogoUrl
    const logoTitle = data?.logo?.siteTitle

    return (
        <>
            <nav>
                <Link id="logo-link" href="/">
                    <img src={logoUrl} alt={logoTitle} className='logo' />
                </Link>

                <div>
                    <ul id="navbar">
                        {headerMenus.map((menu) => (
                            <li key={menu.id}>
                                <Link className="menu-item" href={menu.url} >
                                    {menu.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* mobile menu */}
                <div id="mobile">
                <FontAwesomeIcon icon={faBars} size="2x" />
                </div>
            </nav>
        </>
    )
}

export default Navbar





