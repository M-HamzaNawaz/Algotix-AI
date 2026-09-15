import Image from "next/image";
import ellipse from "@/public/ellipse.svg";
import ellipseFull from "@/public/ellipse_full.svg";
import Subscribemail from "../home/subscribemail";
interface WorkWithUsSectionProps {
  className?: string;
}

function WorkWithUsSection({ className = "" }: WorkWithUsSectionProps) {
  return (
    <div
      className={`tablet:px-44 px-2   md:pt-40 md:pb-20 bg-grid relative overflow-hidden ${className}`}
    >
      <Subscribemail />
      <div className="absolute -bottom-32 tablet:-bottom-48 -left-10 tablet:-left-20 tablet-max:hidden">
        <Image src={ellipse} alt="Ellipse" />
      </div>
      <div className="absolute -top-10 tablet:-top-20 -right-5 tablet:-right-10 rotate-180 tablet-max:hidden">
        <Image src={ellipse} alt="Ellipse" />
      </div>
      <div className="absolute top-60 tablet:top-40 right-52 tablet-max:hidden">
        <Image src={ellipseFull} alt="Ellipse" />
      </div>
    </div>
  );
}

export default WorkWithUsSection;
