'use client'
import React from 'react'
import LanguageSelector from '../Language/LanguageSelector'
import "./NavbarElements.scss"
import { GET_NAVBAR_DATA } from '@/queries/get-navbar-data';
import { useQuery } from '@apollo/client';
import Link from 'next/link';



const Navbar = () => {

    const { loading, error, data } = useQuery(GET_NAVBAR_DATA);
 
  console.log("Data", data?.logo?.siteLogoUrl)
    
    if (error) return <p>Error: {error.message}</p>;

    const headerMenus = data?.headerMenus?.nodes || [];
    const logoUrl = data?.logo?.siteLogoUrl 
    const logoTitle = data?.logo?.siteTitle 

    return (
        <div className='nav-container'>
            <div className='nav-wrapper'>
                <div className="left">
                <img src={logoUrl} alt={logoTitle} className='logo'/>
                </div>
                <div className="right">
                    <div className="menu">
                        {headerMenus.map((menu) => (
                            <div key={menu.id}>
                                <Link href={menu.url} className="menu-item">
                                    {menu.label}
                                </Link>
                            </div>
                        ))}

                    </div>
                    <div className="translator">
                        <LanguageSelector />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar





