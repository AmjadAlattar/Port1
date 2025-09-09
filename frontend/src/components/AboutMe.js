const AboutMe = ({ profile, skills }) => {
  return (
    <section id="about" className="w-full h-full py-24 px-4 bg-white text-[#0F1113]">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <h1 className="text-3xl uppercase tracking-[6px] font-extrabold text-center">A Story about me.</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-2">About</h3>
            <p className="text-gray-600">
              I'm <span className="font-bold text-[#0F1113]">{profile?.full_name || 'Your Name'}</span>, a
              <span className="font-bold text-[#0F1113]"> {profile?.role || 'Professional'}</span>.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-2">Bio</h3>
            <p className="text-gray-600">{profile?.bio || 'Add your bio in the admin panel.'}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <ul className="text-gray-600 space-y-1">
              {profile?.email && <li>Email: {profile.email}</li>}
              {profile?.website && <li>Website: {profile.website}</li>}
              {profile?.location && <li>Location: {profile.location}</li>}
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills?.map((s) => (
              <div key={s.id} className="bg-white border border-gray-200 rounded-md p-4 text-center shadow-sm">
                <span className="font-semibold">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe


