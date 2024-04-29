import React from 'react';
import Slider from '../Slider/Slider';
import MeetOurTeam from '../MeetOurTeam/MeetOurTeam';
import { useLoaderData } from 'react-router-dom';
import TouristSpots from '../TouristSpots/TouristSpots';

const Home = () => {
    const touristSpots = useLoaderData();
    console.log(touristSpots)
    const eightSpot = touristSpots.slice(0, 8)

    return (
        <div>
            <Slider></Slider>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    eightSpot.map(touristSpot => <TouristSpots touristSpot={touristSpot} key={touristSpot._id}></TouristSpots>)
                }
            </div>
            <h1 className="text-3xl">Countryes </h1>
            <MeetOurTeam></MeetOurTeam>
        </div>
    );
};

export default Home;