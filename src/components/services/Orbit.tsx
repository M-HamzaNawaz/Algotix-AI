"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import robotSvg from "@/public/images/services/robot.png";
import firePng from "@/public/images/services/fire.png";
import dottedCircleSvg from "@/public/images/services/doted-circle1.svg";
import dottedCircleSvg2 from "@/public/images/services/doted-circle2.svg";
import dottedCircleSvg3 from "@/public/images/services/doted-circle3.svg";
import iconDocument from "@/public/images/services/document.svg";
import iconAi from "@/public/images/services/ai.svg";
import iconNetwork from "@/public/images/services/network.svg";
import python from "@/public/images/services/techicons/Python.svg";
import iconAngular from "@/public/images/services/techicons/AngularJS.svg";
import reactIcon from "@/public/images/services/techicons/React.svg";
import bitBucket from "@/public/images/services/techicons/BitBucket.svg";
import iconDart from "@/public/images/services/techicons/Dart.svg";
import digitalOcean from "@/public/images/services/techicons/DigitalOcean.svg";
import docker from "@/public/images/services/techicons/Docker.svg";
import fastApi from "@/public/images/services/techicons/FastAPI.svg";
import figma from "@/public/images/services/techicons/Figma.svg";
import firebase from "@/public/images/services/techicons/Firebase.svg";
import mongoDB from "@/public/images/services/techicons/MongoDB.svg";
import nestJs from "@/public/images/services/techicons/Nestjs.svg";
import aws from "@/public/images/services/techicons/AWS.svg";

const OrbitDesign: React.FC = () => {
  const [outerRotation, setOuterRotation] = useState(0);
  const [innerRotation, setInnerRotation] = useState(0);
  const [middleRotation, setMiddleRotation] = useState(0);
  const [firePosition, setFirePosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOuterRotation((prev) => prev - 1);
      setMiddleRotation((prev) => prev + 0.25);
      setInnerRotation((prev) => prev - 0.9);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fireInterval = setInterval(() => {
      setFirePosition((prev) => (prev === 0 ? 10 : 0));
    }, 250);
    return () => clearInterval(fireInterval);
  }, []);

  const calculatePosition = (radius: number, angle: number) => ({
    left: `calc(50% + ${radius * Math.cos(angle)}px)`,
    top: `calc(50% + ${radius * Math.sin(angle)}px)`,
  });

  return (
    <>
      {/* Desktop/Laptop Version */}
      <main className="hidden md:flex   md:py-4 mb-2 justify-center items-center">
        <div className="relative w-full max-w-[600px] h-[400px] md:h-[600px] flex items-center justify-center">
          <Image
            src={dottedCircleSvg}
            alt="Dotted Circle 1"
            className="absolute hidden md:block hide-at-1024"
          />
          <Image
            src={dottedCircleSvg2}
            alt="Dotted Circle 2"
            className="absolute max-md:w-[40%] md:w-full"
          />
          <Image
            src={dottedCircleSvg3}
            alt="Dotted Circle 3"
            className="absolute max-md:w-[60%]"
          />

          <div className="absolute top-[calc(50%+40px)] md:top-[calc(50%+60px)] left-[calc(50%-25px)] w-[50px] h-[30px] overflow-hidden">
            <Image
              src={firePng}
              alt="Fire"
              width={50}
              height={30}
              className="absolute transition-all duration-500 ease-in-out"
              style={{
                bottom: `${firePosition}px`,
                left: 0,
                right: 0,
              }}
            />
          </div>

          <Image
            src={robotSvg}
            alt="Robot"
            className="absolute w-32 h-32 md:w-48 md:h-48 z-10"
          />

          {/* Outer Orbit: Design and Early Frontend */}
          <div
            className="absolute w-full h-full hidden md:block"
            style={{ transform: `rotate(${outerRotation}deg)` }}
          >
            {[
              { icon: figma, angle: 0, label: "Design", hideAt1024: true },
              {
                icon: iconDocument,
                angle: Math.PI / 2,
                label: "Design",
                hideAt1024: true,
              },
              {
                icon: reactIcon,
                angle: Math.PI,
                label: "Frontend",
                hideAt1024: true,
              },
              {
                icon: iconAngular,
                angle: (3 * Math.PI) / 2,
                label: "Frontend",
                hideAt1024: true,
              },
            ].map(({ icon, angle, label, hideAt1024 }, index) => (
              <Image
                key={`outer-${index}`}
                src={icon}
                alt={`${label} Icon ${index + 1}`}
                className={`absolute w-10 h-10 ${hideAt1024 ? "hide-at-1024" : ""}`}
                style={{
                  ...calculatePosition(290, angle),
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
          </div>

          {/* Inner Orbit: Later Frontend and Backend */}
          <div
            className="absolute w-full h-full"
            style={{ transform: `rotate(${innerRotation}deg)` }}
          >
            {[
              { icon: iconDart, angle: 0, label: "Frontend" },
              { icon: fastApi, angle: (Math.PI * 2) / 4, label: "Backend" },
              { icon: nestJs, angle: (Math.PI * 4) / 4, label: "Backend" },
              { icon: python, angle: (Math.PI * 6) / 4, label: "Backend" },
            ].map(({ icon, angle, label }, index) => (
              <Image
                key={`inner-${index}`}
                src={icon}
                alt={`${label} Icon ${index + 1}`}
                className="absolute w-6 md:w-8 h-6 md:h-8"
                style={{
                  ...calculatePosition(170, angle),
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
          </div>

          {/* Middle Orbit: Backend, Deployment, and Maintenance */}
          <div
            className="absolute w-full h-full hidden md:block"
            style={{ transform: `rotate(${middleRotation}deg)` }}
          >
            {[
              { icon: mongoDB, angle: 0, label: "Backend" },
              { icon: docker, angle: (Math.PI * 2) / 8, label: "Deployment" },
              {
                icon: digitalOcean,
                angle: (Math.PI * 4) / 8,
                label: "Deployment",
              },
              { icon: aws, angle: (Math.PI * 6) / 8, label: "Deployment" },
              {
                icon: bitBucket,
                angle: (Math.PI * 8) / 8,
                label: "Deployment",
              },
              { icon: iconAi, angle: (Math.PI * 10) / 8, label: "Maintenance" },
              {
                icon: iconNetwork,
                angle: (Math.PI * 12) / 8,
                label: "Maintenance",
              },
              {
                icon: firebase,
                angle: (Math.PI * 14) / 8,
                label: "Maintenance",
              },
            ].map(({ icon, angle, label }, index) => (
              <Image
                key={`middle-${index}`}
                src={icon}
                alt={`${label} Icon ${index + 1}`}
                className="absolute w-8 h-8"
                style={{
                  ...calculatePosition(230, angle),
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
          </div>
        </div>
      </main>
      <style>{`
  @media screen and (width: 1024px) {
    .hide-at-1024 {
      display: none !important;
    }
  }
`}</style>

      {/* Mobile Version */}
      <div className="md:hidden relative w-full max-w-[300px] h-[200px] flex items-center justify-center mx-auto mt-10">
        <Image
          src={dottedCircleSvg}
          alt="Dotted Circle 1"
          className="absolute w-[90%]"
        />
        <Image
          src={dottedCircleSvg2}
          alt="Dotted Circle 2"
          className="absolute w-[55%]"
        />
        <Image
          src={dottedCircleSvg3}
          alt="Dotted Circle 3"
          className="absolute w-[30%]"
        />

        <div className="absolute top-[calc(50%+20px)] left-[calc(50%-12.5px)] w-[25px] h-[15px] overflow-hidden">
          <Image
            src={firePng}
            alt="Fire"
            width={25}
            height={15}
            className="absolute transition-all duration-500 ease-in-out"
            style={{ bottom: `${firePosition / 2}px`, left: 0, right: 0 }}
          />
        </div>

        <Image src={robotSvg} alt="Robot" className="absolute w-16 h-16 z-10" />

        {/* Outer Orbit: Design and Early Frontend */}
        <div
          className="absolute w-full h-full"
          style={{ transform: `rotate(${outerRotation}deg)` }}
        >
          {[
            { icon: figma, angle: 0, label: "Design" },
            { icon: iconDocument, angle: Math.PI / 2, label: "Design" },
            { icon: reactIcon, angle: Math.PI, label: "Frontend" },
            { icon: iconAngular, angle: (3 * Math.PI) / 2, label: "Frontend" },
          ].map(({ icon, angle, label }, index) => (
            <Image
              key={`outer-mobile-${index}`}
              src={icon}
              alt={`${label} Icon ${index + 1}`}
              className="absolute w-5 h-5"
              style={{
                ...calculatePosition(135, angle),
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>

        {/* Inner Orbit: Later Frontend and Backend */}
        <div
          className="absolute w-full h-full"
          style={{ transform: `rotate(${innerRotation}deg)` }}
        >
          {[
            { icon: iconDart, angle: 0, label: "Frontend" },
            { icon: fastApi, angle: (Math.PI * 2) / 4, label: "Backend" },
            { icon: nestJs, angle: (Math.PI * 4) / 4, label: "Backend" },
            { icon: python, angle: (Math.PI * 6) / 4, label: "Backend" },
          ].map(({ icon, angle, label }, index) => (
            <Image
              key={`inner-mobile-${index}`}
              src={icon}
              alt={`${label} Icon ${index + 1}`}
              className="absolute w-4 h-4"
              style={{
                ...calculatePosition(80, angle),
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>

        {/* Middle Orbit: Backend, Deployment, and Maintenance */}
        <div
          className="absolute w-full h-full"
          style={{ transform: `rotate(${middleRotation}deg)` }}
        >
          {[
            { icon: mongoDB, angle: 0, label: "Backend" },
            { icon: docker, angle: (Math.PI * 2) / 8, label: "Deployment" },
            {
              icon: digitalOcean,
              angle: (Math.PI * 4) / 8,
              label: "Deployment",
            },
            { icon: aws, angle: (Math.PI * 6) / 8, label: "Deployment" },
            { icon: bitBucket, angle: (Math.PI * 8) / 8, label: "Deployment" },
            { icon: iconAi, angle: (Math.PI * 10) / 8, label: "Maintenance" },
            {
              icon: iconNetwork,
              angle: (Math.PI * 12) / 8,
              label: "Maintenance",
            },
            { icon: firebase, angle: (Math.PI * 14) / 8, label: "Maintenance" },
          ].map(({ icon, angle, label }, index) => (
            <Image
              key={`middle-mobile-${index}`}
              src={icon}
              alt={`${label} Icon ${index + 1}`}
              className="absolute w-4 h-4"
              style={{
                ...calculatePosition(110, angle),
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default OrbitDesign;
