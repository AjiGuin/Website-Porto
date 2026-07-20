import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Check, Loader2, Mail, MapPin, Send, User } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import SocialIcon from './SocialIcon';
import { socialLinks, profile } from '../data/socials';

type Status = 'idle' | 'sending' | 'sent';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [status, setStatus] = useState<Status>('idle');

  const validate = () => {
    const next: Partial<typeof form> = {};
    if (!form.name.trim()) next.name = 'Nama wajib diisi';
    if (!form.email.trim()) next.email = 'Email wajib diisi';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Format email tidak valid';
    if (!form.message.trim()) next.message = 'Pesan tidak boleh kosong';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    // NOTE: no backend wired up yet. Replace this simulated delay with a real
    // call to your email service (e.g. EmailJS, Formspree, or your own API route).
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3500);
    }, 1100);
  };

  const inputClass =
    'w-full rounded-xl border bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-mist focus:border-ink';

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          sheet="Sheet 06 — Kontak"
          title="Punya proyek yang perlu digambar?"
          description="Isi form di bawah atau hubungi saya langsung lewat salah satu kanal berikut."
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-14">
          <Reveal className="md:col-span-3">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                  Nama
                </label>
                <div className="relative">
                  <User size={16} strokeWidth={1.5} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-mist" />
                  <input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Nama lengkap Anda"
                    className={`${inputClass} pl-11 ${errors.name ? 'border-red-300' : 'border-line-strong'}`}
                  />
                </div>
                {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                  Email
                </label>
                <div className="relative">
                  <Mail size={16} strokeWidth={1.5} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-mist" />
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="nama@email.com"
                    className={`${inputClass} pl-11 ${errors.email ? 'border-red-300' : 'border-line-strong'}`}
                  />
                </div>
                {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Ceritakan sedikit tentang proyek Anda..."
                  className={`${inputClass} resize-none ${errors.message ? 'border-red-300' : 'border-line-strong'}`}
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={status !== 'idle'}
                data-cursor-hover
                whileTap={{ scale: 0.98 }}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 font-body text-sm font-medium text-paper transition-opacity disabled:opacity-70"
              >
                {status === 'idle' && (
                  <>
                    <Send size={15} strokeWidth={1.75} /> Kirim Pesan
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <Loader2 size={15} className="animate-spin" /> Mengirim...
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <Check size={15} strokeWidth={1.75} /> Pesan Terkirim
                  </>
                )}
              </motion.button>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-line-strong p-7">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-steel">Kontak Langsung</p>
                <div className="mt-5 flex flex-col gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      data-cursor-hover
                      className="flex items-center gap-3 rounded-xl border border-transparent p-2.5 text-sm text-ink transition-colors hover:border-line-strong"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line-strong">
                        <SocialIcon id={social.id} size={16} />
                      </span>
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 border-t border-line pt-6 font-mono text-xs text-mist">
                <MapPin size={14} strokeWidth={1.5} />
                {profile.location}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
