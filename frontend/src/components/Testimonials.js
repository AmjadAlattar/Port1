import { FaQuoteLeft } from 'react-icons/fa'

const Testimonials = ({ items }) => {
  return (
    <section id="testimonial" className="w-full h-full py-4 px-4 bg-lightSurface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0F1113]">Testimonials</h1>
          <div className="mt-3 inline-block h-1 w-24 bg-gradient-to-r from-primaryBlue to-primaryBlueDark rounded-full" />
          <p className="mt-4 text-gray-600">What people say about my work</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items?.map((t) => (
            <div key={t.id} className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-4">
                {t.avatar && (
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-primaryBlue" />
                )}
                <div>
                  <p className="font-semibold text-[#0F1113]">{t.name}</p>
                  {t.role && <p className="text-xs text-gray-500">{t.role}</p>}
                </div>
              </div>
              <div className="mt-4 text-gray-700 relative">
                <FaQuoteLeft className="text-primaryBlue opacity-60 absolute -top-2 -left-2" />
                <p className="pl-6">{t.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials


