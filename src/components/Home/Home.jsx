import React from 'react';
import Slider from '../Slider/Slider';
import MeetOurTeam from '../MeetOurTeam/MeetOurTeam';
import { useLoaderData } from 'react-router-dom';
import TouristSpots from '../TouristSpots/TouristSpots';
import { Helmet } from "react-helmet";

const Home = () => {
    const touristSpots = useLoaderData();
    console.log(touristSpots)
    const eightSpot = touristSpots.slice(0, 8)

    return (
        <div className='max-w-6xl mx-auto'>
            <Helmet>
                <title>Abrar Tourism | Home</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
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