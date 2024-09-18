'use client'
// Navbar.jsx
import React, { useState } from 'react';
import LanguageSelector from '../Language/LanguageSelector';
import './NavbarElements.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import Search from '../Search/Search'; // Import Search component

const Navbar = ({ data, error }) => {
    const [clicked, setClicked] = useState(false);
    const [isSearchModalOpen, setSearchModalOpen] = useState(false); // State for search modal

    if (error) return <p>Error: {error.message}</p>;

    const headerMenus = data?.headerMenus?.nodes || [];
    const logoUrl = data?.logo?.siteLogoUrl;
    const logoTitle = data?.logo?.siteTitle;

    const handleClick = () => {
        setClicked(!clicked);
    };

    const handleClickSearch = () => {
        setSearchModalOpen(!isSearchModalOpen)
    }



    return (
        <>
            {data ? (
                <nav>
                    <div className="topbar">
                        {/* Search component with onClick handler */}
                        <Search setSearchModalOpen={setSearchModalOpen} />
                        <LanguageSelector />
                    </div>

                    <div className="bottom-bar">
                        <Link id="logo-link" href="/">
                            <img src={logoUrl} alt={logoTitle} className="logo" />
                        </Link>

                        <div>
                            <ul id="navbar" className={clicked ? "navbar" : "navbar active"}>
                                {headerMenus.map((menu) => (
                                    <li key={menu.id}>
                                        <Link className="menu-item" href={menu.url}>
                                            {menu.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Mobile menu button */}
                        <div id="mobile" onClick={handleClick}>
                            <FontAwesomeIcon
                                className="icon"
                                icon={clicked ? faTimes: faBars}
                                size="1x"
                            />
                        </div>
                    </div>

                    {/* Search modal (conditionally rendered) or use css */}

                    <div id="search-modal" className={isSearchModalOpen ? "search-modal active" : "search-modal"}>
                        <div className="search-inner">
                            <div className='top'>
                                <img src={logoUrl} alt={logoTitle} className="logo-small" />
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faTimes}
                                    size="2x"
                                    onClick={handleClickSearch}
                                />
                            </div>
                            {/* Implement your search functionality here */}
                            <div className="bottom">
                                <input className='search-input' placeholder="Search" />
                                <div id="icon">
                                    <FontAwesomeIcon className='icon' icon={faSearch} size="1x" />
                                </div>
                            </div>
                        </div>

                    </div>

                </nav>
            ) : (
                <>Loading...</>
            )}
        </>
    );
};

export default Navbar;





