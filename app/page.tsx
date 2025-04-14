"use client";

import Image from "next/image";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <div>
        <p className="text-3xl font-bold text-center p-10">
          InvestMentor
        </p>
      </div>
      <div className="flex gap-10 px-10 w-full grid grid-cols-3 items-center">
        <div className="flex flex-col items-center relative col-span-1">
          Parameter Configuration
        </div>
        <div className="items-center relative col-span-2">
          <Chat />
        </div>
      </div>
    </main>
  );
}
