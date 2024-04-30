import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaPenNib } from "react-icons/fa6";
import { RiDeleteBin2Fill, RiDeleteBin2Line } from "react-icons/ri";
import { MdOutlinePageview } from "react-icons/md";
import bannerBg from '../../assets/banner-bg.jpg';
import { Helmet } from "react-helmet";
import Swal from 'sweetalert2';

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [touristSpot, setTouristSpot] = useState([]);
    // const allTouristSpot = useLoaderData();

    useEffect(() => {
        fetch('https://abrar-tourism-server.vercel.app/touristSpot')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const touristSpotMatchedWithUserEmail = data.filter(touristSpot => touristSpot.userEmail === user.email);
                setTouristSpot(touristSpotMatchedWithUserEmail);
            })
    }, []);

    // console.log(allTouristSpot)
    // console.log(touristSpotMatchedWithUserEmail)
    // setTouristSpot(touristSpotMatchedWithUserEmail)

    console.log(touristSpot)

    const handleDelete = e => {
        console.log(e)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://abrar-tourism-server.vercel.app/touristSpot/${e}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Tourist Spot has been deleted.",
                                icon: "success"
                            });
                            const remaining = touristSpot.filter(spot => spot._id !== e);
                            setTouristSpot(remaining);
                        }
                    })
            }
        });
    }

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
                touristSpot.length < 1
                    ?
                    <div className='text-center mb-5'>
                        <h1 className="text-3xl mb-5">You have not added any Tourist Spot!</h1>
                        <Link to="/addTouristSpot"><button className='btn btn-success'>Add Tourist Spot</button></Link>
                    </div>
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
                                        touristSpot.map((touristSpot, idx) =>
                                            <tr key={idx} className='hover rounded'>
                                                <th>{idx + 1}</th>
                                                <td>{touristSpot.touristSpotName}</td>
                                                <td>{touristSpot.location}</td>
                                                <td>${touristSpot.averageCost}<small>/Day</small></td>
                                                <td>{touristSpot.totalVisit} <small>/per year</small></td>
                                                <td>
                                                    <Link to={`/TouristSpot/${touristSpot._id}`}><button className='btn btn-warning py-1 px-5 mr-2' title='View'><MdOutlinePageview /></button></Link>
                                                    <Link to={`/updateTouristSpot/${touristSpot._id}`}><button className='btn btn-warning' title='Update'><FaPenNib /></button></Link>
                                                    <button onClick={() => handleDelete(touristSpot._id)} className='btn btn-error text-white ml-2' title='Delete'><RiDeleteBin2Fill /></button>
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