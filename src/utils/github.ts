const cache = new Map<string, { stars: number; expires: number }>();

export async function getGitHubStars(repo: string): Promise<number> {
  const cacheKey = `github-stars-${repo}`;
  const cached = cache.get(cacheKey);

  if (cached && cached.expires > Date.now()) {
    return cached.stars;
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`);

    if (!response.ok) {
      console.error(`Failed to fetch repo data: ${response.statusText}`);
      return 0;
    }

    const data = await response.json();
    const stars = data.stargazers_count;

    cache.set(cacheKey, { stars, expires: Date.now() + 20 * 60 * 1000 });

    return stars;
  } catch (error) {
    console.error("Error fetching GitHub stars:", error);
    return 0;
  }
}

export async function getGitHubRepoData(
  repos: string[]
): Promise<Record<string, number>> {
  const result: Record<string, number> = {};

  const promises = repos.map(async (repo) => {
    result[repo] = await getGitHubStars(repo);
  });

  await Promise.all(promises);
  return result;
}
