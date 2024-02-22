const Contact = () => {
    return (
        <section className="">
            <div className="container mx-auto">
                <h2 className="text-center text-[#000] font-bold text-3xl md:pt-24 sm:pt-4 pb-20">Contact</h2>
                <div className="flex justify-center gap-8">
                    <div className="w-full md:w-1/2 p-4">
                        <form className="w-full bg-[#000] shadow-md rounded md:px-12 md:pt-16 md:pb-8 mb-4">
                            <div className="mb-4">
                                <input className="shadow appearance-none rounded w-full py-4 px-3 text-white bg-[#222] leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
                            </div>
                            <div className="mb-4">
                                <input className="shadow appearance-none rounded w-full py-4 px-3 text-white bg-[#222] leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
                            </div>
                            <div className="mb-4">
                                <input className="shadow appearance-none rounded w-full py-4 px-3 text-white bg-[#222] leading-tight focus:outline-none focus:shadow-outline" id="tel" type="tel" placeholder="Your Phone" />
                            </div>
                            <div className="mb-6">
                                <textarea className="shadow appearance-none rounded w-full h-32 py-4 px-3 text-white bg-[#222] leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="write a Message"></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-[#bac964] hover:bg-[#b2c251] text-white font-normal py-4 px-8 rounded-full focus:outline-none focus:shadow-outline" type="button">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="hidden md:block w-full md:w-1/2 p-4">
                        <ul className="">
                            <li className="flex flex-col gap-1 mb-5">
                                <span className="uppercase text-[#2c3e50] font-bold">Email</span>
                                site@gmail.com
                            </li>
                            <li className="flex flex-col gap-1 mb-5">
                                <span className="uppercase text-[#2c3e50] font-bold">HotLine</span>
                                +30 976 1382 9922
                            </li>
                            <li className="flex flex-col gap-1 mb-5">
                                <span className="uppercase text-[#2c3e50] font-bold">ADDRESS</span>
                                <ul>
                                    <li>San Francisco, CA
                                    </li>
                                    <li>4th Floor8 Lower</li>
                                    <li>San Francisco street, M1 50F</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact