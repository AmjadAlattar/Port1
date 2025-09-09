const Works = ({ items }) => {
  return (
    <section id="portfolio" className="w-full h-full bg-[#110a25ff] text-white py-28">
      <h1 className="text-3xl uppercase tracking-[10px] font-semibold text-center">Featured Works.</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 mt-16 px-6">
        {items?.map((p) => (
          <div key={p.id} className="w-full h-[300px] md:h-[480px] relative overflow-hidden group">
            <img className="w-full h-full object-cover scale-125 group-hover:scale-100 duration-500" src={p.image} alt={p.title} />
            <div className="absolute w-full h-[480px] left-0 top-0">
              <div className="w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
                <h1 className="text-2xl text-center font-bold bg-designColor text-black px-6 py-2 w-60 absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{p.title}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Works


