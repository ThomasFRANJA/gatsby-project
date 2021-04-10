import React from 'react'

import { Link } from "gatsby"
import {StaticImage} from "gatsby-plugin-image"

// Style
import "./header.styl"

const itemsLink = [
    {
        id: 0,
        name: 'A propos',
        link: '/aPropos'
    },
    {
        id: 1,
        name: 'Nos offres',
        link: '/nosOffres'
    },
    {
        id: 2,
        name: 'Nous rejoindre',
        link: '/nousRejoindre'
    },
    {
        id: 3,
        name: 'Notre actus',
        link: '/notreActus'
    },
    {
        id: 4,
        name: 'RSE & ISO',
        link: '/rseIso'
    },
    {
        id: 5,
        name: 'Contact',
        link: '/contact'
    },
]

const Header = () => {
    return (
        <header className="header container-fluid">
            <nav className="header-nav row middle-xs" style={{ backgroundColor : 'grey' }}>
                <div className="col-xs-1">
                    <Link to="/" >
                        <StaticImage 
                        className="header-nav_logo"
                        src="../../images/Global/Logo/02-InWhite.svg" 
                        alt="logo consulting white"
                        loading="eager" />
                    </Link>
                </div>
                <div className="header-nav-menu col-xs-11">
                    <ul className="row end-xs">
                            {itemsLink.map((itemLink, index) => (
                            <li className="header-nav-menu_item">
                                <Link 
                                key={index} 
                                to={itemLink.link}>
                                    {itemLink.name}
                                </Link>
                            </li>
                            ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
