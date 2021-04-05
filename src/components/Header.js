import React from 'react'
import Link from 'gatsby-link'

// Assets
import logo from '../images/Global/Logo/02-InWhite.svg'

// Style
import "../styles/header.styl"

const itemsLink = [
    {
        id: 0,
        name: 'A propos',
        link: '/about'
    },
    {
        id: 1,
        name: 'Nos offres',
        link: '/about'
    },
    {
        id: 2,
        name: 'Nous rejoindre',
        link: '/about'
    },
]

const Header = () => {
    return (
        <header className="container-fluid">
        <nav style={{ backgroundColor : 'grey' }} className="header row middle-xs">
            <figure className="col-xs-6">
                <Link to="/">
                    <img src={logo} alt="logo-teksial-consulting"/>
                </Link>
            </figure>
            <ul className="col-xs-6">
                {itemsLink.map((itemLink, id) => (
                <Link key={itemLink.id} to={itemLink.link}>
                    <li>{itemLink.name}</li>
                </Link>
                ))}
            </ul>
        </nav>
        </header>
    )
}

export default Header
