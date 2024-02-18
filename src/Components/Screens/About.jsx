import React from 'react'

const About = () => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center gap-8 h-screen">
                <div className="w-full md:w-1/2 p-4">
                    <img src="https://i.ibb.co/JBTt1kZ/labour-man-min-1.jpg" alt="" />
                </div>
                <div className="flex flex-col gap-4 w-full md:w-1/2 p-4">
                    <h3 className="font-bold text-3xl">About</h3>
                    <p className="font-semibold text-blue-100">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <div>
                        <button className="bg-green-100 hover:bg-green-200 text-white font-normal py-3 px-14 rounded-full focus:outline-none focus:shadow-outline">Contact</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About