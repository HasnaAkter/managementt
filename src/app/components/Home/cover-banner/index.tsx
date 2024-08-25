"use client"
import React from 'react';

const CoverBanner = () => {
    return (
        <div id="header" className="cf">
            <div className="page-width">
                <h1 id="site-title">
                    <a href="http://html5backgroundvideos.com" target="_blank" rel="noopener noreferrer">
                        <span className="title">BG Stock</span>
                        <span className="subtitle">HTML5 Background Videos</span>
                    </a>
                </h1>
            </div>

            {/* Start video hero */}
            <div className="video-hero jquery-background-video-wrapper demo-video-wrapper">
                <video
                    className="jquery-background-video"
                    autoPlay
                    muted
                    loop
                    poster="https://d2ezlykacdqcnj.cloudfront.net/_assets/home-video/beach-waves-loop.jpg"
                >
                    <source
                        src="https://d2ezlykacdqcnj.cloudfront.net/_assets/home-video/beach-waves-loop.mp4"
                        type="video/mp4"
                    />
                    <source
                        src="https://d2ezlykacdqcnj.cloudfront.net/_assets/home-video/beach-waves-loop.webm"
                        type="video/webm"
                    />
                    <source
                        src="https://d2ezlykacdqcnj.cloudfront.net/_assets/home-video/beach-waves-loop.ogv"
                        type="video/ogg"
                    />
                </video>
                <div className="video-overlay"></div>
                <div className="page-width">
                    <div className="video-hero--content">
                        <h2>Background Video Demo</h2>
                        <p>Full width video hero</p>
                    </div>
                </div>
            </div>
            {/* End video hero */}

            <div id="content">
                <div className="page-width">
                    <h3>Easy Background Videos</h3>
                    <p>
                        This page uses the{' '}
                        <a
                            href="https://github.com/BGStock/jquery-background-video"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            jQuery Background Video
                        </a>{' '}
                        plugin along with some simple html and css to generate this background video.
                    </p>
                    <p>
                        The video overlay pattern is available at{' '}
                        <a
                            href="http://html5backgroundvideos.com/pattern-overlays/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            http://html5backgroundvideos.com/pattern-overlays/
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CoverBanner;
