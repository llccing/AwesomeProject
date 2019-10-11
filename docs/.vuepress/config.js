module.exports = {
  title: 'AwesomeProject',
  description: 'React Native实践',
  base: '/awesomeProject/',
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'https://github.com/llccing/AwesomeProject',
    nav: [
      { text: '30Days', link: '/Info/' },
      { text: 'About', link: 'https://llccing.github.io/FrontEnd/about/' },
    ],
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-132988469-2',
      }
    ]
  ]
}