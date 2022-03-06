// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require('path');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

async function demoLoaderPlugin() {
  return {
    name: 'demo-loader',
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              test: /\.demo.tsx$/,
              use: {
                loader: path.resolve(__dirname, 'demo-loader.webpack.js'),
              },
            },
          ],
        },
      };
    },
  };
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'react-plot userguide',
  tagline: 'React component to display scientific plots',
  url: 'https://react-plot.zakodium.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'zakodium', // Usually your GitHub org/user name.
  projectName: 'react-plot', // Usually your repo name.
  plugins: [
    demoLoaderPlugin,
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        docsRouteBasePath: '/eln',
        indexPages: true, //because of bug: https://github.com/easyops-cn/docusaurus-search-local/issues/42
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/zakodium/react-plot-docs/tree/main/',
          sidebarItemsGenerator: async function ({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            let sidebarItems = await defaultSidebarItemsGenerator(args);
            sidebarItems = filterItems(sidebarItems);
            return raisingSingleNodes(sidebarItems);
          },
        },

        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/demo.css'),
          ],
          prism: {},
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'React Plot',
        logo: {
          alt: 'Zakodium Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/zakodium/react-plot',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/zakodium',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/zakodium/react-plot',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

const ignoredLabels = ['includes'];

function filterItems(items) {
  items = items.filter((item) => !ignoredLabels.includes(item.label));

  items.forEach((item) => {
    if (Array.isArray(item.items)) {
      item.items = filterItems(item.items);
    }
  });
  return items;
}

function raisingSingleNodes(items) {
  // we need to traverse the full hierarhy and if there is only one child items we raise it one level
  for (let parentItem of items) {
    if (parentItem && parentItem.items && parentItem.items.length) {
      for (let j = 0; j < parentItem.items.length; j++) {
        if (
          parentItem.items[j].items &&
          parentItem.items[j].items.length === 1
        ) {
          parentItem.items[j] = parentItem.items[j].items[0];
        }
      }
      raisingSingleNodes(parentItem.items);
    }
  }
  return items;
}

module.exports = config;
