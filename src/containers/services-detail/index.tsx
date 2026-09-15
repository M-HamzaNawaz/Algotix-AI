import GetInTouchForm from "@/src/components/about-us/GetInTouchForm";
import BenefitsSection from "@/src/components/about/BenefitsSection";
import EmailSubscribe from "@/src/components/services-detail/EmailSection";
import ServiceDetailSection from "@/src/components/services-detail/ServiceDetailSection";
import Image from "next/image";
import React from "react";
import WorkflowSection from "@/src/components/services-detail/WorkflowSection";
import Strategy from "../../components/services-detail/Strategy";
import { ourServiceData } from "../services/data";
import HeroServiceDetail from "@/src/components/services-detail/HeroServiceDetail";

type tParams = Promise<{ slug: string }>;

const ServicesDetail = async (props: { params: tParams }) => {
  const { slug } = await props.params;
  const service = ourServiceData.find((p) => p.slug === slug);

  if (!service) {
    return <p>service not found</p>;
  }
  return (
    <div className="mx-auto overflow-hidden">
      <HeroServiceDetail service={service} />
      <WorkflowSection />
      <Strategy service={service} />
      <ServiceDetailSection />
      <EmailSubscribe />
      <div className="mt-10">
        <Image
          src="/images/service-detail/Perspective-App-Screen.png"
          alt="Bottom Banner"
          layout="responsive"
          width={1300}
          height={52}
          className="w-full"
        />
      </div>
      <BenefitsSection />
      <GetInTouchForm />
    </div>
  );
};

export default ServicesDetail;
