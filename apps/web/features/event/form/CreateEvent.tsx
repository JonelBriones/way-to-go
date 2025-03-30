"use client";
import React, { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import View from "../../../components/View";
const defaultEventForm = {
  name: "",
  invited: [],
  hosted: "Jonel",
};
const CreateEvent = () => {
  const [event, setEvent] = useState("");
  const error = "";

  return (
    <View>
      <form action="" className="flex flex-col gap-4 text-left">
        <div className="flex flex-col gap-4 font-semibold">
          <label htmlFor="" className="text-sm">
            Event name
          </label>
          <input
            onChange={(e) => setEvent(e.target.value)}
            type="text"
            value={event}
            placeholder="Event name"
            className={`border p-3 rounded-sm outline-none ${
              error ? "border-error-500" : ""
            }`}
          />
          {error && (
            <span className="text-error-500 text-sm font-medium">{error}</span>
          )}
        </div>
        <button className="rounded-full text-lg font-bold py-2 bg-accent-200 hover:bg-accent-50 text-black cursor-pointer ">
          Create
        </button>
      </form>
    </View>
  );
};

export default CreateEvent;
