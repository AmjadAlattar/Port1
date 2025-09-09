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
    <section id="contact" className="w-full h-full bg-black text-white py-28 px-4">
      <h1 className="text-3xl uppercase tracking-[10px] font-semibold text-center">Contact</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-10 grid gap-4">
        <input className="bg-white/10 px-4 py-3" name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        <input className="bg-white/10 px-4 py-3" type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <textarea className="bg-white/10 px-4 py-3" name="message" value={form.message} onChange={handleChange} placeholder="Message" rows="5" required />
        <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 py-3 font-semibold">Send</button>
        {status === 'success' && <p className="text-green-400">Thanks! I’ll get back to you.</p>}
        {status === 'error' && <p className="text-red-400">Something went wrong. Try again.</p>}
      </form>
    </section>
  )
}

export default Contact


