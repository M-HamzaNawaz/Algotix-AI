import { Metadata } from "next";

import { routes } from "@/src/constants/routes";

export const metadata: Metadata = {
  title: routes.ABOUT_PAGE.metaTitle,
  description: routes.ABOUT_PAGE.description,
  openGraph: {
    title: routes.ABOUT_PAGE.metaTitle,
    description: routes.ABOUT_PAGE.description,
    url: routes.ABOUT_PAGE.path,
  },
  alternates: {
    canonical: routes.ABOUT_PAGE.path,
  },
};

export { default } from "@/src/containers/about";
