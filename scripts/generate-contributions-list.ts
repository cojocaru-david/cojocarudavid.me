import { writeFile } from "node:fs/promises";
import { Octokit } from "@octokit/core";

interface GQLResponse {
  viewer: {
    repositoriesContributedTo: {
      nodes: Repo[];
    };
  };
}

interface Repo {
  nameWithOwner: string;
  stargazerCount: number;
  description: string;
  url: string;
  languages: {
    nodes: Language[];
  };
}

interface Language {
  name: string;
}

const graphqlQuery = `query {
  viewer {
    repositoriesContributedTo(
    first: 20
    orderBy: {field: STARGAZERS, direction: DESC}
    contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]
  ) {
      nodes {
      nameWithOwner
      description
      stargazerCount
      url
      languages(first: 4, orderBy: {field: SIZE, direction: DESC}) {
        nodes {
        name
      }}
    }
  }
}
}`;

const GITHUB_USERNAME = "cojocaru-david";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const response = await octokit.graphql(graphqlQuery, {
  login: GITHUB_USERNAME,
});

const maintainerRepos = new Set(["withastro/docs"]);
const projects = new Set(["remark-code-title", "astro-layouts"]);

const authoredProjects = await Promise.all(
  Array.from(projects).map(async (repo) => {
    const { data } = await octokit.request("GET /repos/{owner}/{repo}", {
      owner: GITHUB_USERNAME,
      repo,
    });
    return {
      name: data.name,
      stars: data.stargazers_count,
      url: data.html_url,
      description: data.description,
      languages: [data.language],
      role: "author",
    };
  }),
);

const contributions = (
  response as GQLResponse
).viewer.repositoriesContributedTo.nodes
  // Filter out repos with only one language
  .filter((repo) => repo.languages.nodes.length > 1)
  .map((repo) => {
    return {
      name: repo.nameWithOwner,
      stars: repo.stargazerCount,
      url: repo.url,
      description: repo.description,
      languages: repo.languages.nodes.map((language) => language.name),
      role: maintainerRepos.has(repo.nameWithOwner)
        ? "maintainer"
        : "contributor",
    };
  });

const allProjects = authoredProjects.concat(contributions);

try {
  await writeFile(
    "./src/data/contributions.json",
    JSON.stringify(allProjects, null, 2),
  );
} catch (error) {
  console.error(error);
}
