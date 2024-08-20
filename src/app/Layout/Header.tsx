import React from 'react';
import { Home } from "@/assets/svg/home";

const Header = () => {
    return (
        <header>
            <nav className="nav">
                <div className="logo"></div>
                <ul className="nav__list">
                    <li><a href="/" className="nav__link"><Home /></a></li>
                    <li><a href="#" className="nav__link">Найти</a></li>
                    <li><a href="#" className="nav__link">Хз</a></li>
                </ul>
                <div className="contact"></div>
            </nav>
        </header>
    );
};

export default Header;