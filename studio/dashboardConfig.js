export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '63a87a0a9883145d120aecdc',
                  title: 'Sanity Studio',
                  name: 'saneleventy-studio',
                  apiId: 'db1618da-69a3-4b95-88ca-5665cc035098'
                },
                {
                  buildHookId: '63a87a0a46200d5e3ff50159',
                  title: 'Blog Website',
                  name: 'saneleventy',
                  apiId: 'd37d9204-15a4-46a7-abe4-96af923e1c0d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nonochnein/saneleventy',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://saneleventy.netlify.app', category: 'apps'}
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
