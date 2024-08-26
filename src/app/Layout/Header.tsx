import React from 'react';
import { Home } from "@/assets/svg/home";
import { PersonalCard } from "@/assets/svg/personalCard";
import { Chat } from "@/assets/svg/chat";

const Header = () => {
    return (
        <header>
            <nav className="nav">
                <div className="logo"></div>
                <ul className="nav__list">
                    <li className="nav__list--item"><a href="/" className="nav__link"><Home/></a></li>
                    <li className="nav__list--item"><a href="#" className="nav__link"><PersonalCard/></a></li>
                    <li className="nav__list--item"><a href="#" className="nav__link"><Chat/></a></li>
                </ul>
                <div className="contact"></div>
            </nav>
        </header>
    );
};

export default Header;