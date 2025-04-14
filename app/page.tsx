"use client";

import Image from "next/image";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <main className="p-10 w-screen h-screen grid grid-cols-3 items-center">
      <div className="flex flex-col items-center relative col-span-1">
        Parameter Configuration
      </div>
      <div className="items-center relative col-span-2">
        <Chat />
      </div>
    </main>
  );
}
