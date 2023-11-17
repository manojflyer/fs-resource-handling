/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components";
import { AddIcon, LeftArrowIcon, RightArrowIcon } from "@/assets/icons";

const meta = {
  title: "Components/Buttons",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {

  // }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Button",
    variant: "primary",
  },
};

export const PrimaryLeftIcon: Story = {
  args: {
    variant: "primary",
    label: "Create resource",
    leftIcon: <AddIcon className="fill-white w-[24px] h-[24px]" />,
  },
};

export const PrimaryRightIcon: Story = {
  args: {
    variant: "primary",
    label: "Create resource",
    rightIcon: <AddIcon className="fill-white w-[24px] h-[24px]" />,
  },
};

export const PrimaryLeftRightIcon: Story = {
  args: {
    variant: "primary",
    leftIcon: <LeftArrowIcon className="fill-white w-[24px] h-[24px]" />,
    label: "Next Page",
    rightIcon: <RightArrowIcon className="fill-white w-[24px] h-[24px]" />,
  },
};

export const SecondaryLeftIcon: Story = {
  args: {
    variant: "secondary",
    label: "Create resource",
    leftIcon: <AddIcon className="fill-primaryColor w-[24px] h-[24px]" />,
  },
};

export const SecondaryRightIcon: Story = {
  args: {
    variant: "secondary",
    label: "Create resource",
    rightIcon: <AddIcon className="fill-primaryColor w-[24px] h-[24px]" />,
  },
};

export const SecondaryLeftRightIcon: Story = {
  args: {
    variant: "secondary",
    leftIcon: <LeftArrowIcon className="fill-primaryColor w-[24px] h-[24px]" />,
    label: "Next Page",
    rightIcon: (
      <RightArrowIcon className="fill-primaryColor w-[24px] h-[24px]" />
    ),
  },
};

// export const SecondaryRightIcon: Story = {
//   args: {
//     label: "Create resource",
//     rightIcon: <AddIcon className="fill-primaryColor w-[24px] h-[24px]" />,
//   },
// };

// import { AddIcon } from "@/assets/icons";
// import { Button } from "@/components";
// import { Meta, Story } from "@storybook/react";

// export default {
//   title: "Components/Button",
//   component: Button,
// } as Meta;

// const ButtonTemplate: Story = (args: any) => <Button {...args} />;

// export const Primary = ButtonTemplate.bind({});
// Primary.args = {
//   label: "Primary",
//   rightIcon: <AddIcon color="#7700C7" className="w-[24px] h-[24px]" />,
// };

// export const PrimaryLeftIcon = ButtonTemplate.bind({});
// PrimaryLeftIcon.args = {
//   label: "Primary",
//   leftIcon: <AddIcon color="#7700C7" className="w-[24px] h-[24px]" />,
// };
