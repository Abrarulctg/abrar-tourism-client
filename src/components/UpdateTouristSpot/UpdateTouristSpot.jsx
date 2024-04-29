import { Bounce, ToastContainer, toast } from 'react-toastify';
import { Helmet } from "react-helmet";
import { useLoaderData } from 'react-router-dom';

const UpdateTouristSpot = () => {
    const { data } = useLoaderData();
    console.log(data)


    const successToast = (successMessage) => toast.success(successMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
    const errorToast = (errorMessage) => toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });




    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;

        const photo = form.photo.value;
        const touristSpotName = form.touristSpotName.value;
        const country = form.country.value;
        const location = form.location.value;
        const averageCost = form.averageCost.value;
        const description = form.description.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisit = form.totalVisit.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;
        const newTouristSpot = { photo, touristSpotName, country, location, averageCost, description, seasonality, travelTime, totalVisit, userEmail, userName }
        console.log(newTouristSpot)

        //send data to server
        // fetch('http://localhost:5000/touristSpot', {
        //     method: "POST",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newTouristSpot)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         // console.log(data)
        //         if (data.insertedId) {
        //             successToast("Data Updated to Successfully!")
        //             form.reset();
        //         }
        //         else {
        //             errorToast("Data not Updated to Successfully")
        //         }
        //     })
        //     .catch(() => {
        //         errorToast("Something went Wrong!")
        //     })
    }

    return (
        <div>
            <ToastContainer />
            <Helmet>
                <title>Abrar Tourism | Update Tourist Spots</title>
                <meta name="description" content="Helmet application" />
            </Helmet>

            <div>
                <h1 className="text-3xl font-extrabold my-4 text-center ">Update Tourist Spot</h1>
                <form onSubmit={handleUpdate}>
                    {/* form row  |  Photo URL */}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll w-full">
                            <input type="text" name="photo" className="" placeholder="Photo URL" />
                        </label>

                    </div>
                    {/* form row || Tourist Spot Name and Country*/}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/2">
                            <input type="text" name="touristSpotName" className="" placeholder="Tourist Spot Name" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/2">
                            <input type="text" name="country" className="grow" placeholder="Country Name" />
                        </label>

                    </div>
                    {/* form row || location and aveeeage cost*/}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/2">
                            <input type="text" name="location" className="" placeholder="Tourist Spot Location" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/2">
                            <input type="text" name="averageCost" className="grow" placeholder="Average Cost" />
                        </label>
                    </div>
                    {/* form row || Description*/}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll w-full">
                            <input type="text" name="description" className="" placeholder="Description" />
                        </label>
                    </div>
                    {/* form row || Seasonality and travelTime*/}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/2">
                            <input type="text" name="seasonality" className="" placeholder="Seasonality" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/2">
                            <input type="text" name="travelTime" className="grow" placeholder="Travel Time" />
                        </label>
                    </div>
                    {/* form row || Total Visit, user Email and User Name*/}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/3">
                            <input type="text" name="totalVisit" className="" placeholder="Total Visit Per Year" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/3">
                            <input type="text" name="userEmail" className="grow" placeholder="User Email" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/3">
                            <input type="text" name="userName" className="grow" placeholder="User Name" />
                        </label>
                    </div>
                    <input className='btn btn-block' type="submit" value="Update Tourist Spot" />
                </form>
            </div>
        </div>
    );
};

export default UpdateTouristSpot;