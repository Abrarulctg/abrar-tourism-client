import React from 'react';
import { Helmet } from "react-helmet";
import contactImg from '../../assets/contact-img.gif';
import { useForm } from 'react-hook-form';
import './Contact.css';
import { IoMdSend } from "react-icons/io";
import { Bounce, ToastContainer, toast } from 'react-toastify';

const ContactUs = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        // console.log(data)
        successToast();
        reset();
    }
    const successToast = () => toast.success('Thank you for your message! We will get back to you soon!', {
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

    return (
        <div>
            <ToastContainer />
            <Helmet>
                <title>Abrar Tourism | Contact Us</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className='max-w-6xl mx-auto'>
                <h1 className="text-5xl text-center my-10 font-bold text-[#002366]">Get in Touch</h1>
                <div className="flex flex-col md:flex-col lg:flex-row gap-4 my-6">
                    <div className='w-full lg:w-1/2 bg-[#00246661] rounded-xl'>
                        <img src={contactImg} alt="" />
                    </div>
                    <div className='w-full lg:w-1/2 contact-form p-4 bg-[#00246606]' >
                        {/* React Hook Form`` */}
                        <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
                            {/* register your input into the hook by invoking the "register" function */}
                            <h1 className="text-xl">Your Name</h1>
                            <input type="text" className='form-control-contact input w-full' placeholder="Your Name" {...register("name", { required: true })} />
                            {errors.name && <span className='error'>Name is required</span>}

                            <h1 className="text-xl">Your Email</h1>
                            <input type="email" className='form-control-contact input w-full' placeholder="Your Email" {...register("email", { required: true })} />
                            {errors.email && <span className='error'>Email is required</span>}
                            {/* <input type="text" className='form-control input w-full h-[100px]' placeholder="Your Email" {...register("message", { required: true })} /> */}
                            <h1 className="text-xl">Your Message</h1>
                            <textarea type="text" className='form-control-contact input w-full h-[100px]' placeholder="Your Message" {...register("message", { required: true })}></textarea>
                            {errors.message && <span className='error'>Message is required</span>}


                            {/* include validation with required or other standard HTML validation rules */}
                            {/* <input {...register("email", { required: true })} /> */}
                            {/* errors will return when field validation fails  */}
                            <br />
                            <button className='btn bg-white text-[#002366] font-bold border-4 px-7 border-[#002366] hover:bg-[#002366] hover:text-white' type="submit">Send <IoMdSend /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;