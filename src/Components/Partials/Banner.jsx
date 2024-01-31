const Banner = ({ scrollY }) => {
  return (
    <div>
      <div className="relative overflow-hidden h-screen">
        <div
          className="h-full flex items-center justify-center"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat inset-0">
            <img
              src="https://i.ibb.co/JBTt1kZ/labour-man-min-1.jpg" alt="labour-man-min-1" border="0"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black-900 opacity-50"></div>
          </div>
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold">Heading</h1>
            <p className="text-lg md:text-xl mt-4 px-4">Dolor sit amet consectetur adipisicing elit. Aut deserunt vitae aliquid dolore accusamus dolor quidem sint blanditiis vel amet?</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Banner