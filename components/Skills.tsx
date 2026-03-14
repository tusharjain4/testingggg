import portfolioData from '@/data/portfolio.json'

export default function Skills() {
  const { skills } = portfolioData

  const groupedSkills: Record<string, string[]> = {}

  if (skills && skills.length > 0) {
    skills.forEach((skill: any) => {
      if (typeof skill === 'string') {
        if (!groupedSkills['General']) {
          groupedSkills['General'] = []
        }
        groupedSkills['General'].push(skill)
      } else if (skill.category) {
        if (!groupedSkills[skill.category]) {
          groupedSkills[skill.category] = []
        }
        groupedSkills[skill.category].push(skill.name || skill)
      }
    })
  }

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-8">
          Skills
        </h2>

        {skills && skills.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(groupedSkills).map(([category, skillList]) => (
              <div
                key={category}
                className="bg-white p-6 rounded-lg border border-zinc-200"
              >
                <h3 className="text-lg font-semibold text-zinc-900 mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-zinc-100 text-zinc-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-zinc-50 rounded-lg border border-zinc-200">
            <p className="text-zinc-500">Skills coming soon...</p>
          </div>
        )}
      </div>
    </section>
  )
}