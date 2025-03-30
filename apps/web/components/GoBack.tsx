"use client";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
const GoBack = ({ bgColor }: any) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className={`p-2 mb-4 cursor-pointer size-10 bg-background-light rounded-full`}
    >
      <IoIosArrowBack size={"1.25rem"} />
    </button>
  );
};

export default GoBack;
