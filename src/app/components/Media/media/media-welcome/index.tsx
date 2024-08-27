import React from 'react';
import Image from 'next/image';

const MediaWelcome = () => {
    return (
       <div className="py-5">
         <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-8">
            <div className="flex-1 p-4  text-center ">
                <h1 className="text-22 md:text-left font-bold text-_gray animate-bounce">
                    Ensure Success! Every Time.
                </h1>
                <p className="text-16 animate-fade-in md:text-left">
                   Achieve guaranteed success, consistently and without fail.
                </p>
            </div>
            <div className="flex-shrink-0 p-2 mt-4 md:mt-0">
                <Image
                    src="/assets/image/welcome.jpeg"
                    alt="Banner Image"
                    className="rounded-lg p-1 animate-slide-in"
                    width={800}
                    height={800}
                    priority
                />
            </div>
        </div>
       </div>
    );
};

export default MediaWelcome;
