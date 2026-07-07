// If deploying to https://<username>.github.io/<repo-name>, set this to your repo name.
// If deploying to https://<username>.github.io (a "username.github.io" repo), leave it as ''.
const repoName = 'my-portfolio'; // <-- change this to your GitHub repo name

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages has no image optimization server
  },
  basePath: isGithubActions ? `/${repoName}` : '',
  assetPrefix: isGithubActions ? `/${repoName}/` : '',
};

export default nextConfig;
