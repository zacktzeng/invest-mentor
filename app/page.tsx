"use client";

import Chat from "./components/Chat";
import InvestmentParameterForm from "./components/InvestmentParameterForm";
import ResponsiveLayout from "./components/ResponsiveLayout";
import { ParametersProvider } from "@/contexts/ParametersContext";

export default function Home() {
  return (
    <ParametersProvider>
      <main className="w-full min-h-screen p-4 md:p-6 lg:p-10">
        <div className="mb-6 md:mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            InvestMentor
          </h1>
        </div>
        
        <ResponsiveLayout 
          sidebarContent={<InvestmentParameterForm />}
          mainContent={<Chat />}
        />
      </main>
    </ParametersProvider>
  );
}