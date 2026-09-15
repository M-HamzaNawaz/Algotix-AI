import { getTechnologies } from "@/src/containers/blogs/data";
import Image from "next/image";
import { Technology } from "@/src/containers/blogs/types";

export default function Technologies() {
  const technologies: Technology[] = getTechnologies();

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-[410px] space-y-8">
      <h2 className="font-medium text-lg leading-[100%] tracking-[0px] text-[#767676] mb-6">
        Technologies
      </h2>

      <div className="space-y-6">
        {technologies.map((tech, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="bg-white rounded-xl p-2 shadow-md w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
              <Image
                src={tech.icon}
                alt={tech.name}
                className="w-8 h-8 object-contain"
                width={32}
                height={32}
              />
            </div>

            <div>
              <h3 className="font-medium text-lg text-gray-800">
                {tech.name === "Django" ? "DJ" : tech.name}
              </h3>
              <p className="text-gray-500">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
