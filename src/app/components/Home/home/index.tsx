
import React from 'react';
import Banner from '../banner';
import Specialities from '../specialities';
import Project from '../project';
import Bio from '../bio';
import QuestionAndAnswer from '../QandA';

const HomePages = () => {
    return (
        <div>
            <Banner />
            <Specialities/>
            <Project/>
            <Bio/>
            <QuestionAndAnswer/>

        </div>
    );
};

export default HomePages;