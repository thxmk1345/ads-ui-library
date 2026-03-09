import type { Meta, StoryObj } from "@storybook/react";
import { IconButton, type IconButtonProps } from "./IconButton";
import * as Icons from "../../icons";

type IconName = keyof typeof Icons;

const iconOptions = Object.keys(Icons);

type StoryProps = IconButtonProps & {
  iconName?: IconName;
};

const meta: Meta<StoryProps> = {
  title: "Components/IconButton",
  component: IconButton,

  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "neutral", "success", "error", "warning"],
    },

    tone: {
      control: "inline-radio",
      options: ["solid", "soft", "outline", "ghost"],
    },

    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },

    iconName: {
      name: "Icon",
      control: "select",
      options: iconOptions,
    },
  },

  args: {
    variant: "primary",
    tone: "solid",
    size: "md",
    iconName: "AddCircle",
  },

  render: ({ iconName, ...args }) => {
    const Icon = iconName ? (Icons[iconName] as React.ComponentType<any>) : undefined;

    return <IconButton {...args} icon={Icon ? <Icon /> : undefined} />;
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Standard: Story = {};
