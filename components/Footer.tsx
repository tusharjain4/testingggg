import portfolioData from '@/data/portfolio.json'

export default function Footer() {
  const { name } = portfolioData
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-zinc-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {year} {name}. All rights reserved.
          </p>
          <p className="text-zinc-400 text-sm">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}