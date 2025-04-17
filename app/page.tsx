"use client";

import Image from "next/image";
import Chat from "./components/Chat";
import InvestmentParameterForm from "@/app/components/InvestmentParameterForm";
import { ParametersProvider } from "@/contexts/ParametersContext";

export default function Home() {
  return (
    <ParametersProvider>
      <main className="w-screen h-screen">
        <div>
          <p className="text-3xl font-bold text-center p-10">
            InvestMentor
          </p>
        </div>
        <div className="flex gap-10 px-10 w-full grid grid-cols-3 relative">
          <div className="flex flex-col items-center relative col-span-1">
            <InvestmentParameterForm />
          </div>
          <div className="items-center relative col-span-2">
            <Chat />
          </div>
        </div>
      </main>
    </ParametersProvider>
  );
}
