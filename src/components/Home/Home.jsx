import React, { useEffect, useState } from 'react';
import Slider from '../Slider/Slider';
import MeetOurTeam from '../MeetOurTeam/MeetOurTeam';
import { useLoaderData } from 'react-router-dom';
import TouristSpots from '../TouristSpots/TouristSpots';
import { Helmet } from "react-helmet";
import CountryCard from '../CountryCard/CountryCard';
import countryBannerBg from '../../assets/country-section-bg.jpg';

const Home = () => {
    const touristSpots = useLoaderData();
    console.log(touristSpots)
    const eightSpot = touristSpots.slice(0, 8)
    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/country')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCountry(data)
            })
    }, [])

    return (
        <div className='max-w-6xl mx-auto'>
            <Helmet>
                <title>Abrar Tourism | Home</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <Slider></Slider>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    eightSpot.map(touristSpot => <TouristSpots touristSpot={touristSpot} key={touristSpot._id}></TouristSpots>)
                }
            </div>

            {/* Country Card */}
            <div className="hero min-h-60 rounded-xl my-8" style={{ backgroundImage: `url(${countryBannerBg})` }}>
                <div className="hero-overlay rounded-xl bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content py-12 lg:py-32">
                    <div className="">
                        <div className='flex flex-col md:flex-row items-center'>
                            <h1 className="mb-5 text-5xl font-bold text-[#FBA707]">Can you hear the outdoors calling for you
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    country.map(singleCountry => <CountryCard country={singleCountry} key={country._id}></CountryCard>)
                }
            </div>

            <MeetOurTeam></MeetOurTeam>
        </div>
    );
};

export default Home;