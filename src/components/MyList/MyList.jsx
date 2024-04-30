import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaPenNib } from "react-icons/fa6";
import { RiDeleteBin2Fill, RiDeleteBin2Line } from "react-icons/ri";
import { MdOutlinePageview } from "react-icons/md";
import bannerBg from '../../assets/banner-bg.jpg';
import { Helmet } from "react-helmet";

const MyList = () => {
    const { user } = useContext(AuthContext);

    const allTouristSpot = useLoaderData();
    console.log(allTouristSpot)

    const touristSpotMatchedWithUserEmail = allTouristSpot.filter(touristSpot => touristSpot.userEmail === user.email);
    console.log(touristSpotMatchedWithUserEmail)
    return (
        <div className='max-w-6xl mx-auto'>
            <Helmet>
                <title>Abrar Tourism | My Added Tourist Spot</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div>
                <div className="hero min-h-60 rounded-xl my-8" style={{ backgroundImage: `url(${bannerBg})` }}>
                    <div className="hero-overlay rounded-xl bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <div className='flex flex-col md:flex-row items-center'>
                                <h1 className="mb-5 text-5xl font-bold text-[#FBA707]">My Added Tourist Spots</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {
                touristSpotMatchedWithUserEmail.length < 1
                    ?
                    "You have not added any Tourist Spot"
                    :
                    <div>
                        <div className="overflow-x-auto mb-4">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr className='bg-[#b0c4dd9a] text-black text-center rounded-lg'>
                                        <th></th>
                                        <th>Tourist Spot Name</th>
                                        <th>Location</th>
                                        <th>Average Cost</th>
                                        <th>Total Visit</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        touristSpotMatchedWithUserEmail.map((touristSpot, idx) =>
                                            <tr key={idx} className='hover rounded'>
                                                <th>{idx + 1}</th>
                                                <td>{touristSpot.touristSpotName}</td>
                                                <td>{touristSpot.location}</td>
                                                <td>${touristSpot.averageCost}<small>/Day</small></td>
                                                <td>{touristSpot.totalVisit} <small>/per year</small></td>
                                                <td>
                                                    <Link to={`/TouristSpot/${touristSpot._id}`}><button className='btn btn-warning py-1 px-5 mr-2' title='View'><MdOutlinePageview /></button></Link>
                                                    <button className='btn btn-warning'><FaPenNib /></button>
                                                    <button className='btn btn-error text-white ml-2'><RiDeleteBin2Fill /></button>
                                                </td>
                                            </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
            }

        </div>
    );
};

export default MyList;