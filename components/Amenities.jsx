"use client";
import {
  FaWalking,
  FaSwimmingPool,
  FaWater,
  FaTheaterMasks,
  FaDumbbell,
  FaGlassCheers,
  FaFilm,
  FaTableTennis,
  FaChild,
  FaShieldAlt,
} from "react-icons/fa";

import skywalk from "@/assets/skywalk.webp";
import steppedPool from "@/assets/pool-stepped.webp";
import waterfall from "@/assets/waterfall-garden.webp";
import amphitheatre from "@/assets/amphitheatre.webp";
import gym from "@/assets/gym-club.webp";
import avRoom from "@/assets/av-room.webp";
import partyHall from "@/assets/party-hall.webp";

const images = [skywalk, steppedPool, waterfall, amphitheatre, gym, avRoom, partyHall];
import ImageSlider from "@/components/ImageSlider";


import bgImg from "../assets/Lines-PNG-Free-Image.webp";


const amenities = [
  { icon: <FaWalking />,      text: "Towering arched skywalk above the greens" },
  { icon: <FaSwimmingPool />, text: "Swimming pool and sculptural stepped pool" },
  { icon: <FaWater />,        text: "Waterfall area and wooden decks with planting" },
  { icon: <FaTheaterMasks />, text: "Open-air amphitheatre" },
  { icon: <FaDumbbell />,     text: "Clubhouse gymnasium and outdoor open gym" },
  { icon: <FaGlassCheers />,  text: "Multi-purpose party hall and lounge" },
  { icon: <FaFilm />,         text: "Audio visual room with tiered recliner seating" },
  { icon: <FaTableTennis />,  text: "Indoor gaming zone — table tennis, snooker, carrom" },
  { icon: <FaChild />,        text: "Pre-teen, teen and senior citizen areas" },
  { icon: <FaShieldAlt />,    text: "Gated security, CCTV and video door phone" },
];

import { useModal } from "./ModalContext";

export default function Amenities() {
  const { openModal } = useModal();
  return (
    <section
      id="amenities"
      className="w-full bg-[#4F3318] py-16 px-6 md:px-12 lg:px-20 text-[#FDE6C0] relative overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-3 pointer-events-none"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
        }}
      />

      {/* Mirrored background */}
      <div
        className="absolute inset-0 opacity-3 transform scale-x-[-1] pointer-events-none"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
        }}
      />

      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center">
          <h6 className="text-[#DCA54A] uppercase mb-4">
            Renaissance &amp; Bloomsbury
          </h6>
          <h2 className="text-[#FDE6C0] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            A Landscape and a Clubhouse Named After an Age of Art
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          {/* Left */}
          <div className="flex-1 flex flex-col gap-5">
            <p className="text-sm md:text-base leading-relaxed">
              Two names carry the amenities at Trecento Residences. <strong>Renaissance</strong>{" "}
              is the landscape — an arched skywalk winding above pools, waterfalls and planted
              decks. <strong>Bloomsbury</strong> is the clubhouse, where the gymnasium, lounge,
              audio visual room and gaming zone sit together under one roof.
            </p>

            <ul className="flex flex-col gap-[18px]">
              {amenities.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="flex-shrink-0 text-lg text-[#DCA54A]">
                    {item.icon}
                  </span>
                  <span className="text-sm md:text-base">{item.text}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm md:text-base leading-relaxed mt-1">
              Community facilities are shared between Tower A and the future development tower.
              Beyond the gates, the wider Jaypee Greens township adds an 18-hole golf course, a
              practice range, the Boomerang Club and The Atlantic sports complex.
            </p>

            <div className="mt-3">
              <button
                onClick={() => openModal()}
                className="inline-block bg-[#c9a84c] text-[#fff] text-xs rounded-[8px] font-bold uppercase px-7 py-3 cursor-pointer hover:bg-[#b8933e] transition"
              >
                Know More
              </button>
            </div>
          </div>

          {/* Right Image */}
         <div className="w-full lg:w-[50%]  h-[300px] md:h-[550px] flex-shrink-0">
  <ImageSlider images={images} />
</div>

        </div>
      </div>
    </section>
  );
}
