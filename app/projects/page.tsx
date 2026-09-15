import { Metadata } from "next";

import { routes } from "@/src/constants/routes";

export const metadata: Metadata = {
  title: routes.PROJECTS.metaTitle,
  description: routes.PROJECTS.description,
  openGraph: {
    title: routes.PROJECTS.metaTitle,
    description: routes.PROJECTS.description,
    url: routes.PROJECTS.path,
  },
  alternates: {
    canonical: routes.PROJECTS.path,
  },
};

export { default } from "@/src/containers/projects/index";
