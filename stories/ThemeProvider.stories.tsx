import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from '../src/ThemeProvider';
import { Props } from '../src/types';

const meta: Meta = {
  title: 'ThemeProvider',
  component: ThemeProvider,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    theme: {
      type: {
        palette: {
          primary: {
            main: '#50B95D',
            dark: '#21822D',
          },
          paleBlue: '#647A8B',
          darkGrey: '#4B5B69',
          greenLight: '#F1F9F2',
          lightGrey: '#DFE3E6',
          required: {
            main: '#CA0202',
            light: '#CA020233',
          },
          primaryBlack: '#2F3B46',
          yellow: {
            main: ' #FFC82B',
            light: 'rgba(255, 200, 43, 0.2)',
          },
        },
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => <ThemeProvider {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
