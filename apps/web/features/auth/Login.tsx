"use client";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const providers = ["google", "apple", "facebook"];
  const [error, setError] = useState(
    `This email is invalid. Make sure it's written like example@gmail.com`
  );
  return (
    <div className="text-center border h-full flex flex-col gap-4 p-8">
      <div>
        <h1 className="text-2xl font-bold">WAYTOGO</h1>
      </div>
      <div className="flex flex-col gap-2">
        {providers.map((provider) => (
          <button
            key={provider}
            className="border rounded-full text-lg font-bold py-2 cursor-pointer"
          >
            {provider}
          </button>
        ))}
      </div>
      <form action="" className="flex flex-col gap-4 text-left">
        <div className="flex flex-col gap-4 font-semibold">
          <label htmlFor="" className="text-sm">
            Email or username
          </label>
          <input
            type="text"
            placeholder="Email or username"
            className={`border p-3 rounded-sm ${
              error ? "border-error-500" : ""
            }`}
          />
          {error && (
            <span className="text-error-500 text-sm font-medium">{error}</span>
          )}
        </div>
        <div className="flex flex-col gap-4 font-semibold">
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Password"
            className={`border p-3 rounded-sm ${
              error ? "border-error-500" : ""
            }`}
          />
        </div>
        <div className="flex justify-between">
          <span>Remember me</span>
          <button>toggle</button>
        </div>
        <button className="rounded-full text-lg font-bold py-2 bg-accent-200 hover:bg-accent-50 text-black cursor-pointer ">
          LOG IN
        </button>
      </form>
      <span className="text-text-muted font-semibold">
        Don't have an account?{" "}
        <Link href={"/signup"} className="text-text-secondary underline">
          Log in here
        </Link>
        .
      </span>
    </div>
  );
};

export default Login;
