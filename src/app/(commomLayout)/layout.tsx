import Navbar from "@/components/modules/shared/Navbar/Navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      <div className="">{children}</div>
    </div>
  );
};

export default layout;
