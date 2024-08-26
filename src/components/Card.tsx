import React from 'react';
import { Share } from "@/assets/svg/share";

const Card = () => {
    return (
        <div className="mini-card" id="mini-card">
            <div className="card__header">
                <div className="card__header-title">
                    <div className="card__header-title-icon"></div>
                    <div className="card__header-title-name">
                        <span>Ростелеком</span>
                    </div>
                </div>
                <div className="card__header-button-action">
                    <button className="button--card__header">
                        <Share/>
                    </button>
                </div>
            </div>
            <div className="card__description">
                qqq
            </div>
        </div>
    );
};

export default Card;