import { Star, GitFork, Code2, ExternalLink, Loader2, AlertCircle, Users } from 'lucide-react'
import { useGitHubStats } from '../hooks/useGitHubStats'

const GITHUB_USERNAME = 'whustafree'

export function GitHubStats() {
  const { user, repos, totalStars, topLanguages, loading, error } = useGitHubStats(GITHUB_USERNAME)

  return (
    <section id="github" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs uppercase tracking-widest text-slate-500 font-medium mb-4">
            Open Source
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">GitHub</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Mi actividad en GitHub, proyectos y contribuciones.
          </p>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-6 h-6 text-blue-400 animate-spin" />
            <span className="ml-3 text-sm text-slate-500">Cargando estadísticas...</span>
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center gap-2 py-12 text-sm text-rose-400">
            <AlertCircle className="w-4 h-4" />
            {error}
          </div>
        )}

        {!loading && !error && user && (
          <>
            {/* Stats cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {[
                { label: 'Repositorios', value: user.public_repos, icon: Code2 },
                { label: 'Estrellas', value: totalStars, icon: Star },
                { label: 'Seguidores', value: user.followers, icon: Users },
                { label: 'Lenguajes', value: topLanguages.length, icon: Code2 },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl border border-slate-800/50 bg-slate-900/30 backdrop-blur-sm text-center"
                >
                  <stat.icon className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                  <span className="block text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-xs text-slate-500">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Top languages */}
            {topLanguages.length > 0 && (
              <div className="mb-10 p-5 rounded-xl border border-slate-800/50 bg-slate-900/30 backdrop-blur-sm">
                <h3 className="text-sm font-medium text-slate-400 mb-3">Lenguajes más usados</h3>
                <div className="flex flex-wrap gap-2">
                  {topLanguages.map((lang) => (
                    <span
                      key={lang.name}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/50 text-slate-400 border border-slate-700/50"
                    >
                      {lang.name}
                      <span className="ml-1.5 text-slate-600">×{lang.count}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Recent repos */}
            {repos.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-slate-400 mb-3">Últimos repositorios</h3>
                {repos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-xl border border-slate-800/50 bg-slate-900/30 backdrop-blur-sm hover:bg-slate-900/50 hover:border-slate-700/50 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {repo.name}
                        </h4>
                        {repo.description && (
                          <p className="text-xs text-slate-500 mt-1 line-clamp-2">{repo.description}</p>
                        )}
                        <div className="flex items-center gap-3 mt-2">
                          {repo.language && (
                            <span className="text-xs text-slate-600">{repo.language}</span>
                          )}
                          {repo.stargazers_count > 0 && (
                            <span className="flex items-center gap-1 text-xs text-slate-600">
                              <Star className="w-3 h-3" /> {repo.stargazers_count}
                            </span>
                          )}
                          {repo.forks_count > 0 && (
                            <span className="flex items-center gap-1 text-xs text-slate-600">
                              <GitFork className="w-3 h-3" /> {repo.forks_count}
                            </span>
                          )}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" />
                    </div>
                  </a>
                ))}
              </div>
            )}

            <div className="text-center mt-8">
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Ver todo en GitHub
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
