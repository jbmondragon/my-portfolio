const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserSiteRepo = repositoryName.endsWith('.github.io');
const basePath = isGithubActions && repositoryName && !isUserSiteRepo ? `/${repositoryName}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages has no image optimization server
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
};

export default nextConfig;
