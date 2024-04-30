import { Bounce, ToastContainer, toast } from 'react-toastify';
import { Helmet } from "react-helmet";
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateTouristSpot = () => {
    const selectedTouristSpot = useLoaderData();
    console.log(selectedTouristSpot)
    const { _id, photo, touristSpotName, country, averageCost, description, location, seasonality, totalVisit, travelTime, userEmail, userName } = selectedTouristSpot;


    // const successToast = (successMessage) => toast.success(successMessage, {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //     transition: Bounce,
    // });
    // const errorToast = (errorMessage) => toast.error(errorMessage, {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //     transition: Bounce,
    // });




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
        const updatedTouristSpot = { photo, touristSpotName, country, location, averageCost, description, seasonality, travelTime, totalVisit }
        console.log(updatedTouristSpot)


        // validation
        if (photo === "") {
            errorToast("Photo Field cannot be blank!");
            return;
        }
        if (touristSpotName === "") {
            errorToast("Tourist Spot name cannot be blank!");
            return;
        }
        if (country === "") {
            errorToast("Country Field cannot be blank!");
            return;
        }
        if (location === "") {
            errorToast("Location Field cannot be blank!");
            return;
        }
        if (averageCost === "") {
            errorToast("Average Cost cannot be blank!");
            return;
        }
        if (description === "") {
            errorToast("Description cannot be blank!");
            return;
        }
        if (seasonality === "") {
            errorToast("Seasonality cannot be blank!");
            return;
        }
        if (travelTime === "") {
            errorToast("Travel Time cannot be blank!");
            return;
        }
        if (totalVisit === "") {
            errorToast("Total Visit cannot be blank!");
            return;
        }

        //send data to server
        fetch(`https://abrar-tourism-server.vercel.app/touristSpot/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTouristSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Tourist Spot has been Updated.",
                        icon: "success"
                    });
                    form.reset();
                }

            })
        // .catch(() => {
        //     errorToast("Something went Wrong!")
        // })
    }

    return (
        <div className="max-w-6xl mx-auto">
            <ToastContainer />
            <Helmet>
                <title>Abrar Tourism | Update Tourist Spots</title>
                <meta name="description" content="Helmet application" />
            </Helmet>

            <div className='mb-6'>
                <h1 className="text-3xl font-extrabold my-4 text-center ">Update Tourist Spot</h1>
                <form onSubmit={handleUpdate}>
                    {/* form row  |  Photo URL */}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll w-full">
                            <input type="text" name="photo" className="grow" defaultValue={photo} placeholder="Photo URL" />
                        </label>

                    </div>
                    {/* form row || Tourist Spot Name and Country*/}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/2">
                            <input type="text" name="touristSpotName" className="grow" defaultValue={touristSpotName} placeholder="Tourist Spot Name" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/2">
                            <input type="text" name="country" className="grow" defaultValue={country} placeholder="Country Name" />
                        </label>

                    </div>
                    {/* form row || location and aveeeage cost*/}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/2">
                            <input type="text" name="location" className="grow" defaultValue={location} placeholder="Tourist Spot Location" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/2">
                            <input type="text" name="averageCost" className="grow" defaultValue={averageCost} placeholder="Average Cost" />
                        </label>
                    </div>
                    {/* form row || Description*/}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll w-full">
                            <input type="text" name="description" className="grow" defaultValue={description} placeholder="Description" />
                        </label>
                    </div>
                    {/* form row || Seasonality and travelTime*/}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/2">
                            <input type="text" name="seasonality" className="grow" defaultValue={seasonality} placeholder="Seasonality" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/2">
                            <input type="text" name="travelTime" className="grow" defaultValue={travelTime} placeholder="Travel Time" />
                        </label>
                    </div>
                    {/* form row || Total Visit, user Email and User Name*/}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/3">
                            <input type="text" name="totalVisit" className="grow" defaultValue={totalVisit} placeholder="Total Visit Per Year" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/3" disabled >
                            <input type="text" name="userEmail" className="grow" value={userEmail} placeholder="User Email" disabled />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/3" disabled >
                            <input type="text" name="userName" className="grow" value={userName} placeholder="User Name" disabled />
                        </label>
                    </div>
                    <input className='btn btn-outline w-' type="submit" value="Update Tourist Spot" />
                </form>
            </div>
        </div>
    );
};

export default UpdateTouristSpot;