import React from 'react';
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from 'react-router-dom';
import TouristSpots from '../TouristSpots/TouristSpots';
import bannerBg from '../../assets/banner-bg.jpg';
import { FaEye } from 'react-icons/fa';

const AllTouristSpot = () => {
    const allTouristSpot = useLoaderData();

    return (
        <div className='max-w-6xl mx-auto'>
            <Helmet>
                <title>Abrar Tourism | All Tourist Spot</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div>
                <div className="hero min-h-96 rounded-xl my-8" style={{ backgroundImage: `url(${bannerBg})` }}>
                    <div className="hero-overlay rounded-xl bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <div className='flex flex-col md:flex-row items-center'>
                                <h1 className="mb-5 text-5xl font-bold text-[#FBA707]">Explore All Tourist Spots</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto'>
                {
                    allTouristSpot.map(touristSpot => <div>
                        <div className="card card-compact bg-base-100 shadow-xl mb-4">
                            <figure>
                                <div className="hero rounded-xl" style={{ backgroundImage: `url('${touristSpot.photo}')` }}>
                                    <div className="hero-overlay rounded-xl bg-opacity-60"></div>
                                    <div className="hero-content my-10 text-center text-neutral-content py-10">
                                        <div className="">
                                            <span className='flex items-baseline justify-center'>
                                                <h1 className="text-4xl font-bold text-[#fb8d07]">{touristSpot.touristSpotName} </h1>
                                                <p>, {touristSpot.country}</p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <div className="card-body">
                                <div className='flex justify-between'>
                                    <p className=''>Average Cost: ${touristSpot.averageCost}/ day</p>
                                    <div>
                                        <p className='flex items-center'><FaEye /> <span className='ml-2'>{touristSpot.totalVisit}</span>/Year</p>
                                    </div>
                                </div>
                                <p className=''>Travel Time: {touristSpot.travelTime}</p>
                                <p className=''>Seasonality: {touristSpot.seasonality}</p>
                                <div className="card-actions justify-center my-4">
                                    <Link to={`/TouristSpot/${touristSpot._id}`}>
                                        <button className="btn btn-primary">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;