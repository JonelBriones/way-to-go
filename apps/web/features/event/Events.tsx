import React from "react";
import Navbar from "../../components/navbar/Navbar";
import View from "../../components/View";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

const Events = () => {
  const events = [
    {
      _id: "1",
      name: "Knock2",
      landmarks: [],
    },
    {
      _id: "2",
      name: "Porter Robinson",
      landmarks: [],
    },
    {
      _id: "3",
      name: "ACL",
      landmarks: [],
    },
  ];
  return (
    <View>
      <div className="flex flex-col gap-4">
        <h4 className="text-lg font-semibold">Your events</h4>
        <div className="flex gap-2 flex-wrap">
          {events.map((event) => (
            <Link
              key={event._id}
              href={`/events/${event.name}`}
              className="bg-accent-200 w-fit p-2 px-4 rounded-xl"
            >
              {event.name}
            </Link>
          ))}
        </div>
      </div>
      <Link
        href={"/events/create"}
        className="absolute bottom-0 right-0 mr-10 mb-10 bg-accent-200 text-black rounded-full size-12 flex place-items-center justify-center text-sm font-semibold"
      >
        <FaPlus size={"1.25rem"} />
      </Link>
    </View>
  );
};

export default Events;
