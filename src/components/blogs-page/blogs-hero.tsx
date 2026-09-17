import PageHero from "@/src/components/landing/page-hero";

export default function BlogsHero() {
  return (
    <PageHero
      image="/images/heroes/blogs.jpg"
      imageAlt="A notebook with a hand-drawn chart beside a ruler and pen"
      imagePosition="center 60%"
      eyebrow="Insights"
      title="Ideas worth"
      accent="building on."
      description="Perspectives from the Algotix AI team on artificial intelligence, software engineering and shipping products that last."
      primary={{ label: "Subscribe", href: "#subscribe" }}
      secondary={{ label: "Browse articles", href: "#articles" }}
    />
  );
}
