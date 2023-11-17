import type { RadioItem } from "~/types/api";

const tags: Array<RadioItem> = [
  { label: "Boys toys", value: "boys-toys" },
  { label: "Dolls", value: "dolls" },
  { label: "On sale", value: "on-sale" },
  { label: "Stuffed toys", value: "stuffed-toys" },
];

const vendors: Array<RadioItem> = [
  { label: "Barbie", value: "BARBIE" },
  { label: "Crayola", value: "CRAYOLA" },
  { label: "Disney", value: "DISNEY" },
  { label: "Digimon", value: "DIGIMON" },
  { label: "Mattel", value: "MATTEL" },
  { label: "Nerf", value: "NERF" },
  { label: "Star Wars", value: "STAR WARS" },
  { label: "Toys R Us", value: "TOYS R US" },
];

export { tags, vendors };
