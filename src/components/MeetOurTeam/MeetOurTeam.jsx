import React from 'react';

const MeetOutTeam = () => {
    return (
        <div class="px-4 py-12">
            <div class="py-8 lg:mx-8 text-center border-y-2 border-dashed space-y-6">
                <h1 class="text-3xl font-bold text-[#131318]">
                    Meet Our Team
                </h1>
            </div>
            <div class="py-8 lg:mx-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div class="card bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-photo/portrait-optimistic-businessman-formalwear_1262-3600.jpg" alt="Team-1" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Abrarul Hoque
                            <div class="badge badge-success">CEO</div>
                            <div class="badge badge-primary">Entrepreneur</div>
                        </h2>
                        <p>
                            "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and
                            most of all, love of what you are doing or learning to do."
                        </p>
                        <div class="card-actions justify-end">
                            <a href="#">
                                <div class="badge badge-outline">Facebook</div>
                            </a>
                            <a href="">
                                <div class="badge badge-outline">Linkedin</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/tm1PHSH/f58f50.webp" alt="Team-2" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Zunaid Hossain
                            <div class="badge badge-success">CTO</div>
                            <div class="badge badge-warning">Businessman</div>
                        </h2>
                        <p>
                            "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and
                            most of all, love of what you are doing or learning to do."
                        </p>
                        <div class="card-actions justify-end">
                            <a href="#">
                                <div class="badge badge-outline">Facebook</div>
                            </a>
                            <a href="">
                                <div class="badge badge-outline">Linkedin</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <figure><img src="https://t4.ftcdn.net/jpg/06/48/39/19/360_F_648391979_uMz6EwAlKNIJnK9r46UpTiM17nT8GuLl.jpg" alt="Team-3" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Mohammad Jubair
                            <div class="badge badge-primary">Manager</div>
                        </h2>
                        <p>
                            "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and
                            most of all, love of what you are doing or learning to do."
                        </p>
                        <div class="card-actions justify-end">
                            <a href="#">
                                <div class="badge badge-outline">Facebook</div>
                            </a>
                            <a href="">
                                <div class="badge badge-outline">Linkedin</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetOutTeam;