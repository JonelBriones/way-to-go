import React, { Fragment } from "react";
import Navbar from "../../components/navbar/Navbar";
import View from "../../components/View";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";
import EventCard from "../../components/EventCard";
import { Event } from "../../data/events";
const Events = ({ events }: { events: Event[] }) => {
  return (
    <View>
      <div className="flex flex-col gap-4 relative h-full">
        <h4 className="text-lg font-semibold">Next events</h4>
        <div className="flex flex-col gap-2">
          {events.map((event) => (
            <Fragment key={event._id}>
              <EventCard event={event} />
            </Fragment>
          ))}
        </div>

        <Link
          href={"/events/create"}
          className="absolute bottom-0 right-0 mr-10 mb-10 bg-primary-400 text-text-primary rounded-full size-12 flex place-items-center justify-center text-sm font-semibold"
        >
          <IoIosAdd size={"2rem"} />
        </Link>
      </div>
    </View>
  );
};

export default Events;
