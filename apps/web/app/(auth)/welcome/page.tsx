"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import View from "../../../components/View";

const page = () => {
  const [page, setPage] = useState(0);
  const welcomeScreenData = [
    {
      header: "Welcome to Event Companion",
      text: "Your ultimate group event navigation tool",
      image: "/images/welcome/welcome_2.png",
    },
    {
      header: "Real-Time Location Tracking",
      text: "Always know where your friends are during events. Track group members instantly and effortlessly.",
      image: "/images/welcome/welcome_1.png",
    },
    {
      header: "Custom Event Landmarks",
      text: "Create and share custom landmarks like meet-up spots, bathrooms, stages, and more. Never lose your group again!",
      image: "/images/welcome/welcome_3.png",
    },
    {
      header: "Group Coordination Made Easy",
      text: "Receive automatic notifications when friends arrive at specific landmarks or locations.",
      image: "/images/welcome/welcome_4.png",
    },
    {
      header: "Privacy First",
      text: "Full control over your location sharing. Choose who sees your location and when.",
      image: "/images/welcome/welcome_5.png",
    },
    {
      header: "Ready to Connect?",
      text: "Create your first event and start exploring with your friends!",
    },
  ];
  return (
    <View>
      <div className="text-center h-full flex flex-col">
        <div className="flex-1/4 flex justify-center place-items-center">
          {welcomeScreenData[page].image ? (
            <Image
              src={welcomeScreenData[page].image}
              width={0}
              height={0}
              sizes="100vh"
              alt={welcomeScreenData[page].image}
              className="w-80"
            />
          ) : (
            <Link
              href={"/events/create"}
              className="flex place-items-center justify-center bg-accent-200 rounded-full size-40 p-4 text-xl"
            >
              Create event
            </Link>
          )}
        </div>
        <div className="flex gap-4 flex-col flex-1 justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">
              {welcomeScreenData[page].header}
            </h2>
            <p className="text-text-secondary">
              {welcomeScreenData[page].text}
            </p>
          </div>
          <div className="flex justify-between place-items-center mb-8">
            <button
              disabled={page === 0}
              onClick={() => setPage((prev) => prev - 1)}
              className="bg-accent-200 rounded-full p-2"
            >
              <FaAngleDoubleLeft size={"1.5rem"} />
            </button>
            <div className="flex gap-1">
              {welcomeScreenData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPage(idx)}
                  className={` size-4 block rounded-full ${
                    page === idx ? "bg-accent-200" : "bg-neutral-200"
                  } transition-colors duration-200 ease-in-out`}
                />
              ))}
            </div>
            <button
              disabled={page === welcomeScreenData.length - 1}
              onClick={() => setPage((prev) => prev + 1)}
              className="bg-accent-200 rounded-full p-2"
            >
              <FaAngleDoubleRight size={"1.5rem"} />
            </button>
          </div>
        </div>
      </div>
    </View>
  );
};

export default page;
