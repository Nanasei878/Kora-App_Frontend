import { IosToggle } from ".";

export default {
  title: "Components/IosToggle",
  component: IosToggle,
  argTypes: {
    state: {
      options: ["on-its-way", "off-its-way", "off", "on"],
      control: { type: "select" },
    },
    darkMode: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    onOffLabels: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    contrast: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "on-its-way",
    darkMode: "off",
    onOffLabels: "off",
    contrast: "off",
    className: {},
  },
};
