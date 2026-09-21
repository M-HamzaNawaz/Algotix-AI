import type { Metadata } from "next";
import { notFound } from "next/navigation";

/* Unknown URLs land on this catch-all. It carries the same metadata as
   app/not-found.tsx, otherwise the tab falls back to the home page's title
   once the page hydrates. */
export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you are looking for does not exist or has moved.",
  robots: { index: false, follow: true },
};

const NotFoundPage: React.FC = () => {
  notFound();
};

export default NotFoundPage;
