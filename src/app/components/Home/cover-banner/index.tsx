"use client";
import React from 'react';

const CoverBanner = () => {
    return (
        <div id="header" className=" py-8">
            {/* Start video hero */}
            <div
                className="relative h-[500px] overflow-hidden bg-center bg-cover"

            >
                <video
                    className="absolute inset-0 w-auto h-auto min-w-full min-h-full max-w-none"
                    autoPlay
                    muted
                    loop
                    poster="https://t4.ftcdn.net/jpg/01/88/53/19/240_F_188531911_OT2zuKgdK9pS0oalRoA5SFWYNswHjMJy.jpg"
                >

                </video>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative flex items-center justify-center h-full text-center text-white">
                    <div className="px-4">
                        <h2 className="text-4xl font-bold mb-4">FrontEnd Developer</h2>
                        <p className="text-xl">I am a passionate</p>
                    </div>
                </div>
            </div>
            {/* End video hero */}
        </div>
    );
};

export default CoverBanner;
