// 'use client';
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// export interface CardData {
//   id: string;
//   title: string;
//   description: string;
//   iconPath: string;
//   colorClass: string;
//   number: string;
// }

// const AnimatedCards: React.FC = () => {
//   const cardsData: CardData[] = [
//     {
//       id: "01",
//       title: "App Screens",
//       description: "A multiple app screen perspective mockup helps you display your design in style.",
//       iconPath: "/icons/mobile.svg",
//       colorClass: "bg-orange-500 text-white",
//       number: "01"
//     },
//     {
//       id: "02",
//       title: "Smart Layers",
//       description: "A new set of perspective app mockups to help you display your different mobile designs with ease.",
//       iconPath: "/icons/eye.svg",
//       colorClass: "bg-amber-100",
//       number: "02"
//     },
//     {
//       id: "03",
//       title: "Perspective",
//       description: "You can add your designs with the smart layer and display them in style.",
//       iconPath: "/icons/cube.svg",
//       colorClass: "bg-red-500 text-white",
//       number: "03"
//     },
//     {
//       id: "04",
//       title: "Free Resource",
//       description: "A versatile perspective series of app screens for designers. Easily swap in your designs and create visuals according to your needs.",
//       iconPath: "/icons/pencil.svg",
//       colorClass: "bg-blue-900 text-white",
//       number: "04"
//     },
//     {
//       id: "05",
//       title: "Mock Up",
//       description: "Screen perspective app screen mockup to display your mobile designs. Just add your app screens with the smart layer.",
//       iconPath: "/icons/box.svg",
//       colorClass: "bg-green-500 text-white",
//       number: "05"
//     },
//     {
//       id: "06",
//       title: "App Screens",
//       description: "A multiple app screen perspective mockup helps you display your designs in style.",
//       iconPath: "/icons/monitor.svg",
//       colorClass: "bg-amber-100",
//       number: "06"
//     }
//   ];

//   const [isMounted, setIsMounted] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     setIsMounted(true);

//     setWindowSize({
//       width: window.innerWidth,
//       height: window.innerHeight
//     });

//     const handleResize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight
//       });
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       setIsMounted(false);
//     };
//   }, []);

//   const createColumnCards = (startIndex: number, endIndex: number, count: number = 6) => {
//     const columnCards: (CardData & { uniqueId: string })[] = [];
//     const selectedCards = cardsData.slice(startIndex, endIndex);

//     for (let i = 0; i < count; i++) {
//       selectedCards.forEach(card => {
//         columnCards.push({
//           ...card,
//           uniqueId: `${card.id}-${i}`
//         });
//       });
//     }

//     return columnCards;
//   };

//   const column1Cards = createColumnCards(0, 6);
//   const column2Cards = createColumnCards(0, 6);
//   const column3Cards = createColumnCards(0, 6);
//   const column4Cards = createColumnCards(0, 6);

//   const getCardWidth = () => {
//     const baseWidth = windowSize.width / 4.5;
//     return Math.min(baseWidth, 320);
//   };

//   const getCardHeight = () => {
//     const baseHeight = windowSize.height / 3;
//     return Math.min(baseHeight, 900);
//   };

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden bg-gray-200">
//       {isMounted && (
//         <div className="w-full h-screen grid grid-cols-4 gap-2 px-2">
//           {/* Column 1 - Top to Bottom */}
//           <div className="relative h-full overflow-hidden">
//             <div className="absolute inset-0">
//               {column1Cards.map((card, index) => (
//                 <CardItem
//                   key={`${card.id}-${index}`}
//                   card={card}
//                   index={index}
//                   direction="down"
//                   cardWidth={getCardWidth()}
//                   cardHeight={getCardHeight()}
//                   totalCards={column1Cards.length}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Column 2 - Bottom to Top */}
//           <div className="relative h-full overflow-hidden">
//             <div className="absolute inset-0">
//               {column2Cards.map((card, index) => (
//                 <CardItem
//                   key={`${card.id}-${index}`}
//                   card={card}
//                   index={index}
//                   direction="up"
//                   cardWidth={getCardWidth()}
//                   cardHeight={getCardHeight()}
//                   totalCards={column2Cards.length}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Column 3 - Top to Bottom */}
//           <div className="relative h-full overflow-hidden">
//             <div className="absolute inset-0">
//               {column3Cards.map((card, index) => (
//                 <CardItem
//                   key={`${card.id}-${index}`}
//                   card={card}
//                   index={index}
//                   direction="down"
//                   cardWidth={getCardWidth()}
//                   cardHeight={getCardHeight()}
//                   totalCards={column3Cards.length}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Column 4 - Bottom to Top */}
//           <div className="relative h-full overflow-hidden">
//             <div className="absolute inset-0">
//               {column4Cards.map((card, index) => (
//                 <CardItem
//                   key={`${card.id}-${index}`}
//                   card={card}
//                   index={index}
//                   direction="up"
//                   cardWidth={getCardWidth()}
//                   cardHeight={getCardHeight()}
//                   totalCards={column4Cards.length}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// interface CardItemProps {
//   card: CardData & { uniqueId?: string };
//   index: number;
//   direction: 'up' | 'down';
//   cardWidth: number;
//   cardHeight: number;
//   totalCards: number;
// }

// const CardItem: React.FC<CardItemProps> = ({
//   card,
//   index,
//   direction,
//   cardWidth,
//   cardHeight,
//   totalCards
// }) => {
//   const getTilt = () => {
//     return -10;
//   };

//   const getInitialY = () => {
//     const totalDistance = 10000;
//     const segmentSize = totalDistance / (totalCards / 6);
//     const position = (index % 6) * segmentSize;

//     return direction === 'down'
//       ? -cardHeight - position
//       : window.innerHeight + position;
//   };

//   const getAnimateY = () => {
//     const distance = window.innerHeight + cardHeight * 6;

//     return direction === 'down'
//       ? window.innerHeight + 100
//       : -cardHeight - 100;
//   };

//   return (
//     <motion.div
//       className={`${card.colorClass} shadow-lg rounded-lg flex flex-col p-4 overflow-hidden absolute`}
//       style={{
//         width: cardWidth,
//         height: cardHeight,
//         left: '50%',
//         marginLeft: -cardWidth / 2,
//         rotate: getTilt(),
//         transformOrigin: 'center center',
//         zIndex: index % 6,
//       }}
//       initial={{
//         y: getInitialY(),
//         opacity: 1
//       }}
//       animate={{
//         y: getAnimateY()
//       }}
//       transition={{
//         duration: 15,
//         repeat: Infinity,
//         repeatType: "loop",
//         ease: "linear",
//         delay: (index % 6) * 2.5
//       }}
//     >
//       <div className="flex-1 flex flex-col">
//         <div className="mb-2">
//           <Image
//             src={card.iconPath}
//             alt={`${card.title} icon`}
//             width={28}
//             height={28}
//             className="object-contain"
//           />
//         </div>
//         <h3 className="text-lg font-bold mb-1">{card.title}</h3>
//         <p className="text-xs flex-1">{card.description}</p>
//         <div className="mt-auto text-right pr-2 pb-1 text-2xl font-light opacity-50">
//           {card.number}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default AnimatedCards;
