import PageHero from "@/src/components/landing/page-hero";
import { contactData } from "@/src/containers/contact/data";

/* The address card is titled "Our address", so the rail shows the address itself. */
const rail = contactData.map((item) => ({
  label: item.link.startsWith("http") ? item.description : item.title,
  href: item.link,
}));

export default function ContactHero() {
  return (
    <PageHero
      image="/images/services/design_phase.jpg"
      imageAlt="Two Algotix AI team members planning at a whiteboard"
      eyebrow="Contact"
      title="Get in touch for quick"
      accent="support and solutions."
      description="Need help with custom solutions or have inquiries? We are here to discuss your goals and how we can bring them to life."
      primary={{ label: "Send a message", href: "#get-in-touch" }}
      secondary={{ label: "Book a meeting", href: "/meeting-request" }}
      rail={{ label: "Reach us", items: rail }}
    />
  );
}
