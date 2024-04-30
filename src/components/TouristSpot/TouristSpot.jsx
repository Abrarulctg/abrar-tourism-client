import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import seasonalityImg from '../../assets/seasonality.jpg';
import { CiLocationOn } from "react-icons/ci";
import TouristSpots from '../TouristSpots/TouristSpots';


const TouristSpot = () => {
    const selectedSpot = useParams();
    const [touristSpot, setTouristSpot] = useState([]);
    console.log(touristSpot)
    const [allTourstSpots, setAllTourstSpots] = useState([]);
    console.log(allTourstSpots)

    const { _id, photo, touristSpotName, country, averageCost, description, location, seasonality, totalVisit, travelTime } = touristSpot;

    useEffect(() => {
        fetch(`https://abrar-tourism-server.vercel.app/touristSpot/${selectedSpot.id}`)
            .then(res => res.json())
            .then(data => {
                setTouristSpot(data);
            })
    }, [])


    useEffect(() => {
        fetch('https://abrar-tourism-server.vercel.app/touristSpot')
            .then(res => res.json())
            .then(data => {
                setAllTourstSpots(data);
            })
    }, [])

    //filter data with country name
    const matchedTouristSpot = allTourstSpots.filter(Spot => Spot.country === touristSpot.country);
    console.log(matchedTouristSpot)


    return (
        <div className='max-w-6xl mx-auto mb-5'>
            <div className="hero min-h-96 rounded-xl my-8" style={{ backgroundImage: `url(${photo})` }}>
                <div className="hero-overlay rounded-xl bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <div className='flex flex-col md:flex-row items-center'>
                            <h1 className="mb-5 text-5xl font-bold text-[#FBA707]">{touristSpotName},</h1>
                            <span>{country}</span>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="mb-5 text-5xl font-bold text-[#FBA707]">{touristSpotName}</h1>
            <p className='text-justify mb-5'>{description}</p>
            <div className="stats shadow w-full">
                <div className="stat place-items-center">
                    <div className="stat-title font-bold">Total Visit</div>
                    <div className="stat-value text-[#002366]">{totalVisit}</div>
                    <div className="stat-desc">Per Year</div>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title font-bold">Average Cost</div>
                    <div className="stat-value text-[#002366]">${averageCost}</div>
                    <div className="stat-desc">Per day</div>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title font-bold">Travel Time</div>
                    <div className="stat-value text-[#002366]">{travelTime}</div>
                    <div className="stat-desc">Days</div>
                </div>
            </div>
            <div className="hero min-h-56 rounded-xl my-8" style={{ backgroundImage: `url(${seasonalityImg})` }}>
                <div className="hero-overlay rounded-xl bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <div className='flex flex-col md:flex-row items-center'>
                            <h1 className="mb-5 text-5xl font-bold text-[#FBA707]">Seasonality: {seasonality}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row'>
                <h1 className="mb-5 text-xl font-bold text-[#FBA707] flex items-center"><CiLocationOn /> Location:</h1>
                <h1 className="mb-5 text-xl font-bold text-[#002366] ml-2">{location}</h1>
            </div>

            {/* Relevent Tourist Spot Card */}
            <div>
                <h1 className='mb-5 text-3xl font-bold text-[#FBA707]'>Explore More of {country}</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {
                        matchedTouristSpot.map(touristSpot => <TouristSpots touristSpot={touristSpot} key={touristSpot._id}></TouristSpots>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TouristSpot;