const data = {
  name: 'root',
  isFolder: true,
  items: [
    {
      name: 'public',
      isFolder: true,
      items: [
        {
          name: 'public nested 1',
          isFolder: true,
          items: [
            {
              name: 'index.html',
              isFolder: false,
            },
            {
              name: 'hello.html',
              isFolder: false,
            },
          ],
        },
        {
          name: 'public_nested_file',
          isFolder: false,
        },
      ],
    },
    {
      name: 'src',
      isFolder: true,
      items: [
        {
          name: 'components',
          isFolder: true,
          items: [
            {
              name: 'index.js',
              isFolder: false,
            },
            {
              name: 'style.css',
              isFolder: false,
            },
          ],
        },
        {
          name: 'package.json',
          isFolder: false,
        },
      ],
    },
  ],
};

export default data;
