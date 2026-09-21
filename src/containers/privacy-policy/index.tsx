import PrivacyPolicy from "@/src/components/PrivacyPolicy";
import PageHero from "@/src/components/landing/page-hero";
import PageSection from "@/src/components/landing/page-section";

/** Privacy policy in the landing recipe: photo hero, then the policy text. */
const PrivacyPolicyPage = () => {
  return (
    <>
      <PageHero
        image="/images/heroes/privacy.jpg"
        imageAlt="A person signing a document at a desk"
        imagePosition="center 45%"
        eyebrow="Legal"
        title="Privacy"
        accent="policy."
        description="How Algotix AI collects, uses and protects your information when you use our website and services. Last updated: June 12, 2025."
        primary={{ label: "Read the policy", href: "#policy" }}
        secondary={{ label: "Contact us", href: "/contact" }}
      />
      <PageSection id="policy">
        <PrivacyPolicy />
      </PageSection>
    </>
  );
};

export default PrivacyPolicyPage;
