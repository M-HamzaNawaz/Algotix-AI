import { Metadata } from "next";
import { routes } from "@/src/constants/routes";

export const metadata: Metadata = {
  title: routes.MEETING_REQUEST.metaTitle,
  description: routes.MEETING_REQUEST.description,
  openGraph: {
    title: routes.MEETING_REQUEST.metaTitle,
    description: routes.MEETING_REQUEST.description,
    url: routes.MEETING_REQUEST.path,
  },
  alternates: {
    canonical: routes.MEETING_REQUEST.path,
  },
};

export { default } from "@/src/containers/meeting-request/index";
