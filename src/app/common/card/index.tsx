// @ts-nocheck
import React from 'react';

const Card = ({ title, content, isDifferent }) => {
    return (
        <div className={`bg-white rounded-full shadow-md p-4 ${isDifferent ? 'bg-_special_color' : ''}`}>
            <h3 className="text-center text-14 font-semibold mb-2">{title}</h3>
            <p className="text-center text-12">{content}</p>
        </div>
    );
};

export default Card;
