export type Project = {
  slug: string;
  title: string;
  description: string;
  banner: { path: string; alt: string };
};

export const projects: Project[] = [
  {
    slug: "juna",
    title: "Juna Mechanical Keyboard",
    description:
      "A 60% custom keyboard with a top mount + gasket o-ring build.",
    banner: {
      path: "/assets/img/projects/juna/file_10.avif",
      alt: "Juna keyboard render",
    },
  },
  {
    slug: "krchv",
    title: "krchv",
    description:
      "A keyboard archive site, built to preserve and showcase my collection.",
    banner: {
      path: "/assets/img/krchv_screenshot.avif",
      alt: "krchv website screenshot",
    },
  },
];
