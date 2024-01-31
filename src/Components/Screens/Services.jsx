import { FaAngleRight } from "react-icons/fa";

const Services = () => {
    return (
        <section className="bg-black-300">
            <div className="container mx-auto">
                <div className="md:min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-center text-white font-bold text-3xl sm:pt-4 pb-20">Services</h2>
                <div className="grid md:grid-cols-3 gap-8">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black-400">
                            <img className="w-40 h-40 rounded-full mx-auto mt-8" src="https://i.ibb.co/JBTt1kZ/labour-man-min-1.jpg" alt="service" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-white">Heading</div>
                                <p className="text-black-200 text-base">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, voluptatum!
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <button className="text-green-100 hover:text-white  py-2 font-normal flex items-center gap-2">
                                    Learn More <span> <FaAngleRight /> </span>
                                </button>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black-400">
                            <img className="w-40 h-40 rounded-full mx-auto mt-8" src="https://i.ibb.co/JBTt1kZ/labour-man-min-1.jpg" alt="service" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-white">Heading</div>
                                <p className="text-black-200 text-base">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, voluptatum!
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <button className="text-green-100 hover:text-white  py-2 font-normal flex items-center gap-2">
                                    Learn More <span> <FaAngleRight /> </span>
                                </button>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black-400">
                            <img className="w-40 h-40 rounded-full mx-auto mt-8" src="https://i.ibb.co/JBTt1kZ/labour-man-min-1.jpg" alt="service" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-white">Heading</div>
                                <p className="text-black-200 text-base">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, voluptatum!
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <button className="text-green-100 flex items-center gap-2 hover:text-white  py-2 font-normal">
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