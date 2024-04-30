import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { FaEye } from 'react-icons/fa6';


const TouristSpotWithSameCountry = () => {
    const selectedCountryId = useParams();
    const { countryData, allTouristSpotData, allCountryNameData } = useLoaderData();
    // console.log(countryData)

    const matchedCountries = allTouristSpotData.filter(touristSpot => touristSpot.country === countryData.country);

    // console.log(allTouristSpotData)
    // console.log(matchedCountries)



    return (
        <div className='max-w-6xl mx-auto'>
            <Helmet>
                <title>Abrar Tourism | {`Tourist Spot of ${countryData.country}`}</title>
                <meta name="description" content="Helmet application" />
            </Helmet>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    matchedCountries.map(touristSpot => <div key={touristSpot._id}>
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
                                <p className='mb-4'>{touristSpot.description.slice(0, 180)}...</p>

                                <div className='flex justify-between'>
                                    <p className=''>Average Cost: ${touristSpot.averageCost}/ day</p>
                                    <div>
                                        <p className='flex items-center'><FaEye /> <span className='ml-2'>{touristSpot.totalVisit}</span>/Year</p>
                                    </div>
                                </div>
                                <p className=''>Travel Time: {touristSpot.travelTime}</p>
                                <p className=''>Seasonality: {touristSpot.seasonality}</p>
                                <p>Located at: {touristSpot.location}</p>
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

export default TouristSpotWithSameCountry;