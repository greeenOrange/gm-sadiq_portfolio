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
              src="https://i.ibb.co/pw06n6X/labour-management.jpg" alt="labour-man-min-1" border="0"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#212529] opacity-50"></div>
          </div>
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold">Functions of Labor Management System <span className="text-[#fcb603]">(LMS)</span></h1>
            <p className="max-w-7xl text-4xl md:text-xl mt-4 px-4">Effective human resource management has become essential for firms looking to enhance productivity and keep a competitive advantage in today's quickly changing business environment. A robust labour management system (LMS) is one of the essential elements of effective workforce management. This in-depth essay explores the many facets of LMS, emphasising its significance, characteristics, advantages, tactics for implementation, and actual case studies. Additionally, it explores emerging trends in LMS and provides valuable insights for businesses looking to optimise their workforce management practices.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Banner