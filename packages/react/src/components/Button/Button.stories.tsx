import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary", "ghost"]
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"]
    },
    fullWidth: { control: "boolean" },
    loading: { control: "boolean" }
  },
  args: {
    children: "Click me",
    variant: "primary",
    size: "md"
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: "secondary" }
};

export const Ghost: Story = {
  args: { variant: "ghost" }
};

export const Loading: Story = {
  args: { loading: true }
};
