import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { DocsPage } from './DocsPage';

const meta = {
  component: DocsPage,
  parameters: {
    docsStyles: true,
    chromatic: {
      disableSnapshot: true
    },
  },
} satisfies Meta<typeof DocsPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    relativeCsfPaths: ['../examples/Button.stories'],
  },
};
export const SingleStory: Story = {
  parameters: {
    relativeCsfPaths: ['../examples/DocsPageParameters.stories'],
  },
};
