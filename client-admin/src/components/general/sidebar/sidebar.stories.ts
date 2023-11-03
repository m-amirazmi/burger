import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./sidebar";

const meta = {
  title: "General/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {},
};
