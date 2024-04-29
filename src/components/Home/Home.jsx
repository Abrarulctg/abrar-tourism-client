import React from 'react';
import Slider from '../Slider/Slider';
import MeetOurTeam from '../MeetOurTeam/MeetOurTeam';

const Home = () => {

    return (
        <div>
            <Slider></Slider>
            <h1 className="text-3xl">T.Spots </h1>
            <h1 className="text-3xl">Countryes </h1>
            <MeetOurTeam></MeetOurTeam>
        </div>
    );
};

export default Home;