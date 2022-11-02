module.exports = {
  repository: 'https://github.com/kinjalgiridev/diy-tools',
  bugs: 'https://github.com/kinjalgiridev/diy-tools/issues',

  meta: [
    { internal: true, to: '/about', label: 'About' },
    {
      href: 'https://github.com/kinjalgiridev/diy-tools/issues',
      label: 'Report issue',
    },
    {
      href: 'https://github.com/kinjalgiridev/diy-tools/commits/DIY-0001/CHANGELOG.md',
      label: 'Changelog',
    },
  ],

  tools: [
    {
      link: '/triangle-generator',
      name: 'Triangle generator',
      description: 'Generate css triangles styles for elements and pseudo-elements',
    },

    {
      link: '/color-shades-generator',
      name: 'Color shades generator',
      description: 'Generate tints and shades of a given color',
    },

    {
      link: '/gradient-generator',
      name: 'Gradient generator',
      description: 'Generate linear and radial css gradients',
    },

    {
      link: '/avatar-generator',
      name: 'Avatar generator',
      description: 'Generate avatar and modify with lots of properties',
    },

    {
      link: '/page-dividers',
      name: 'Page dividers',
      description: 'Tool to generate page dividers with css and svg images',
    },

    {
      link: '/svg-compressor',
      name: 'SVG compressor',
      description:
        'Compress SVG images with SVGO tool, convert to react component immediately after if needed',
    },

    {
      link: '/svg-to-jsx',
      name: 'SVG → JSX',
      description:
        'Convert SVG icons and illustrations to react components (or components for other libraries with JSX support)',
    },

    {
      link: '/b64-encoding',
      name: 'Base64 encoding',
      description: 'Convert images or files to base64, generate styles to use as background image',
    },

    {
      link: '/b64-decoding',
      name: 'Base64 decoding',
      description: 'Decode base64 images or files, generate styles to use as background image',
    },

    {
      link: '/fake-data-generator',
      name: 'Fake data generator',
      description:
        'Generate wide variety of realistic fake data: address, avatars, names, phones...',
    },

    {
      link: '/password-generator',
      name: 'Password generator',
      description:
        'Generate wide variety of passwords',
    },
    
    {
      link: '/html-symbols',
      name: 'Symbols collection',
      description:
        'Collection of commonly used html symbols: arrows, marks, currency signs and many others',
    },

    {
      link: '/lorem-ipsum',
      name: 'Lorem ipsum',
      description: 'Generate different kinds of lorem ipsum text',
    },

    {
      link: '/css-cursors',
      name: 'CSS cursors',
      description: 'All existing CSS cursor property values collection',
    },

    {
      link: '/events-keycode',
      name: 'Keyboard events codes',
      description: 'JavaScript events keycode values',
    },
  ],
};
