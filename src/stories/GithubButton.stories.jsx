import React from 'react';

import GithubButton from './GithubButton';

export default {
    title: 'Example/Git Button',
    component: GithubButton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        label: 'This project is open source',
        desc: 'Star and fork it on Github',
        backgroundColor: { control: 'color' },
        width:250,
        height:60,
        color: { control: 'color' },
        borderColor: { control: 'color' },
    },
  };

  const Template = (args) => <GithubButton {...args} />;
  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'This project is open source',
  desc: 'Star and fork it on Github',
  width:250,
  height:60,
};
