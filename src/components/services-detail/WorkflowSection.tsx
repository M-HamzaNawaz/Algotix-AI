import Image from "next/image";

const WorkflowSection = () => {
  return (
    <div className="max-w-6xl 4k:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-10 py-12 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
      <section className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl 4k:text-5xl md:text-4xl font-bold mb-8">
          Easy, Dynamic and <br />
          <span className="text-primary block mt-2">optimal workflow</span>
        </h1>
        <p className="text-sm sm:text-base 4k:text-xl text-center md:text-left   ">
          Start with a stunning homepage. Stay motivated without. Start with a
          stunning homepage, with a stunning homepage.
        </p>
      </section>

      <div className="w-full md:w-4/6">
        <Image
          src="/images/services-detail/discussion.png"
          width={600}
          height={400}
          alt="discussion"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default WorkflowSection;
