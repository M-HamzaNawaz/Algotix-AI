import { Metadata } from "next";

import { routes } from "@/src/constants/routes";

export const metadata: Metadata = {
  title: routes.CAREERS.metaTitle,
  description: routes.CAREERS.description,
  openGraph: {
    title: routes.CAREERS.metaTitle,
    description: routes.CAREERS.description,
    url: routes.CAREERS.path,
  },
  alternates: {
    canonical: routes.CAREERS.path,
  },
};

export { default } from "@/src/containers/careers";
