import { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('pending')
    try {
      const res = await fetch('/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (e) {
      setStatus('error')
    }
  }

  return (
<section id="contact" className="w-full min-h-screen bg-lightSurface text-black py-10 px-4 flex items-center justify-center">
  <div className="w-full max-w-lg bg-white border-2 border-black p-6 rounded-lg">
    <h1 className="text-3xl uppercase tracking-[10px] font-semibold text-center mb-6">Get In Touch</h1>
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input
        className="w-full bg-white/10 px-4 py-3 border border-gray-800 rounded"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        className="w-full bg-white/10 px-4 py-3 border border-gray-800 rounded"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <textarea
        className="w-full bg-white/10 px-4 py-3 border border-gray-800 rounded"
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Message"
        rows="5"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-950 text-white hover:bg-cyan-600 py-3 font-semibold rounded"
      >
        Send
      </button>
      {status === 'success' && <p className="text-green-400 text-center mt-2">Thanks! I’ll get back to you.</p>}
      {status === 'error' && <p className="text-red-400 text-center mt-2">Something went wrong. Try again.</p>}
    </form>
  </div>
</section>

  )
}

export default Contact


