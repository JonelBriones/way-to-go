"use client";
import React, { useState } from "react";
import View from "../../../../components/View";
import GoBack from "../../../../components/GoBack";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineEdit } from "react-icons/ai";
import { Event } from "../../../../data/events";

const Event = ({ event }: { event: Event }) => {
  const [toggleInviteView, setToggleInviteView] = useState(false);

  return (
    <View>
      <div className="flex flex-col gap-4 h-full relative">
        <div
          className="w-full h-70 gaspect-square relative block rounded-xl "
          style={{
            backgroundImage: `url(${event?.image})`,
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-0 right-0 left-0  opacity-20 bg-black w-full h-full border" />
          <div className="absolute z-10 top-0 left-0 w-full text-center">
            <div className="flex justify-between p-4">
              <GoBack />
              <button className=" bg-primary-400 text-text-primary rounded-full size-10 flex place-items-center justify-center cursor-pointer">
                <AiOutlineEdit size={"1.5rem"} />
              </button>
            </div>
            <h4 className="font-semibold text-4xl text-neutral-50 w-full text-center">
              {event?.name}
            </h4>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${event.location}`}
              target="_blank"
              className="font-semibold text-xl text-neutral-100 underline"
            >
              {event.location}
            </a>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-2 flex-1">g</div>
          <div className="flex flex-col gap-2 flex-1">
            <span>
              Going {event.invited.reduce((a, b) => a + (b.going ? 1 : 0), 0)}/
              {event.invited.length}
            </span>
            <ul className="flex flex-col gap-1">
              {event?.invited.map((friend, idx) => (
                <li
                  key={idx}
                  className={`rounded-lg p-2 px-4 ${
                    friend.going === null
                      ? "bg-neutral-100"
                      : friend.going
                      ? "bg-green-100"
                      : "bg-red-100"
                  }`}
                >
                  <span>{friend.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          onClick={() => setToggleInviteView}
          className="absolute bottom-0 right-0 mr-10 mb-10 bg-primary-400 text-text-primary rounded-full size-12 flex place-items-center justify-center cursor-pointer"
        >
          <IoIosAdd size={"2rem"} />
        </button>
      </div>
    </View>
  );
};

export default Event;
