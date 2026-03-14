import portfolioData from '@/data/portfolio.json'

export default function Contact() {
  const { contact } = portfolioData

  const socialLinks = [
    { name: 'Email', href: `mailto:${contact.email}`, icon: '✉' },
    { name: 'LinkedIn', href: contact.linkedin, icon: 'in' },
    { name: 'GitHub', href: contact.github, icon: 'GH' },
    { name: 'Twitter', href: contact.twitter, icon: 'X' },
  ]

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
          Contact
        </h2>
        <p className="text-zinc-600 mb-8">
          Feel free to reach out for collaborations or just a friendly hello.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white border border-zinc-200 rounded-lg hover:border-zinc-300 transition-colors"
            >
              <span className="text-lg font-bold text-zinc-400 w-8 h-8 flex items-center justify-center bg-zinc-100 rounded">
                {link.icon}
              </span>
              <span className="text-zinc-700 font-medium">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}