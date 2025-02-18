// @ts-check
/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'tRPC',
  tagline: 'Move Fast and Break Nothing.\nEnd-to-end typesafe APIs made easy.',
  url: 'https://trpc.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'trpc', // Usually your GitHub org/user name.
  projectName: 'trpc', // Usually your repo name.
  themeConfig: {
    disableSwitch: false,
    respectPrefersColorScheme: true,
    image: 'https://assets.trpc.io/www/trpc-open-graph.png',
    prism: {
      theme: require('prism-react-renderer/themes/vsDark'),
    },
    algolia: {
      appId: 'BTGPSR4MOE',
      apiKey: 'ed8b3896f8e3e2b421e4c38834b915a8',
      indexName: 'trpc',
      // contextualSearch: true,
      // searchParameters: {},
    },
    announcementBar: {
      id: 'v10',
      content:
        "🚀 You are looking at tRPC <strong>version 10</strong>! Read the <a href='/docs/v10/migrate-from-v9-to-v10'>migration guide</a> if you're currently using tRPC v9",
      backgroundColor: 'var(--ifm-color-primary-dark)',
      textColor: '#ffffff',
      isCloseable: true,
    },
    navbar: {
      title: 'tRPC',
      logo: {
        alt: 'tRPC logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs',
          label: 'Docs',
          activeBaseRegex: 'docs(/?)$',
        },
        {
          to: 'docs/quickstart',
          label: 'Quickstart',
        },
        {
          to: 'docs/awesome-trpc',
          label: 'Awesome tRPC Collection',
        },
        {
          to: 'docs/nextjs',
          label: 'Usage with Next.js',
        },
        {
          href: 'https://github.com/trpc/trpc',
          position: 'right',
          className: 'header-social-link header-github-link',
          'aria-label': 'GitHub',
        },
        {
          href: 'https://twitter.com/trpcio',
          position: 'right',
          className: 'header-social-link header-twitter-link',
          'aria-label': 'Twitter',
        },
        {
          href: 'https://trpc.io/discord',
          position: 'right',
          className: 'header-social-link header-discord-link',
          'aria-label': 'Discord',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs',
            },
            {
              label: 'Usage with Next.js',
              to: 'docs/nextjs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/trpc/trpc/tree/next',
              className: 'flex items-center',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/alexdotjs',
              className: 'flex items-center',
            },
            {
              label: 'Discord',
              href: 'https://trpc.io/discord',
              className: 'flex items-center',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/trpc/trpc/tree/next',
              className: 'flex items-center',
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  plugins: [
    async function myPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS, AutoPrefixer & CSSNano.
          /* eslint-disable @typescript-eslint/no-var-requires */
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          if (process.env.NODE_ENV === 'production') {
            postcssOptions.plugins.push(require('cssnano'));
          }
          /* eslint-enable @typescript-eslint/no-var-requires */
          return postcssOptions;
        },
      };
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          lastVersion: 'current',
          // disableVersioning: true,
          // onlyIncludeVersions: ['9.x'],
          versions: {
            current: {
              label: '10.x',
              // path: 'v10',
              badge: true,
              className: 'v10',
              banner: 'none',
            },
            '9.x': {
              label: '9.x',
              path: 'v9',
              badge: true,
              className: 'v9',
              banner: 'unmaintained',
            },
          },
          // includeCurrentVersion: false,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/trpc/trpc/tree/next/www/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/trpc/trpc/tree/next/www/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-198119985-2',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
      },
    ],
    [
      'docusaurus-preset-shiki-twoslash',
      {
        // Not sure how reliable this path is (it's relative from the preset package)?
        // None of the light themes had good support for `diff` mode, so had to patch my own theme
        themes: ['../../../../../../www/min-light-with-diff', 'nord'],
      },
    ],
  ],
  scripts: [
    {
      async: true,
      src: 'https://platform.twitter.com/widgets.js',
      charSet: 'utf-8',
    },
  ],
  clientModules: [
    require.resolve('./docusaurus.twitterReload.js'),
    require.resolve('./docusaurus.preferredTheme.js'),
  ],
};
