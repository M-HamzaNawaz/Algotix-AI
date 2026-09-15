interface Technologies {
  name: string;
  logo: string;
  colorFrom: string;
  colorTo: string;
  width: string;
  height: string;
  className: string;
  ImageWidth: number;
  ImageHeight: number;
}

export const technologies: Technologies[] = [
  {
    name: ".NET Core",
    logo: "/images/hero/dotnet.png",
    colorFrom: "from-primary",
    colorTo: "to-purple-500",
    width: "w-[198px] laptop:[110px] laptop-lg:w-[198px] desktop-lg:w-[250px]",
    height: "h-[111px] desktop-lg:h-[140px]",
    className:
      "mt-10  tablet:right-1 tablet-lg:right-5 laptop-lg:right-1 desktop-lg:right-14",
    ImageWidth: 75,
    ImageHeight: 49,
  },
  {
    name: "Laravel",
    logo: "/images/hero/laravel.png",
    colorFrom: "from-primary",
    colorTo: "to-orange-500",
    width: "w-[111px] desktop-lg:w-[140px]",
    height: "h-[198px] desktop-lg:h-[220px]",
    className:
      "tablet:bottom-1 tablet-lg:left-10 laptop-lg:left-0 laptop-lg:bottom-1 desktop-lg:-left-10 desktop-lg:bottom-2",
    ImageWidth: 156,
    ImageHeight: 183,
  },
  {
    name: "Angular",
    logo: "/images/hero/angular.png",
    colorFrom: "from-primary",
    colorTo: "to-[#B62F31]",
    width: "w-[110px] desktop-lg:w-[140px]",
    height: "h-[110px] desktop-lg:h-[140px]",
    className:
      "absolute tablet-sm:top-[42%] tablet-sm:-left-20 tablet-lg:left-4 tablet-lg:top-[42%]  laptop-lg:top-[42%] laptop-lg:-left-20 desktop-lg:top-[32%] desktop-lg:-left-[55%] ",
    ImageWidth: 55,
    ImageHeight: 60,
  },
  {
    name: "React",
    logo: "/images/hero/react.png",
    colorFrom: "from-primary",
    colorTo: "to-[#02DEF4]",
    width: "w-[111px] desktop-lg:w-[140px]",
    height: "h-[198px] desktop-lg:h-[220px]    ",
    className:
      "absolute  tablet-sm:left-20 tablet-lg:left-9 laptop-lg:left-20 desktop-lg:left-12",
    ImageWidth: 67,
    ImageHeight: 67,
  },
  {
    name: "Django",
    logo: "/images/hero/django.png",
    colorFrom: "from-primary",
    colorTo: "to-teal-500",
    width:
      "w-48 laptop:w-40 laptop:left-2 laptop-lg:w-48 desktop-lg:w-[250px] desktop-lg:-left-10",
    height: "h-32 laptop:h-28 desktop-lg:h-[140px]",
    className: "",
    ImageWidth: 44,
    ImageHeight: 56,
  },
  {
    name: "Go",
    logo: "/images/hero/go.png",
    colorFrom: "from-primary",
    colorTo: "to-[#05B0DB]",
    width: "w-[110px] desktop-lg:w-[140px]",
    height: "h-[110px] desktop-lg:h-[140px]",
    className: "absolute  tablet-lg:left-8 laptop-lg:left-2 desktop-lg:-left-8",
    ImageWidth: 80,
    ImageHeight: 72,
  },
  {
    name: "AWS",
    logo: "/images/hero/aws.png",
    colorFrom: "from-primary",
    colorTo: "to-[#FF9911],",
    width: "w-[110px] desktop-lg:w-[140px]",
    height: "h-[110px] desktop-lg:h-[140px]",
    className:
      "absolute tablet-sm:left-52 tablet-sm:bottom-16 tablet-lg:left-40 tablet-lg:bottom-16 laptop-lg:left-52 laptop-lg:bottom-20 desktop-lg:bottom-[50%]",
    ImageWidth: 98,
    ImageHeight: 65,
  },
];
