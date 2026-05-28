import { useEffect, useState } from 'react'

type GitHubUser = {
  public_repos: number
  followers: number
  following: number
  html_url: string
  avatar_url: string
  bio: string | null
}

type GitHubRepo = {
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  fork: boolean
}

type GitHubStats = {
  user: GitHubUser | null
  repos: GitHubRepo[]
  totalStars: number
  topLanguages: { name: string; count: number }[]
  loading: boolean
  error: string | null
}

export function useGitHubStats(username: string): GitHubStats {
  const [stats, setStats] = useState<GitHubStats>({
    user: null,
    repos: [],
    totalStars: 0,
    topLanguages: [],
    loading: true,
    error: null,
  })

  useEffect(() => {
    let cancelled = false

    async function fetchStats() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
        ])

        if (!userRes.ok || !reposRes.ok) {
          throw new Error('Error al obtener datos de GitHub')
        }

        const user: GitHubUser = await userRes.json()
        const repos: GitHubRepo[] = await reposRes.json()

        // Filter out forks and calculate stats
        const ownRepos = repos.filter((r) => !r.fork)
        const totalStars = ownRepos.reduce((sum, r) => sum + r.stargazers_count, 0)

        // Count languages
        const langMap = new Map<string, number>()
        ownRepos.forEach((r) => {
          if (r.language) {
            langMap.set(r.language, (langMap.get(r.language) || 0) + 1)
          }
        })
        const topLanguages = [...langMap.entries()]
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({ name, count }))

        if (!cancelled) {
          setStats({
            user,
            repos: ownRepos.slice(0, 6), // Top 6 repos
            totalStars,
            topLanguages,
            loading: false,
            error: null,
          })
        }
      } catch (err) {
        if (!cancelled) {
          setStats((prev) => ({
            ...prev,
            loading: false,
            error: err instanceof Error ? err.message : 'Error desconocido',
          }))
        }
      }
    }

    fetchStats()
    return () => { cancelled = true }
  }, [username])

  return stats
}
