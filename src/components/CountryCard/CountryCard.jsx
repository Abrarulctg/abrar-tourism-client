import React from 'react';
import './CountryCard.css';
import { Link } from 'react-router-dom';

const CountryCard = (singleCountry) => {
    // const { country } = country;
    const { _id, country, photo, description } = singleCountry.country;
    // console.log(country)


    return (
        <Link to={`/touristSpotWithSameCountry/${_id}`}>
            <div className="hero h-96 rounded-xl" style={{ backgroundImage: `url(${photo})` }}>
                <div className="hero-overlay bg-opacity-60 rounded-xl h-96"></div>
                <div className="hero-content text-center text-neutral-content countryCard">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold text-[#FBA707]">{country}</h1>
                        <p className="mb-5">{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CountryCard;