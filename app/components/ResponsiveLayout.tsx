// ResponsiveLayout.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Settings } from "lucide-react";

interface ResponsiveLayoutProps {
  sidebarContent: React.ReactNode;
  mainContent: React.ReactNode;
}

const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({
  sidebarContent,
  mainContent
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Mobile view - show drawer button */}
      <div className="block lg:hidden fixed bottom-4 right-4 z-10">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button size="icon" variant="secondary" className="rounded-full h-12 w-12 shadow-lg">
              <Settings className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[85vw] sm:w-[350px]">
            {sidebarContent}
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop view - show sidebar and content */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full">
        {/* Sidebar - hidden on mobile */}
        <div className="hidden lg:block lg:w-1/3">
          {sidebarContent}
        </div>

        {/* Main content - full width */}
        <div className="w-full lg:w-2/3">
          {mainContent}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveLayout;