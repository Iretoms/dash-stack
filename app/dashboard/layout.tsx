import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-nunito w-full flex">
      <Sidebar />
      <section className="flex-1">
        <Navbar />
        <main className="bg-gray-1 h-[calc(100vh-70px)] px-5">{children}</main>
      </section>
    </div>
  );
};

export default layout;
