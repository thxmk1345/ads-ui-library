import type { Meta, StoryObj } from "@storybook/react";
import { Button, type ButtonProps } from "./Button";
import * as Icons from "../../icons";

type IconName = keyof typeof Icons;

const iconOptions = ["None", ...Object.keys(Icons)];

type ButtonStoryProps = ButtonProps & {
  leftIconName?: IconName;
  rightIconName?: IconName;
};

const meta: Meta<ButtonStoryProps> = {
  title: "Components/Button",
  component: Button,

  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "neutral", "success", "error", "warning"],
    },

    tone: {
      control: "inline-radio",
      options: ["solid", "soft", "outline", "ghost"],
    },

    status: {
      control: "inline-radio",
      options: ["default", "disabled"],
    },

    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },

    fullWidth: { control: "boolean" },
    loading: { control: "boolean" },

    leftIconName: {
      name: "Left Icon",
      control: "select",
      options: iconOptions,
    },

    rightIconName: {
      name: "Right Icon",
      control: "select",
      options: iconOptions,
    },
  },

  args: {
    children: "Click me",
    variant: "primary",
    tone: "solid",
    status: "default",
    size: "md",
  },

  render: ({ leftIconName, rightIconName, ...args }) => {
    const LeftIcon = leftIconName ? (Icons[leftIconName] as React.ComponentType<any>) : undefined;

    const RightIcon = rightIconName
      ? (Icons[rightIconName] as React.ComponentType<any>)
      : undefined;

    return (
      <Button
        {...args}
        leftIcon={LeftIcon ? <LeftIcon /> : undefined}
        rightIcon={RightIcon ? <RightIcon /> : undefined}
      />
    );
  },
};

export default meta;

type Story = StoryObj<ButtonStoryProps>;

export const Standard: Story = {};
