import { Helmet } from "react-helmet";
import aboutLogo from '../../assets/about-page-logo.png';

const About = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Helmet>
                <title>Abrar Tourism | About</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="mx-3">

                <div className="flex justify-center my-10">
                    <img className="w-96" src={aboutLogo} alt="" />
                </div>
                <p className="text-justify"><span className="text-6xl font-bold text-[#FBA707]">A</span><span className="font-bold text-[#FBA707]">brar Tourism</span> is a sophisticated hospitality website that embodies the essence of luxury living and personalized service. As soon as visitors land on the homepage, they are greeted with stunning visuals of opulent accommodations nestled amidst breathtaking landscapes. The website exudes an aura of elegance and exclusivity, enticing discerning travelers seeking an unforgettable escape.
                </p>
                <p className="text-justify my-4">The homepage captivates with its sleek design and intuitive layout, offering easy navigation to various sections such as accommodations, dining, amenities, and booking options. Each section is meticulously crafted to showcase the unique offerings of Abrar Tourism, highlighting its unparalleled hospitality and commitment to exceeding guest expectations.</p>
                <p className="text-justify my-4">The accommodations page presents a curated selection of lavish suites and villas, each meticulously designed to offer the utmost comfort and luxury. From spacious bedrooms adorned with plush furnishings to private balconies offering panoramic views, every detail is thoughtfully considered to create an oasis of relaxation and indulgence.</p>
                <p className="text-justify my-4">The dining section tantalizes the senses with a tantalizing glimpse into the culinary delights awaiting guests at Abrar Tourism. Whether indulging in gourmet cuisine at the fine dining restaurant, savoring handcrafted cocktails at the stylish bar, or enjoying al fresco dining amidst lush gardens, guests are treated to a culinary journey that celebrates the finest flavors and ingredients.</p>
                <p className="text-justify my-4">In addition to its luxurious accommodations and delectable dining options, Abrar Tourism boasts an array of world-class amenities designed to enhance the guest experience. From rejuvenating spa treatments and invigorating recreational activities to bespoke concierge services and exclusive event venues, every aspect of the guest journey is carefully curated to ensure unparalleled satisfaction.</p>
                <p className="text-justify my-4">With its seamless blend of luxury, hospitality, and personalized service, "Abrar Tourism" stands as a beacon of excellence in the realm of luxury hospitality, inviting guests to embark on an unforgettable journey of indulgence and relaxation.</p>

                {/* Accordian */}
                <div className="mb-10">
                    <div className="collapse collapse-arrow bg-[#00246620] mb-3">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            What types of accommodations does Abrar Tourism offer?
                        </div>
                        <div className="collapse-content border-[#FBA707] border-x-4 rounded-2xl px-0">
                            <p className="p-5 ">Abrar Tourism offers a range of luxurious accommodations including spacious suites, private villas, and exclusive bungalows, each meticulously designed to provide the ultimate comfort and relaxation for our guests.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-[#00246620] mb-3">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            What dining options are available at Abrar Tourism?
                        </div>
                        <div className="collapse-content border-[#FBA707] border-x-4 rounded-2xl px-0">
                            <p className="p-5 ">Guests at Abrar Tourism can indulge in a variety of culinary experiences, from fine dining at our elegant restaurant showcasing gourmet cuisine, to casual al fresco meals in our lush gardens, and handcrafted cocktails at our stylish bar.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-[#00246620] mb-3">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            What amenities does Abrar Tourism provide to guests?
                        </div>
                        <div className="collapse-content border-[#FBA707] border-x-4 rounded-2xl px-0">
                            <p className="p-5 ">Abrar Tourism offers a comprehensive array of world-class amenities including a rejuvenating spa, state-of-the-art fitness center, sparkling swimming pools, tennis courts, personalized concierge services, and exclusive event venues for weddings and special occasions.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-[#00246620] mb-3">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Can Abrar Tourism assist with planning excursions and activities during our stay?
                        </div>
                        <div className="collapse-content border-[#FBA707] border-x-4 rounded-2xl px-0">
                            <p className="p-5 ">Yes, our dedicated concierge team at Abrar Tourism is happy to assist guests with planning excursions, arranging transportation, and recommending activities to explore the surrounding area, ensuring a memorable and enriching experience during your stay.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-[#00246620] mb-3">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Is Abrar Tourism suitable for hosting events or business meetings?
                        </div>
                        <div className="collapse-content border-[#FBA707] border-x-4 rounded-2xl px-0">
                            <p className="p-5 ">Absolutely! Abrar Tourism offers versatile event spaces and conference facilities equipped with state-of-the-art technology, perfect for hosting weddings, corporate retreats, seminars, and other special events. Our experienced event planners are on hand to ensure every detail is taken care of.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-[#00246620] mb-3">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            What measures does Abrar Tourism take to ensure the safety and well-being of guests?
                        </div>
                        <div className="collapse-content border-[#FBA707] border-x-4 bg-gray-100 rounded-2xl px-0">
                            <p className="p-5">The safety and well-being of our guests are our top priorities. Abrar Tourism adheres to strict hygiene and cleanliness protocols, and our staff undergo regular training to uphold the highest standards of cleanliness and sanitation throughout the property.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-[#00246620] mb-3">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            How can I make a reservation at Abrar Tourism?
                        </div>
                        <div className="collapse-content border-[#FBA707] border-x-4 bg-gray-100 rounded-2xl px-0">
                            <p className="p-5">Making a reservation at Abrar Tourism is easy! You can book directly through our website using our secure online booking system, or you can contact our reservations team via phone or email for personalized assistance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;