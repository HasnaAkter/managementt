
import React from 'react';
import Banner from '../banner';
import Specialities from '../specialities';
import Project from '../project';
import Bio from '../bio';
import QuestionAndAnswer from '../QandA';
import CoverBanner from '../cover-banner';
import Story from '../story';

const HomePages = () => {
    return (
        <div>
            <CoverBanner />
            <Specialities />
            <Banner />
            <Project />
            <Bio />
            <QuestionAndAnswer />
            <Story/>

        </div>
    );
};

export default HomePages;