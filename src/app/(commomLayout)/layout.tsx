import Navbar from "@/components/modules/shared/Navbar/Navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto px-4 md:px-0">{children}</div>
    </div>
  );
};

export default layout;
