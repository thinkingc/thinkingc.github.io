// 定义每一篇文章的 url，children值和文件路径对应。
const sidebar = {
  js: [
    {
      title: '基础',
      collapsable: false,
      children: [
        '/js/',
      ]
    },
    {
      title: '面试题',
      collapsable: false,
      children: [
        '/js/interview/is-array',
        '/js/interview/js-coding'
      ]
    }
  ],
  ts: [
    {
      title: '基础',
      collapsable: false,
      children: [
        '/ts/',
      ]
    },
    {
      title: '知识合集',
      collapsable: false,
      children: [
        '/ts/collection/decorator',
      ]
    },
    {
      title: '面试题',
      collapsable: false,
      children: [
        '/ts/interview/interface-type',
      ]
    }
  ],
  vue: [
    {
      title: '面试题',
      collapsable: false,
      children: [
        '/vue/',
        '/vue/interview-2021',
        '/vue/vue-set'
      ]
    }
  ],
  react: [
    {
      title: '面试题',
      collapsable: true,
      children: [
        '/react/interview/react17-changelog',
      ]
    },
    {
      title: 'Hooks',
      collapsable: true,
      children: [
        '/react/hooks/use-async-effect',
      ]
    },
    {
      title: 'Components',
      collapsable: true,
      children: [
        '/react/components/time-period-selector',
        '/react/components/react-selectable-fast',
        '/react/components/react-resizable',
      ]
    },
  ],
  npm: [
    {
      title: 'ast',
      collapsable: true,
      children: [
        '/npm/ast/babel',
        '/npm/ast/jscodeshift',
        '/npm/ast/recast',
      ]
    },
    {
      title: 'node',
      collapsable: true,
      children: [
        '/npm/node/dotenv',
        '/npm/node/chalk',
        '/npm/node/minimist',
        '/npm/node/yargs',
        '/npm/node/yargs-parser',
        '/npm/node/minimatch',
        '/npm/node/glob',
        '/npm/node/globby',
        '/npm/node/ora',
        '/npm/node/signale',
        '/npm/node/log-symbols',
        '/npm/node/inquirer',
        '/npm/node/prompts',
        '/npm/node/commander',
        '/npm/node/cross-spawn',
        '/npm/node/download-git-repo',
        '/npm/node/rimraf',
        '/npm/node/mkdirp',
        '/npm/node/shelljs',
        '/npm/node/execa',
        '/npm/node/got',
        '/npm/node/hyperquest',
        '/npm/node/semver',
        '/npm/node/metalsmith',
        '/npm/node/marked',
        '/npm/node/marked-terminal',
        '/npm/node/address',
        '/npm/node/get-port',
        '/npm/node/pkg-up',
        '/npm/node/read-pkg-up',
        '/npm/node/find-up',
        '/npm/node/tar-pack',
        '/npm/node/tmp',
        '/npm/node/validate-npm-package-name',
        '/npm/node/np',
        '/npm/node/tiny-warning',
        '/npm/node/tiny-invariant',
        '/npm/node/npm-run-all',
        '/npm/node/update-check',
      ]
    },
    {
      title: 'tool',
      collapsable: true,
      children: [
        '/npm/tool/chokidar',
      ]
    },
    {
      title: 'util',
      collapsable: true,
      children: [
        '/npm/util/mustache',
        '/npm/util/papaparse',
        '/npm/util/lru',
        '/npm/util/array-move',
        '/npm/util/lz-string',
        '/npm/util/copy-to-clipboard',
      ]
    },
    {
      title: 'time',
      collapsable: true,
      children: [
        '/npm/time/dayjs',
        '/npm/time/moment',
      ]
    },
  ],
  engineering: [
    {
      title: '前端工程化',
      collapsable: false,
      children: [
        '/engineering/',
        '/engineering/eslint',
        '/engineering/prettier',
      ]
    }
  ],
  arithmetic: [
    {
      title: '前端算法题库',
      collapsable: false,
      children: [
        '/arithmetic/',
        '/arithmetic/fe/is-reverse-string',
        '/arithmetic/fe/fibonacci',
      ]
    }
  ],
  network: [
    {
      title: '面试题',
      collapsable: false,
      children: [
        '/network/',
        '/network/sso'
      ]
    }
  ]
}

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '前端知识库',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: '前端学习资料整理',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: 'https://v1.vuepress.vuejs.org/hero.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'git@github.com:thinkingc/thinkingc.github.io.git',
    editLinks: true,
    docsDir: 'docs',
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'https://github.com/thinkingc/vuepress-docs',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [
      {
        text: '前端基础',
        items: [
          { text: 'JavaScript', link: '/js/' },
          { text: 'TypeScript', link: '/ts/' }
        ]
      },
      {
        text: '前端库',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Vue', link: '/vue/' },
          { text: 'React', link: '/react/' },
          { text: 'npm', link: '/npm/' },
        ]
      },
      {
        text: '工程化',
        link: '/engineering/',
      },
      {
        text: '算法与数据结构',
        ariaLabel: 'Language Menu',
        items: [
          { text: '算法', link: '/arithmetic/' },
          { text: '数据结构', link: '/data-structure/' }
        ]
      },
      {
        text: '网络和浏览器',
        link: '/network/',
      },
      {
        text: '设计模式',
        link: '/design/',
        ariaLabel: 'Language Menu',
      },
      // {
      //   text: '浏览器',
      //   link: '/browser/',
      // },
      // {
      //   text: 'VuePress',
      //   link: 'https://v1.vuepress.vuejs.org'
      // }
    ],
    sidebarDepth: 2,
    // 定义侧边栏入口
    sidebar: {
      collapsable: false,
      '/js/': sidebar.js,
      '/ts/': sidebar.ts,
      '/vue/': sidebar.vue,
      '/react/': sidebar.react,
      '/npm/': sidebar.npm,
      '/arithmetic/': sidebar.arithmetic,
      '/network/': sidebar.network,
      '/engineering/': sidebar.engineering, 
    }
  },

  smoothScroll: true,

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/nprogress',
    '@vuepress/last-updated',
    ['vuepress-plugin-code-copy', {
      align: 'bottom',
      color: '#27b1ff',
      backgroundColor: '#0075b8',
      successText: 'Copied!',
    }],
  ]
}
