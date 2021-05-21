export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60a7a1e22aeba3dd1b68977a',
                  title: 'Sanity Studio',
                  name: 'sanity-allthethings-studio',
                  apiId: '338fdddd-5dc4-4c43-ad81-e5555f2334fe'
                },
                {
                  buildHookId: '60a7a1e2708c53d402ecfb9d',
                  title: 'Blog Website',
                  name: 'sanity-allthethings',
                  apiId: '263f2067-5905-4829-8247-85f1cf13a1f8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thiagodemellobueno/sanity-allthethings',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-allthethings.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
