import React from 'react';

const MeetOutTeam = () => {
    return (
        <div className="px-4 py-12">
            <div className="py-8 lg:mx-8 text-center border-y-2 border-dashed space-y-6">
                <h1 className="text-3xl font-bold text-[#131318]">
                    Meet Our Team
                </h1>
            </div>
            <div className="py-8 lg:mx-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-photo/portrait-optimistic-businessman-formalwear_1262-3600.jpg" alt="Team-1" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Abrarul Hoque
                            <div className="badge badge-success">CEO</div>
                            <div className="badge badge-primary">Entrepreneur</div>
                        </h2>
                        <p>
                            "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and
                            most of all, love of what you are doing or learning to do."
                        </p>
                        <div className="card-actions justify-end">
                            <a href="#">
                                <div className="badge badge-outline">Facebook</div>
                            </a>
                            <a href="">
                                <div className="badge badge-outline">Linkedin</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/tm1PHSH/f58f50.webp" alt="Team-2" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Zunaid Hossain
                            <div className="badge badge-success">CTO</div>
                            <div className="badge badge-warning">Businessman</div>
                        </h2>
                        <p>
                            "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and
                            most of all, love of what you are doing or learning to do."
                        </p>
                        <div className="card-actions justify-end">
                            <a href="#">
                                <div className="badge badge-outline">Facebook</div>
                            </a>
                            <a href="">
                                <div className="badge badge-outline">Linkedin</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src="https://t4.ftcdn.net/jpg/06/48/39/19/360_F_648391979_uMz6EwAlKNIJnK9r46UpTiM17nT8GuLl.jpg" alt="Team-3" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Mohammad Jubair
                            <div className="badge badge-primary">Manager</div>
                        </h2>
                        <p>
                            "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and
                            most of all, love of what you are doing or learning to do."
                        </p>
                        <div className="card-actions justify-end">
                            <a href="#">
                                <div className="badge badge-outline">Facebook</div>
                            </a>
                            <a href="">
                                <div className="badge badge-outline">Linkedin</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetOutTeam;