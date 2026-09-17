import PrivacyPolicy from "@/src/components/PrivacyPolicy";
import PageIntro from "@/src/components/landing/page-intro";
import PageSection from "@/src/components/landing/page-section";

const PrivacyPolicyPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="Privacy policy"
        description="Last updated: June 12, 2025"
      />
      <PageSection>
        <PrivacyPolicy />
      </PageSection>
    </>
  );
};

export default PrivacyPolicyPage;
