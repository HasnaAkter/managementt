"use client"
import React from 'react';
import MediaWelcome from './media-welcome';
import SuccessTheory from './sucess-theory';
import Overlay from './overly-media';
import MediaBlog from './media-blog';

const Media = () => {
    return (
        <div>

            <MediaWelcome />
            <SuccessTheory />
            <Overlay />
            <MediaBlog />
        </div>
    );
};

export default Media;