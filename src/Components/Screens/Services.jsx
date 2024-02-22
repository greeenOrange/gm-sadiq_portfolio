import { FaAngleRight } from "react-icons/fa";

const Services = () => {
    return (
        <section className="bg-[#222]">
            <div className="container mx-auto">
                <div className="md:min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-center text-white font-bold text-3xl sm:pt-4 pb-20">Services</h2>
                <div className="grid md:grid-cols-3 gap-8">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#333]">
                            <img className="w-40 h-40 rounded-full mx-auto mt-8" src="https://i.ibb.co/tm8tqZt/5124111.jpg" alt="service" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-white">Labour Management</div>
                                <p className="text-[#858585] text-base">
                                Ensuring the successful selection and implementation of labor management systems is enVista’s top priority. We guarantee your new system will be delivered on time, within budget and ready for rapid deployment. With enVista’s proprietary labor management software optimizing your workforce, your company will experience improved workforce planning, reduced reliance on temporary labor.
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <button className="text-[#bac964] hover:text-white  py-2 font-normal flex items-center gap-2">
                                    Learn More <span> <FaAngleRight /> </span>
                                </button>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#333]">
                            {/* <img className="w-40 h-40 rounded-full mx-auto mt-8" src="https://i.ibb.co/JBTt1kZ/labour-man-min-1.jpg" alt="service" /> */}
                            <img className="w-40 h-40 rounded-full mx-auto mt-8" src="https://i.ibb.co/ZHqwgHg/5129415.jpg" alt="service" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-white">Labour Supply</div>
                                <p className="text-[#858585] text-base">
                                labor supply” usually means the hours of work, usually per week, offered for pay or profit. This definition therefore excludes unpaid household work and voluntary work. Research on both the theoretical and applied labor supply exploded in the 1980s and 1990s, with the work ranging from models of individual behavior in a static one-period model to dynamic multi-period models for a household.
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <button className="text-[#bac964] hover:text-white  py-2 font-normal flex items-center gap-2">
                                    Learn More <span> <FaAngleRight /> </span>
                                </button>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#333]">
                            <img className="w-40 h-40 rounded-full mx-auto mt-8" src="https://i.ibb.co/whb6q3V/5137003.jpg" alt="service" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-white">labour mobility</div>
                                <p className="text-[#858585] text-base">
                                Restrictions on labor mobility caused by the Hukou system forced individuals to register with local authorities to gain residency, thus determining where they should live and work.87 This fulfilled the system’s goal of segregating the people and creating two distinct economies (urban manufacturing and rural agriculture).
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <button className="text-[#bac964] flex items-center gap-2 hover:text-white  py-2 font-normal">
                                    Learn More <span> <FaAngleRight /> </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services