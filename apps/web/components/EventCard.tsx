import Link from "next/link";
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { mockEvents } from "../data/events";
import Image from "next/image";
const EventCard = ({ event }: any) => {
  console.log(event);
  return (
    <Link
      href={`/events/${event._id}`}
      className="w-full flex gap-4 place-items-center even:bg-secondary-50 odd:bg-primary-50 cursor-pointer rounded-xl"
    >
      <Image
        src={event.image}
        height={0}
        width={0}
        alt={event.image}
        sizes="100vh"
        className="size-20 rounded-xl m-1"
      />
      <div>
        <div className="flex flex-col">
          <span>{event.name}</span>
          <span>
            {new Date(event.date).toLocaleDateString("en-us", {
              month: "short",
              day: "2-digit",
              hour: "numeric",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
