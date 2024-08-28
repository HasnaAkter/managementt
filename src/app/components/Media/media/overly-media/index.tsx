"use client";
import Image from 'next/image';
import React from 'react';

const Overlay = () => {
    return (
       <div className="">
         <section className="">
            <div className="animate-sway">
                <Image
                    src="/assets/image/bb.avif"
                    alt="Banner Image"
                    className="w-full h-full  "
                    width={800}
                    height={800}
                    priority
                />
            </div>
            {/* <div className="absolute inset-0  bg-opacity-70 flex flex-col justify-center items-center text-white">
                <div className="video-button" data-aperture="closed">
                    <div className="video-container relative">
                        <video 
                            className="actual-video rounded-lg overflow-hidden"
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/502545/Oculus.mp4" 
                            poster="https://assets.codepen.io/502545/2021-02-08_20-46-41.jpg" 
                            controls
                            width="400"
                            height="300"
                        ></video>
                        <div className="play-button__aperture--left absolute top-0 left-0 w-8 h-8 bg-white"></div>
                        <div className="play-button__aperture--top-right absolute top-0 right-0 w-8 h-8 bg-white"></div>
                        <div className="play-button__aperture--bottom-right absolute bottom-0 right-0 w-8 h-8 bg-white"></div>
                    </div>
                </div>
            </div> */}
        </section>
       </div>
    );
};

export default Overlay;
