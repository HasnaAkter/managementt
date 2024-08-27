// @ts-nocheck
'use client';
import React from 'react';
import Card from '../../../common/card/index'; 

const cardData = [
    { title: "Card Title 1", content: "Card content goes here" },
    { title: "Card Title 2", content: "Card content goes here. " },
    { title: "Card Title 3", content: "Card content goes here. ", isDifferent: true },
    { title: "Card Title 1", content: "Card content goes here" },
    { title: "Card Title 2", content: "Card content goes here. " },
    { title: "Card Title 1", content: "Card content goes here" },
    { title: "Card Title 2", content: "Card content goes here. " },
    { title: "Card Title 1", content: "Card content goes here" },
    { title: "Card Title 2", content: "Card content goes here. " },
    // Repeat or modify data as needed
];

const Story = () => {
    return (
        <div className="bg-_yellow_gray p-5 shadow-lg mb-10">
            <p className="text-center text-22 text-_gray font-bold mb-4">Feature Listing</p>
            <p className="text-center text-_black text-14">
                Explore our latest features and updates designed to boost 
            </p>
            <p className="text-center text-_black text-14">
                your productivity and enhance your experience. Stay tuned for more exciting enhancements!
            </p>
            <div className="mt-4 flex flex-wrap gap-4 justify-center">
                {cardData.map((card, index) => (
                    <div key={index} className="w-full sm:w-80 md:w-64 lg:w-60 xl:w-56">
                        <Card 
                            title={card.title}
                            content={card.content}
                            isDifferent={card.isDifferent}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Story;
