'use client'
import React, { useState } from 'react'
import LanguageSelector from '../Language/LanguageSelector'
import "./NavbarElements.scss"
import { GET_NAVBAR_DATA } from '@/queries/get-navbar-data';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    const [clicked, setClicked] = useState(false)

    const { loading, error, data } = useQuery(GET_NAVBAR_DATA);

    console.log("Data", data?.logo?.siteLogoUrl)

    if (error) return <p>Error: {error.message}</p>;

    const headerMenus = data?.headerMenus?.nodes || [];
    const logoUrl = data?.logo?.siteLogoUrl
    const logoTitle = data?.logo?.siteTitle



    //handle click function
    const handleClick = ()=>{
        setClicked(!clicked)
    }

    return (
        <>
            <nav>
                <Link id="logo-link" href="/">
                    <img src={logoUrl} alt={logoTitle} className='logo' />
                </Link>

                <div>
                    <ul id="navbar" className={clicked ? "#navbar active" : "navbar"}>
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
                <div id="mobile" onClick={handleClick}>
                <FontAwesomeIcon className='icon' icon={clicked ? faTimes : faBars} size="2x" />
                
                </div>
            </nav>
        </>
    )
}

export default Navbar





